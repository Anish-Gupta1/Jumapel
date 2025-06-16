import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages:[
    '@tomo-inc/tomo-evm-kit',
    '@tomo-wallet/uikit-lite',
    '@tomo-inc/shared-type',
  ],
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname), // 👈 this is the fix
    };
    return config;
  },
};

export default nextConfig;
