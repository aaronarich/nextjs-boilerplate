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
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://e.customeriomail.com/:path*',
        permanent: true,
      },
    ]
  },
  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: '/:path*',
  //         has: [
  //           {
  //             type: 'host',
  //             value: 'vercel.aarich.dev'
  //           }
  //         ],
  //         destination: 'https://e.customeriomail.com/:path*'
  //       }
  //     ]
  //   }
  // }
}