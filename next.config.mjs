/** @type {import('next').NextConfig} */
const IMAGE_CACHE = 'public, max-age=31536000, immutable';

const nextConfig = {
  reactStrictMode: true,
  agentRules: false,
  images: {
    localPatterns: [{ pathname: '/images/**', search: '' }],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2678400,
    qualities: [75],
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: IMAGE_CACHE }],
      },
      {
        source: '/icon.png',
        headers: [{ key: 'Cache-Control', value: IMAGE_CACHE }],
      },
    ];
  },
};

export default nextConfig;
