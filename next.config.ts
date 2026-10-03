import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dockerfile .next/standalone copy karta hai; ye option wahi folder banata hai.
  // Vercel is option ko ignore karta hai.
  output: "standalone",
};

export default nextConfig;
