const nextConfig = {
  // Standalone output for Docker/Vercel optimization
  output: "standalone",

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    // Skip 2048/3840 — mobile LCP never needs a 4k srcset candidate.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,

  // Tree-shake lucide-react (and similar) icon imports
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // Performance optimizations
  swcMinify: true,

  // Middleware handles trailing-slash + apex→www + legacy paths in one hop
  skipTrailingSlashRedirect: true,

  async redirects() {
    // All legacy / canonical redirects handled in middleware.ts (single hop).
    return [];
  },

  // Python API rewrites
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:5328/api/:path*"
            : "/api/",
      },
    ];
  },

  // Enhanced security headers including CSP for RealScout widget
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // CSP for RealScout widget
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://widgetbe.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://fonts.googleapis.com",
              "img-src 'self' data: blob: https: http:",
              "font-src 'self' data: https://assets.calendly.com https://widgetbe.com https://fonts.gstatic.com https://fonts.googleapis.com",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com https://openrouter.ai https://api.openai.com https://calendly.com https://widgetbe.com https://www.google-analytics.com https://analytics.google.com https://*.ingest.sentry.io",
              "frame-src 'self' https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com https://www.google.com https://maps.google.com https://*.google.com",
              "worker-src 'self' blob:",
            ].join("; "),
          },
          // Additional security headers
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Bundle analyzer (when ANALYZE=true)
  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE === "true" && !isServer) {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: "./analyze.html",
          openAnalyzer: false,
        }),
      );
    }
    return config;
  },
};

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(nextConfig, {
  silent: true,
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  // Skip extra client maps + replay tunnel — both inflate mobile JS/TBT.
  widenClientFileUpload: false,
  hideSourceMaps: true,
  webpack: {
    treeshake: {
      removeDebugLogging: true,
    },
    automaticVercelMonitors: false,
  },
});
