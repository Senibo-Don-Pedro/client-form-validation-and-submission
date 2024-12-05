import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        // Remove the https:// from your Codespaces URL
        "super-winner-jj5xg7x4prpg2p5p-3000.app.github.dev"
      ]
    }
  }
};

export default nextConfig;
