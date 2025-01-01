import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const REPO_NAME = 'portfolio-page'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/portfolio-page/' : '',
  basePath: isProd ? `/${REPO_NAME}` : '',
  output: 'export'
};

export default nextConfig;
