import type { NextConfig } from "next";

const repoName = "sareep"; // GitHub repo name

const nextConfig: NextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  /* config options here */
};

export default nextConfig;
