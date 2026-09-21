import type { NextConfig } from "next";

const isVercel = Boolean(process.env.VERCEL);
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "Transetu_website";

const rawBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : !isVercel && (isGitHubActions || isGitHubPages)
    ? `/${repoName}`
    : "";

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
