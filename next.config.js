/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'media.guim.co.uk',
        pathname: '/media.guim.co.uk/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
}

module.exports = nextConfig
