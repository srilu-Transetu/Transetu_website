"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Building,
  Car,
  Check,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  FileText,
  Loader2,
  Mail,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
  Upload,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import "./FastagEnquiryModal.css";

interface FastagEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type DocumentFieldName =
  | "panCard"
  | "vehicleImage"
  | "rcFrontImage"
  | "rcBackImage";

const VEHICLE_TYPES = [
  "Car / Jeep / Van",
  "Light Commercial Vehicle (LCV)",
  "Bus / 2-Axle Truck",
  "Multi-Axle Commercial Vehicle",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const initialFormData = {
  fullName: "",
  mobile: "",
  email: "",
  vehicleNumber: "",
  vehicleType: "Car / Jeep / Van",
  deliveryAddress: "",
  city: "",
  state: "",
  pincode: "",
  panCard: null as File | null,
  vehicleImage: null as File | null,
  rcFrontImage: null as File | null,
  rcBackImage: null as File | null,
};

const isAllowedDocumentType = (field: DocumentFieldName, file: File) => {
  const allowedByField: Record<DocumentFieldName, string[]> = {
    panCard: ["image/jpeg", "image/png", "image/webp", "application/pdf"],
    vehicleImage: ["image/jpeg", "image/png", "image/webp"],
    rcFrontImage: ["image/jpeg", "image/png", "image/webp"],
    rcBackImage: ["image/jpeg", "image/png", "image/webp"],
  };

  return allowedByField[field].includes(file.type);
};

const getDocumentErrorMessage = (field: DocumentFieldName, file: File) => {
  if (!isAllowedDocumentType(field, file)) {
    return field === "panCard"
      ? "Please upload a JPG, PNG, WEBP, or PDF file for the PAN Card."
      : "Please upload a JPG, PNG, or WEBP image for this document.";
  }

  if (file.size > MAX_FILE_SIZE) {
    return "File size must be under 5MB. Please choose a smaller file.";
  }

  return "";
};

export default function FastagEnquiryModal({
  isOpen,
  onClose,
}: FastagEnquiryModalProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isVehicleDropdownOpen, setIsVehicleDropdownOpen] = useState(false);
  const vehicleDropdownRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if (isSubmitting) return;
    setIsVehicleDropdownOpen(false);
    setSubmitSuccess(false);
    setApiError(null);
    setErrors({});
    setFormData({
      ...initialFormData,
      vehicleType: "Car / Jeep / Van",
    });
    onClose();
  };

  useEffect(() => {
    if (!isVehicleDropdownOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        vehicleDropdownRef.current &&
        !vehicleDropdownRef.current.contains(event.target as Node)
      ) {
        setIsVehicleDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVehicleDropdownOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isSubmitting) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isSubmitting]);

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;

    if (field === "mobile") {
      formattedValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (field === "pincode") {
      formattedValue = value.replace(/\D/g, "").slice(0, 6);
    } else if (field === "vehicleNumber") {
      formattedValue = value.toUpperCase();
    }

    setFormData((prev) => ({ ...prev, [field]: formattedValue }));

    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }

    if (apiError) {
      setApiError(null);
    }
  };

  const handleDocumentUpload = (field: DocumentFieldName, file: File | null) => {
    if (file) {
      const error = getDocumentErrorMessage(field, file);
      if (error) {
        setErrors((prev) => ({ ...prev, [field]: error }));
        return;
      }
    }

    setFormData((prev) => ({ ...prev, [field]: file }));

    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }

    if (apiError) {
      setApiError(null);
    }
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required";
    }

    const cleanMobile = formData.mobile.replace(/\D/g, "");
    if (!cleanMobile) {
      errs.mobile = "Mobile number is required";
    } else if (cleanMobile.length !== 10) {
      errs.mobile = "Enter a valid 10-digit mobile number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = "Enter a valid email address";
    }

    if (!formData.vehicleNumber.trim()) {
      errs.vehicleNumber = "Vehicle registration number is required";
    }

    if (!formData.vehicleType) {
      errs.vehicleType = "Please select a vehicle type";
    }

    if (!formData.deliveryAddress.trim()) {
      errs.deliveryAddress = "Delivery address is required";
    }

    if (!formData.city.trim()) {
      errs.city = "City is required";
    }

    if (!formData.state.trim()) {
      errs.state = "State is required";
    }

    const cleanPincode = formData.pincode.replace(/\D/g, "");
    if (!cleanPincode) {
      errs.pincode = "Pincode is required";
    } else if (cleanPincode.length !== 6) {
      errs.pincode = "Enter a valid 6-digit pincode";
    }

    const requiredDocuments: DocumentFieldName[] = [
      "panCard",
      "vehicleImage",
      "rcFrontImage",
      "rcBackImage",
    ];

    requiredDocuments.forEach((field) => {
      const file = formData[field];
      if (!file) {
        errs[field] = `${field === "panCard" ? "PAN Card" : field === "vehicleImage" ? "Vehicle Image" : field === "rcFrontImage" ? "RC Front" : "RC Back"} is required.`;
        return;
      }

      const documentError = getDocumentErrorMessage(field, file);
      if (documentError) {
        errs[field] = documentError;
      }
    });

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm() || isSubmitting) return;

    setIsSubmitting(true);
    setApiError(null);

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([field, value]) => {
        if (value instanceof File) {
          payload.append(field, value);
        } else if (value !== null) {
          payload.append(field, value);
        }
      });

      const response = await fetch("/api/fastag-enquiry", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setApiError("We couldn't submit your enquiry right now. Please try again.");
        return;
      }

      setSubmitSuccess(true);
    } catch {
      setApiError("We couldn't submit your enquiry right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fastag-modal-backdrop"
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="fastag-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="fastag-enquiry-dialog"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="fastag-enquiry-header">
            <div className="fastag-enquiry-header-image">
              <Image
                src="/assets/Fastag_image.png"
                alt="FASTag"
                fill
                sizes="100vw"
                className="fastag-header-image-content"
                priority
              />
              <div className="fastag-enquiry-header-image-fade" />
            </div>

            <div className="fastag-enquiry-header-left">
              <div className="fastag-enquiry-icon-box">
                <CreditCard size={24} />
              </div>
              <div className="fastag-enquiry-title-wrap">
                <h3 id="fastag-modal-title">Apply for FASTag</h3>
                <p>Submit your details for rapid doorstep issuance & activation</p>
              </div>
            </div>

            <button
              type="button"
              className="fastag-enquiry-close-btn"
              onClick={handleClose}
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>
          </div>

          <div className="fastag-enquiry-body">
            {submitSuccess ? (
              <div className="fastag-success-view">
                <div className="fastag-success-badge">
                  <CheckCircle2 size={40} />
                </div>
                <h3>Enquiry Received!</h3>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>. Your FASTag
                  application for <strong>{formData.vehicleNumber}</strong> has been
                  received. Our dispatch team will contact you at{" "}
                  <strong>+91 {formData.mobile}</strong> to confirm doorstep delivery.
                </p>

                <div className="fastag-success-details">
                  <div className="fastag-success-row">
                    <span>Vehicle Reg.</span>
                    <span>{formData.vehicleNumber}</span>
                  </div>
                  <div className="fastag-success-row">
                    <span>Vehicle Type</span>
                    <span>{formData.vehicleType}</span>
                  </div>
                  <div className="fastag-success-row">
                    <span>Delivery City</span>
                    <span>{formData.city}</span>
                  </div>
                  <div className="fastag-success-row">
                    <span>Contact Email</span>
                    <span>{formData.email}</span>
                  </div>
                </div>

                <button type="button" className="fastag-done-btn" onClick={handleClose}>
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {apiError && (
                  <div className="fastag-alert-error" role="alert">
                    <AlertCircle size={18} className="shrink-0" />
                    <span>{apiError}</span>
                  </div>
                )}

                <div className="fastag-enquiry-grid">
                  <div className="fastag-input-group">
                    <label className="fastag-input-label">
                      Full Name <span className="required-star">*</span>
                    </label>
                    <div
                      className={`fastag-input-container ${errors.fullName ? "has-error" : ""}`}
                    >
                      <User size={16} className="fastag-input-icon" />
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.fullName}
                        onChange={(event) => handleInputChange("fullName", event.target.value)}
                        className="fastag-field-input"
                      />
                    </div>
                    {errors.fullName && <span className="fastag-error-msg">{errors.fullName}</span>}
                  </div>

                  <div className="fastag-input-group">
                    <label className="fastag-input-label">
                      Mobile Number <span className="required-star">*</span>
                    </label>
                    <div
                      className={`fastag-input-container ${errors.mobile ? "has-error" : ""}`}
                    >
                      <Phone size={16} className="fastag-input-icon" />
                      <input
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.mobile}
                        onChange={(event) => handleInputChange("mobile", event.target.value)}
                        className="fastag-field-input"
                        maxLength={10}
                      />
                    </div>
                    {errors.mobile && <span className="fastag-error-msg">{errors.mobile}</span>}
                  </div>

                  <div className="fastag-input-group">
                    <label className="fastag-input-label">
                      Email Address <span className="required-star">*</span>
                    </label>
                    <div
                      className={`fastag-input-container ${errors.email ? "has-error" : ""}`}
                    >
                      <Mail size={16} className="fastag-input-icon" />
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(event) => handleInputChange("email", event.target.value)}
                        className="fastag-field-input"
                      />
                    </div>
                    {errors.email && <span className="fastag-error-msg">{errors.email}</span>}
                  </div>

                  <div className="fastag-input-group">
                    <label className="fastag-input-label">
                      Vehicle Reg. Number <span className="required-star">*</span>
                    </label>
                    <div
                      className={`fastag-input-container ${errors.vehicleNumber ? "has-error" : ""}`}
                    >
                      <Car size={16} className="fastag-input-icon" />
                      <input
                        type="text"
                        placeholder="e.g. AP39AB1234"
                        value={formData.vehicleNumber}
                        onChange={(event) =>
                          handleInputChange("vehicleNumber", event.target.value)
                        }
                        className="fastag-field-input"
                      />
                    </div>
                    {errors.vehicleNumber && (
                      <span className="fastag-error-msg">{errors.vehicleNumber}</span>
                    )}
                  </div>

                  <div className="fastag-input-group fastag-field-full">
                    <label className="fastag-input-label">
                      Vehicle Type <span className="required-star">*</span>
                    </label>
                    <div
                      ref={vehicleDropdownRef}
                      className="fastag-custom-select-wrap"
                    >
                      <button
                        type="button"
                        onClick={() => setIsVehicleDropdownOpen((prev) => !prev)}
                        className={`fastag-input-container fastag-custom-select-trigger ${
                          errors.vehicleType ? "has-error" : ""
                        } ${isVehicleDropdownOpen ? "is-open" : ""}`}
                        aria-expanded={isVehicleDropdownOpen}
                        aria-haspopup="listbox"
                      >
                        <Car size={16} className="fastag-input-icon" />
                        <span className="fastag-custom-select-value">
                          {formData.vehicleType || "Select vehicle type"}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`fastag-select-chevron ${
                            isVehicleDropdownOpen ? "is-rotated" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isVehicleDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.98 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="fastag-custom-select-menu"
                            role="listbox"
                          >
                            {VEHICLE_TYPES.map((type) => {
                              const isSelected = formData.vehicleType === type;
                              return (
                                <button
                                  key={type}
                                  type="button"
                                  role="option"
                                  aria-selected={isSelected}
                                  onClick={() => {
                                    handleInputChange("vehicleType", type);
                                    setIsVehicleDropdownOpen(false);
                                  }}
                                  className={`fastag-custom-select-option ${
                                    isSelected ? "is-selected" : ""
                                  }`}
                                >
                                  <span className="fastag-option-label">{type}</span>
                                  {isSelected && (
                                    <Check size={16} className="fastag-option-check" />
                                  )}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {errors.vehicleType && (
                      <span className="fastag-error-msg">{errors.vehicleType}</span>
                    )}
                  </div>

                  <div className="fastag-input-group fastag-field-full">
                    <label className="fastag-input-label">
                      Delivery Address <span className="required-star">*</span>
                    </label>
                    <div
                      className={`fastag-input-container ${errors.deliveryAddress ? "has-error" : ""}`}
                    >
                      <MapPin size={16} className="fastag-input-icon" />
                      <textarea
                        placeholder="Enter full delivery address"
                        value={formData.deliveryAddress}
                        onChange={(event) =>
                          handleInputChange("deliveryAddress", event.target.value)
                        }
                        className="fastag-field-textarea"
                        rows={3}
                      />
                    </div>
                    {errors.deliveryAddress && (
                      <span className="fastag-error-msg">{errors.deliveryAddress}</span>
                    )}
                  </div>

                  <div className="fastag-input-group">
                    <label className="fastag-input-label">
                      City <span className="required-star">*</span>
                    </label>
                    <div className={`fastag-input-container ${errors.city ? "has-error" : ""}`}>
                      <Building size={16} className="fastag-input-icon" />
                      <input
                        type="text"
                        placeholder="e.g. Visakhapatnam"
                        value={formData.city}
                        onChange={(event) => handleInputChange("city", event.target.value)}
                        className="fastag-field-input"
                      />
                    </div>
                    {errors.city && <span className="fastag-error-msg">{errors.city}</span>}
                  </div>

                  <div className="fastag-input-group">
                    <label className="fastag-input-label">
                      State <span className="required-star">*</span>
                    </label>
                    <div className={`fastag-input-container ${errors.state ? "has-error" : ""}`}>
                      <Navigation size={16} className="fastag-input-icon" />
                      <input
                        type="text"
                        placeholder="e.g. Andhra Pradesh"
                        value={formData.state}
                        onChange={(event) => handleInputChange("state", event.target.value)}
                        className="fastag-field-input"
                      />
                    </div>
                    {errors.state && <span className="fastag-error-msg">{errors.state}</span>}
                  </div>

                  <div className="fastag-input-group fastag-field-full">
                    <label className="fastag-input-label">
                      Pincode <span className="required-star">*</span>
                    </label>
                    <div
                      className={`fastag-input-container ${errors.pincode ? "has-error" : ""}`}
                    >
                      <MapPin size={16} className="fastag-input-icon" />
                      <input
                        type="text"
                        placeholder="6-digit postal code"
                        value={formData.pincode}
                        onChange={(event) => handleInputChange("pincode", event.target.value)}
                        className="fastag-field-input"
                        maxLength={6}
                      />
                    </div>
                    {errors.pincode && <span className="fastag-error-msg">{errors.pincode}</span>}
                  </div>
                </div>

                <div className="fastag-document-section">
                  <div className="fastag-doc-header">
                    <div className="fastag-doc-header-icon">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4>Required Documents</h4>
                      <p>Upload a clear scan or photo for verification.</p>
                    </div>
                  </div>

                  <div className="fastag-document-grid">
                    <DocumentUploadField
                      label="PAN Card"
                      helper="Upload a valid PAN card image or PDF"
                      icon={CreditCard}
                      accept="image/jpeg,image/png,image/webp,application/pdf"
                      file={formData.panCard}
                      error={errors.panCard}
                      onChange={(file) => handleDocumentUpload("panCard", file)}
                    />
                    <DocumentUploadField
                      label="Vehicle Image"
                      helper="Upload a clear vehicle photo"
                      icon={Car}
                      accept="image/jpeg,image/png,image/webp"
                      file={formData.vehicleImage}
                      error={errors.vehicleImage}
                      onChange={(file) => handleDocumentUpload("vehicleImage", file)}
                    />
                    <DocumentUploadField
                      label="RC Front"
                      helper="Front side of the registration certificate"
                      icon={FileText}
                      accept="image/jpeg,image/png,image/webp"
                      file={formData.rcFrontImage}
                      error={errors.rcFrontImage}
                      onChange={(file) => handleDocumentUpload("rcFrontImage", file)}
                    />
                    <DocumentUploadField
                      label="RC Back"
                      helper="Back side of the registration certificate"
                      icon={FileText}
                      accept="image/jpeg,image/png,image/webp"
                      file={formData.rcBackImage}
                      error={errors.rcBackImage}
                      onChange={(file) => handleDocumentUpload("rcBackImage", file)}
                    />
                  </div>
                </div>

                <div className="fastag-form-footer">
                  <button type="submit" disabled={isSubmitting} className="fastag-submit-btn">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        <span>Submitting Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit FASTag Enquiry</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <div className="fastag-trust-note">
                    <ShieldCheck size={14} className="text-[#59C71C]" />
                    <span>No advance payment required • Doorstep verification</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function DocumentUploadField({
  label,
  helper,
  icon: Icon,
  accept,
  file,
  error,
  onChange,
}: {
  label: string;
  helper: string;
  icon: typeof CreditCard;
  accept: string;
  file: File | null;
  error?: string;
  onChange: (file: File | null) => void;
}) {
  const preview = file && file.type.startsWith("image/") ? URL.createObjectURL(file) : null;

  return (
    <div className={`fastag-upload-card ${error ? "has-error" : ""} ${file ? "has-file" : ""}`}>
      <div className="fastag-upload-topline">
        <label className="fastag-upload-title">
          {label} <span className="required-star">*</span>
        </label>
      </div>

      <div className="fastag-upload-box">
        {preview ? (
          <div className="fastag-upload-preview-wrap">
            <img src={preview} alt={label} className="fastag-upload-preview" />
          </div>
        ) : (
          <div className="fastag-upload-empty-state">
            <div className="fastag-upload-icon-box">
              <Icon size={20} />
            </div>
          </div>
        )}

        <div className="fastag-upload-meta">
          <span className="fastag-upload-file-name">{file ? file.name : "No file selected"}</span>
          <span className="fastag-upload-helper">{helper}</span>
        </div>

        <label className="fastag-upload-button">
          <Upload size={14} />
          <span>{file ? "Replace" : "Upload"}</span>
          <input
            type="file"
            accept={accept}
            className="fastag-upload-input"
            onChange={(event) => onChange(event.target.files?.[0] || null)}
          />
        </label>
      </div>

      {error && <span className="fastag-error-msg">{error}</span>}
    </div>
  );
}
