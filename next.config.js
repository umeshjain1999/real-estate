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
    REACT_APP_API_ROUTE: process.env.REACT_APP_API_ROUTE,
    REACT_APP_DOMAIN_NAME: process.env.REACT_APP_DOMAIN_NAME,
  },
  images: {
    domains: ['medusa-public-images.s3.eu-west-1.amazonaws.com', 'myawsbucket1395.s3.ap-south-1.amazonaws.com', 'ecom.orbitstack.in'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
