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
          destination: 'https://e.customeriomail.com/:path*'
        }
      ]
    }
  }
}