module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'vercel.aarich.dev'
            }
          ],
          destination: 'https://track.customer.io/:path*'
        }
      ]
    }
  }
}