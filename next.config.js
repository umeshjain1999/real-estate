/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [{
              name: 'removeViewBox',
              active: false
            }]
          }
        }
      }
    })

    return config
  },
  env: {
    REACT_APP_MOCK_API: process.env.REACT_APP_MOCK_API,
  },
  images: {
    domains: ['rickandmortyapi.com', 'medusa-public-images.s3.eu-west-1.amazonaws.com', 'myawsbucket1395.s3.ap-south-1.amazonaws.com', 'ecom.orbitstack.in'],
  },
};

module.exports = nextConfig;
