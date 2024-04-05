module.exports = {
  async headers() {
    return [
      {
        source: '/:path',
        headers: [
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
          destination: 'https://e.customeriomail.com/:path*'
        }
      ]
    }
  }
}