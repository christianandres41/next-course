/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'platform.clientchatlive.com',
          },
        ],
      },
}

module.exports = nextConfig
