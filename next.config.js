/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'media.graphassets.com'],
  }
}

module.exports = nextConfig
