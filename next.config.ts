import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { hostname: "avatars.githubusercontent.com", protocol: "https" },
      { hostname: "cdn.jsdelivr.net", protocol: "https" },
      { hostname: "avatars.githubusercontent.com", protocol: "https" },
    ],
  },
};

export default nextConfig;
