/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['fa-IR'],
    defaultLocale: 'fa-IR',
  },

  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },

  // images: {
  //   remotePatterns: [{ protocol: 'https', hostname: 'assets.example.com' }],
  // },
};

module.exports = nextConfig;
