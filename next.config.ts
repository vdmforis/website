import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin workspace root to this package — silences detection of unrelated lockfiles higher up the tree
    root: dirname(fileURLToPath(import.meta.url)),
  },
  async redirects() {
    return [
      {
        source: "/onze-villa",
        destination: "/onze-ervaring",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
