import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'img.clerk.com'
      },
      {
        protocol: 'https',
        hostname: '63hy5293v3.ucarecd.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.ucarecdn.net',
        port: '',
        pathname: '/**',
      },
    ]
    // domains: ['img.clerk.com'],
  },
};

export default nextConfig;
