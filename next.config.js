module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'link.vercel.aarich.dev'
            }
          ],
          destination: 'https://e.customeriomail.com/:path*'
        }
      ]
    }
  }
}