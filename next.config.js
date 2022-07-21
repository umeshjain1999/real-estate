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
};

module.exports = nextConfig;
