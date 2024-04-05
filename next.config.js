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
          },
          {
            key: 'origin',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://track.customer.io/:path*'
      }
    ]
  }
}