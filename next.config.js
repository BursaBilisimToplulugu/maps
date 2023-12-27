/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: false,
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:8080', 'maps-of7nyq5bbq-ew.a.run.app'],
    },
  },
  images: {
    remotePatterns: [
      { hostname: 'cdn.pixabay.com' },
      { hostname: 'storage.googleapis.com' },
    ],
  },
};

module.exports = nextConfig;
