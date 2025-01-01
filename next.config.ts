import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const REPO_NAME = 'portfolio-page'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
    ],
  },
  assetPrefix: isProd ? '/portfolio-page/' : '',
  basePath: isProd ? `/${REPO_NAME}` : '',
  output: 'export'
};

export default nextConfig;
