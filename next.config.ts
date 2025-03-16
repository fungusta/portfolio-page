import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '' : '',
  output: 'export',
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
