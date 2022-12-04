/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLOUD_LINK: process.env.CLOUD_LINK
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
}

module.exports = nextConfig
