const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const basePath = envBasePath;

export function getAssetPath(path: string): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  let activeBase = basePath;
  if (!activeBase && typeof window !== "undefined") {
    if (window.location.hostname.endsWith("github.io")) {
      const segments = window.location.pathname.split("/").filter(Boolean);
      if (segments.length > 0 && segments[0] === "Transetu_website") {
        activeBase = "/Transetu_website";
      }
    }
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (activeBase && cleanPath.startsWith(activeBase)) {
    return cleanPath;
  }
  return `${activeBase}${cleanPath}`;
}
