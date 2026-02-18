// import type { NextConfig } from "next";
// import path from "node:path";

// const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**',
//       },
//       {
//         protocol: 'http',
//         hostname: '**',
//       },
//     ],
//   },
//   outputFileTracingRoot: path.resolve(__dirname, '../../'),
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   turbopack: {
//     rules: {
//       "*.{jsx,tsx}": {
//         loaders: [LOADER]
//       }
//     }
//   }
// };

// export default nextConfig;
// // Orchids restart: 1767031089281
import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, "src/visual-edits/component-tagger-loader.js");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER],
      },
    },
  },
};

export default nextConfig;
