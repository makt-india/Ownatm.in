/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   
  trailingSlash: true, 

  images: {
    unoptimized: true, // Required for static export
  },

  reactStrictMode: true,

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;