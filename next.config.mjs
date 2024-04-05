/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    async rewrites() {
      return [
        {
          source: '/foo',
          destination: '/bar'
        },
      ]
    },
  }

export default nextConfig;