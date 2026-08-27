/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  compress: true,
  // Shared/CloudLinux hosting caps the account's process/thread count
  // (nproc). next build spawns multiple worker threads by default for
  // parallel compilation, which can exceed that cap and crash with
  // "pthread_create: Resource temporarily unavailable". Force it down
  // to a single worker so the build stays within the limit.
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};
module.exports = nextConfig;
