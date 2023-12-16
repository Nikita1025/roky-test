/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'media.guim.co.uk',
        port: '',
        protocol: 'https',
      },
    ],
  },
}

module.exports = nextConfig
