/** @type {import('next').NextConfig} */

// When building for GitHub Pages the site is served from /<repo>, so we set
// basePath/assetPrefix. Gated behind an env var so local `next dev` stays at /.
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "Cipheznexus-Academy";

const nextConfig = {
  output: "export", // fully static site for GitHub Pages
  basePath: isPages ? `/${repo}` : undefined,
  assetPrefix: isPages ? `/${repo}/` : undefined,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
