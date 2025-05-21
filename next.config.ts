/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["youtube.com", "i3.ytimg.com"], // Allow these domains (or any other required domains)
    unoptimized: true, // Disables Next.js optimization for images
  },
};

module.exports = nextConfig;
