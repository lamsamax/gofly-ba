/** @type {import('next').NextConfig} */
const nextConfig = {
  // No database, no server-side data, no API routes — the whole site
  // can be pre-rendered to plain HTML/CSS/JS at build time and served
  // as static files (no Node.js process needed at runtime). This
  // sidesteps the CloudLinux process/memory limits entirely.
  output: 'export',
  images: { unoptimized: true },
  // Emits .../rim/index.html instead of .../rim.html, so plain Apache
  // serves clean URLs (gofly.ba/destinacije/rim) via its normal
  // directory-index behavior — no rewrite rules needed.
  trailingSlash: true,
  // experimental.cpus keeps `next build` itself from spawning more
  // worker threads/processes than shared hosting allows.
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};
module.exports = nextConfig;
