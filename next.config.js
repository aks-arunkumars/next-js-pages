module.exports = {
  reactStrictMode: true,
  basePath: "/docs",
  async redirects() {
    return [
      {
        source: "//",
        destination: "/",
        permanent: true,
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: "/index",
        destination: "/",
      }
    ];
  }
};
