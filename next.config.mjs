/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  experimental: { cpus: 1 },
  async redirects() {
    return [{ source: '/about', destination: '/#profile-details', permanent: true }];
  },
};

export default nextConfig;
