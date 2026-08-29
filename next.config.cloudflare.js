/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration for Cloudflare Pages
  output: 'standalone',

  // Cloudflare Images named variants for buyer/seller devices
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 1024, 1920],
    imageSizes: [400, 800],
    loader: 'custom',
    loaderFile: './lib/cloudflare-image-loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
    ],
  },

  // Compression (handled by Cloudflare)
  compress: false,

  // Performance optimizations
  swcMinify: true,

  // Environment variables
  env: {
    CLOUDFLARE_ENV: process.env.CLOUDFLARE_ENV || 'production',
  },

  // Redirect non-www to www (handled by Worker)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'heritagestonebridge.com',
          },
        ],
        destination: 'https://www.heritagestonebridge.com/:path*',
        permanent: true,
      },
    ]
  },

  // Python API rewrites
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5328/api/:path*'
            : '/api/',
      },
    ]
  },

  // Headers are handled by Cloudflare Workers
  async headers() {
    return []
  },

  // Webpack configuration for Cloudflare compatibility
  webpack: (config, { isServer }) => {
    // Cloudflare Workers compatibility
    if (isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // Polyfills for Node.js modules
        'async_hooks': false,
        'fs': false,
        'net': false,
        'tls': false,
      };
    }

    // Bundle analyzer (when ANALYZE=true)
    if (process.env.ANALYZE === 'true' && !isServer) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './analyze.html',
          openAnalyzer: false,
        })
      )
    }

    return config
  },

  // Experimental features for Cloudflare
  experimental: {
    // Use lighter runtime
    serverMinification: true,
    // Optimize server components
    serverComponentsExternalPackages: ['sharp'],
  },
}

module.exports = nextConfig
