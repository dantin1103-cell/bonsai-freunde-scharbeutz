import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/bonsai-freunde-scharbeutz" : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Cloudflare-Tunnel & LAN-Zugriff im Dev-Modus
  allowedDevOrigins: ["*.trycloudflare.com", "192.168.178.35"],
  images: {
    ...(isGitHubPages ? { unoptimized: true } : {}),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
