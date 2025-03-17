import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
// When using a custom domain, we don't need to use the repo name as prefix
// const repoName = '/portfolio-page'; // Update this if your repo name is different

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Remove these when using a custom domain
  // assetPrefix: isProd ? repoName : '',
  // basePath: isProd ? repoName : '',
  output: 'export',
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
