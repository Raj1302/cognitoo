/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: false,
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['@studio-freight/lenis'],
  },
  // Add performance hints
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config, {
        optimization: {
          ...config.optimization,
          mergeDuplicateChunks: true,
          minimize: true,
          moduleIds: 'deterministic',
        },
      });
    }
    return config;
  },
}

module.exports = nextConfig 