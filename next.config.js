/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: false,
  images: {
    remotePatterns: [{ hostname: 'cdn.pixabay.com' }],
  },
};

module.exports = nextConfig;
