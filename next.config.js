/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: false,
  experimental: {
    serverActions: {
      allowedOrigins: ['bbt-cms-api-of7nyq5bbq-ew.a.run.app','localhost:8080',"maps-of7nyq5bbq-ew.a.run.app"],
    },
  },
  images: {
    remotePatterns: [{ hostname: 'cdn.pixabay.com' }],
  },
}

module.exports = nextConfig
