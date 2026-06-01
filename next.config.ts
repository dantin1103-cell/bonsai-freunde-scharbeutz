import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare-Tunnel & LAN-Zugriff im Dev-Modus
  allowedDevOrigins: ["*.trycloudflare.com", "192.168.178.35"],
  images: {
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
