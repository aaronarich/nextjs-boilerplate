module.exports = {
    async rewrites() {
      return [
        {
          source: '/foo',
          destination: '/bar',
        },
      ]
    },
  }