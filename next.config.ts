import type { NextConfig } from "next";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath = rawBasePath.startsWith("/")
  ? rawBasePath
  : rawBasePath
  ? `/${rawBasePath}`
  : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
