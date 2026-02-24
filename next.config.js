/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'instafashion-ai-uploads.s3.sa-east-1.amazonaws.com'],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002',
  },
  experimental: {
    serverComponentsExternalPackages: [],
  },
  output: 'standalone',
}

module.exports = nextConfig
