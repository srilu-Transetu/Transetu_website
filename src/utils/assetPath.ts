const envBasePath = (process.env.NEXT_PUBLIC_BASE_PATH || "")
  .trim()
  .replace(/\/+$/, "");

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
  if (!activeBase) {
    if (typeof window !== "undefined") {
      if (window.location.hostname.endsWith("github.io")) {
        const segments = window.location.pathname.split("/").filter(Boolean);
        if (segments.length > 0 && segments[0] === "Transetu_website") {
          activeBase = "/Transetu_website";
        }
      }
    } else if (
      process.env.GITHUB_ACTIONS === "true" ||
      process.env.GITHUB_PAGES === "true"
    ) {
      const repo = process.env.GITHUB_REPOSITORY
        ? process.env.GITHUB_REPOSITORY.split("/")[1]
        : "Transetu_website";
      activeBase = `/${repo}`;
    }
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (activeBase) {
    const normalizedBase = activeBase.startsWith("/")
      ? activeBase.replace(/\/+$/, "")
      : `/${activeBase.replace(/\/+$/, "")}`;
    if (
      cleanPath === normalizedBase ||
      cleanPath.startsWith(`${normalizedBase}/`)
    ) {
      return cleanPath;
    }
    return `${normalizedBase}${cleanPath}`;
  }
  return cleanPath;
}
