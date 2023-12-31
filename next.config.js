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
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
