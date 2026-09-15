import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const allowedDocumentTypes: Record<string, string[]> = {
  panCard: ["image/jpeg", "image/png", "image/webp", "application/pdf"],
  vehicleImage: ["image/jpeg", "image/png", "image/webp"],
  rcFrontImage: ["image/jpeg", "image/png", "image/webp"],
  rcBackImage: ["image/jpeg", "image/png", "image/webp"],
};

const getText = (value: FormDataEntryValue | null) =>
  typeof value === "string" ? value.trim() : "";

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] || character
  );

const isFile = (value: FormDataEntryValue | null): value is File =>
  typeof value !== "string" && value !== null && typeof value.arrayBuffer === "function";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const fullName = getText(formData.get("fullName"));
    const mobile = getText(formData.get("mobile")).replace(/\D/g, "");
    const email = getText(formData.get("email"));
    const vehicleNumber = getText(formData.get("vehicleNumber")).toUpperCase();
    const vehicleType = getText(formData.get("vehicleType"));
    const deliveryAddress = getText(formData.get("deliveryAddress"));
    const city = getText(formData.get("city"));
    const state = getText(formData.get("state"));
    const pincode = getText(formData.get("pincode")).replace(/\D/g, "");

    const documentFields = ["panCard", "vehicleImage", "rcFrontImage", "rcBackImage"];
    const documents = Object.fromEntries(
      documentFields.map((field) => [field, formData.get(field)])
    ) as Record<string, FormDataEntryValue | null>;

    if (
      !fullName ||
      !mobile ||
      !email ||
      !vehicleNumber ||
      !vehicleType ||
      !deliveryAddress ||
      !city ||
      !state ||
      !pincode
    ) {
      return NextResponse.json(
        { success: false, error: "All required fields are required." },
        { status: 400 }
      );
    }

    if (mobile.length !== 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (pincode.length !== 6) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 6-digit pincode." },
        { status: 400 }
      );
    }

    const invalidDocument = documentFields
      .map((field) => {
        const file = documents[field];
        if (!isFile(file) || file.size === 0) {
          return `${field} is required.`;
        }
        if (file.size > MAX_FILE_SIZE) {
          return `${field} must be under 5MB.`;
        }
        if (!allowedDocumentTypes[field].includes(file.type)) {
          return `${field} has an unsupported file type.`;
        }
        return "";
      })
      .find(Boolean);

    if (invalidDocument) {
      return NextResponse.json(
        { success: false, error: invalidDocument },
        { status: 400 }
      );
    }

    const requiredConfig = {
      SMTP_HOST: process.env.SMTP_HOST?.trim(),
      SMTP_PORT: process.env.SMTP_PORT?.trim(),
      SMTP_USER: process.env.SMTP_USER?.trim(),
      SMTP_PASS: process.env.SMTP_PASS?.replace(/\s/g, ""),
      FASTAG_RECIPIENT_EMAIL: process.env.FASTAG_RECIPIENT_EMAIL?.trim(),
    };
    const missingConfig = Object.entries(requiredConfig)
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missingConfig.length > 0) {
      console.error("SMTP configuration missing:", missingConfig.join(", "));
      return NextResponse.json(
        {
          success: false,
          error: "Email service is temporarily unavailable. Please try again later.",
        },
        { status: 500 }
      );
    }

    const smtpPort = Number(requiredConfig.SMTP_PORT);
    if (!Number.isInteger(smtpPort) || smtpPort <= 0) {
      console.error("SMTP configuration invalid: SMTP_PORT must be a valid port.");
      return NextResponse.json(
        {
          success: false,
          error: "Email service is temporarily unavailable. Please try again later.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: requiredConfig.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: requiredConfig.SMTP_USER,
        pass: requiredConfig.SMTP_PASS,
      },
    });

    try {
      await transporter.verify();
    } catch (error: unknown) {
      const smtpError = error as {
        code?: string;
        command?: string;
        responseCode?: number;
        message?: string;
      };
      console.error("SMTP authentication failed:", {
        code: smtpError.code,
        command: smtpError.command,
        responseCode: smtpError.responseCode,
        message: smtpError.message,
      });
      return NextResponse.json(
        {
          success: false,
          error: "Email service authentication failed. Please try again later.",
        },
        { status: 502 }
      );
    }

    const documentLabels: Record<string, string> = {
      panCard: "PAN Card",
      vehicleImage: "Vehicle Image",
      rcFrontImage: "RC Front",
      rcBackImage: "RC Back",
    };
    const attachments = await Promise.all(
      documentFields.map(async (field) => {
        const file = documents[field] as File;
        return {
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
          contentType: file.type,
        };
      })
    );
    const documentSummary = documentFields
      .map((field) => `${documentLabels[field]}: ${(documents[field] as File).name}`)
      .join("\n");

    const plainTextBody = [
      "New FASTag Enquiry",
      "",
      "Customer Details",
      "----------------",
      `Full Name: ${fullName}`,
      `Mobile Number: ${mobile}`,
      `Email Address: ${email}`,
      "",
      "Vehicle Details",
      "---------------",
      `Vehicle Registration Number: ${vehicleNumber}`,
      `Vehicle Type: ${vehicleType}`,
      "",
      "Delivery Details",
      "----------------",
      `Delivery Address: ${deliveryAddress}`,
      `City: ${city}`,
      `State: ${state}`,
      `Pincode: ${pincode}`,
      "",
      "Documents",
      "---------",
      documentSummary,
      "",
      "Sent automatically from Transetu Website (https://transetu.com)",
    ].join("\n");

    const htmlRows = [
      ["Full Name", fullName],
      ["Mobile Number", `+91 ${mobile}`],
      ["Email Address", email],
      ["Vehicle Registration Number", vehicleNumber],
      ["Vehicle Type", vehicleType],
      ["Delivery Address", deliveryAddress],
      ["City", city],
      ["State", state],
      ["Pincode", pincode],
      ...documentFields.map((field) => [
        documentLabels[field],
        (documents[field] as File).name,
      ]),
    ]
      .map(
        ([label, value]) =>
          `<tr><td style="padding:12px 16px;color:#64748b;font-weight:700;">${escapeHtml(label)}</td><td style="padding:12px 16px;color:#0f172a;font-weight:600;">${escapeHtml(value)}</td></tr>`
      )
      .join("");

    await transporter.sendMail({
      from: `"Transetu Website" <${requiredConfig.SMTP_USER}>`,
      to: requiredConfig.FASTAG_RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New FASTag Enquiry - ${vehicleNumber}`,
      text: plainTextBody,
      html: `<div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;padding:24px;background:#f8fafc;color:#0f172a;"><h2 style="background:#071A0C;color:#fff;padding:20px;border-bottom:3px solid #59C71C;">New FASTag Enquiry</h2><table style="width:100%;border-collapse:collapse;background:#fff;">${htmlRows}</table><p style="color:#64748b;text-align:center;">Sent automatically from Transetu Website</p></div>`,
      attachments,
    });

    return NextResponse.json({
      success: true,
      message: "Your FASTag enquiry has been submitted successfully.",
    });
  } catch (error: unknown) {
    const requestError = error as { code?: string; message?: string };
    console.error("Failed to process FASTag enquiry:", {
      code: requestError.code,
      message: requestError.message,
    });
    return NextResponse.json(
      {
        success: false,
        error: "Unable to submit enquiry right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
