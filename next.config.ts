import { config } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    esmExternals: true // Required for Framer Motion
  }
}

export default nextConfig;