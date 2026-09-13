import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,

  // Image optimization — smaller device sizes for mobile-first serving
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [320, 375, 414, 768, 1024, 1280, 1440],
    imageSizes: [48, 64, 88, 110, 200, 400, 600],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Experimental optimizations for smaller bundles
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-popover",
      "@radix-ui/react-tooltip",
      "@radix-ui/react-accordion",
      "@radix-ui/react-tabs",
    ],
  },

  // Static asset caching headers
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/icon.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/manifest.webmanifest",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },

  // Compress responses
  compress: true,

  // Minification is enabled by default in production
};

export default nextConfig;
