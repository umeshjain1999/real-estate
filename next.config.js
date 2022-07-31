/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    REACT_APP_MOCK_API: process.env.REACT_APP_MOCK_API,
  },
  images: {
    domains: ['rickandmortyapi.com','medusa-public-images.s3.eu-west-1.amazonaws.com'],
  },
};

module.exports = nextConfig;
