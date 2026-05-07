import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  cacheComponents: true,
  
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
