/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,

  // Required for GitHub Pages project repositories
  basePath: '/waseem-potfolio',
  assetPrefix: '/waseem-potfolio',

  images: {
    unoptimized: true,
    domains: ['via.placeholder.com', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
