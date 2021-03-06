/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["www.snowinn.com", "cache.tradeinn.com", "www.tradeinn.com"],
  },

  // async redirects() {
  //   return [
  //     {
  //       source: "/api/auth/:nextauth*",
  //       destination: "/",
  //       permanent: false,
  //     },
  //   ];
  // },
};
