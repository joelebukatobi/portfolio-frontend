module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/projects',
        destination: '/#projects',
      },
    ];
  },
};
