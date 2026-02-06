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
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
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
