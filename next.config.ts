import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes a fully servable site to ./out
  // (used by Render Static Site / GitHub Pages / Netlify).
  // For a Node "next start" deployment, remove this line.
  output: "export",
  reactStrictMode: false,
};

export default nextConfig;
