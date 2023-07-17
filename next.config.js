/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["yts.mx"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
