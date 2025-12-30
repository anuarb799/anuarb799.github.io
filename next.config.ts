import type { NextConfig } from "next";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["chanhdai-macbook.local"],
  turbopack: {
    root: path.join(__dirname, "."),
  },
  devIndicators: false,
  // Enable static export for GitHub Pages
  output: isProduction ? "export" : undefined,
  // GitHub Pages serves from root, so no basePath needed
  basePath: "",
  // Disable image optimization for static export
  images: {
    unoptimized: isProduction,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.chanhdai.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  // Redirects and rewrites don't work with static export
  // They need to be handled client-side or via GitHub Pages redirects
  ...(isProduction ? {} : {
    async redirects() {
    return [
      {
        source:
          "/:section(blog|components)/writing-effect-inspired-by-apple:extension(.mdx)?",
        destination: "/:section/apple-hello-effect:extension",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/blog/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
      {
        source: "/components/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
      {
        source: "/rss",
        destination: "/blog/rss",
      },
      {
        source: "/registry/rss",
        destination: "/components/rss",
      },
    ];
  },
  }),
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           // Prevents MIME type sniffing, reducing the risk of malicious file uploads
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           // Protects against clickjacking attacks by preventing your site from being embedded in iframes.
  //           key: "X-Frame-Options",
  //           value: "DENY",
  //         },
  //         {
  //           // Controls how much referrer information is included with requests, balancing security and functionality.
  //           key: "Referrer-Policy",
  //           value: "strict-origin-when-cross-origin",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
