/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/bstt",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
