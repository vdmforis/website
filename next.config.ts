import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin workspace root to this package — silences detection of unrelated lockfiles higher up the tree
    root: dirname(fileURLToPath(import.meta.url)),
  },
  async headers() {
    return [
      {
        // Private admin: never indexed, never cached.
        source: "/admin/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Cache-Control", value: "private, no-store" },
        ],
      },
      {
        source: "/admin",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Cache-Control", value: "private, no-store" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/es", destination: "/", statusCode: 301 },
      { source: "/es/:path*", destination: "/:path*", statusCode: 301 },
      {
        source: "/onze-villa",
        destination: "/onze-ervaring",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
