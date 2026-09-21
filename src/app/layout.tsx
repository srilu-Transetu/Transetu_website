import type { Metadata } from "next";
import "./globals.css";
import { getAssetPath } from "@/utils/assetPath";

export const metadata: Metadata = {
  title: "Transetu | Seamless Travel. Smarter Solutions.",
  description: "Transetu provides reliable FASTag solutions, GPS tracking systems, and premium holders for a smoother journey.",
  icons: {
    icon: getAssetPath("/favicon.ico"),
    shortcut: getAssetPath("/favicon.ico"),
    apple: getAssetPath("/favicon.ico"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
