/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  images: {
    unoptimized: true,
    domains: ['via.placeholder.com', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
