import type { NextConfig } from "next";

const isVercel = Boolean(process.env.VERCEL);
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "Transetu_website";

const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const rawBasePath =
  envBasePath !== undefined
    ? envBasePath
    : !isVercel && (isGitHubActions || isGitHubPages)
    ? `/${repoName}`
    : "";

const basePath = rawBasePath.startsWith("/")
  ? rawBasePath
  : rawBasePath
  ? `/${rawBasePath}`
  : "";

// Ensure process.env.NEXT_PUBLIC_BASE_PATH is set for the compilation process
if (basePath && !process.env.NEXT_PUBLIC_BASE_PATH) {
  process.env.NEXT_PUBLIC_BASE_PATH = basePath;
}

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
