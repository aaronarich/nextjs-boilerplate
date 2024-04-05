module.exports = {
  async headers() {
    return [
      {
        source: '/:path',
        headers: [
          {
            key: ':authority:',
            value: 'e.customeriomail.com',
          },
          {
            key: ':method:',
            value: 'GET',
          },
          {
            key: ':path:',
            value: '/:path*'
          },
          {
            key: ':scheme:',
            value: 'https'
          }
        ],
      },
    ]
  },
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