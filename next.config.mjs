/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep the template free of auto-generated AGENTS.md / CLAUDE.md.
  agentRules: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
