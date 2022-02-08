/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
    reactMode: 'concurrent'
  }
}

module.exports = nextConfig
