/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: false,
  experimental: {
    serverActions: {
      allowedOrigins: ['bbt-cms-api-of7nyq5bbq-ew.a.run.app', 'localhost:8080'],
    },
  },
  images: {
    remotePatterns: [{ hostname: 'cdn.pixabay.com' }],
  },
};

module.exports = nextConfig;
