import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repoName = "universal-hate-marks";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? `/${repoName}` : "",
  assetPrefix: isProduction ? `/${repoName}/` : undefined,
};

export default nextConfig;
