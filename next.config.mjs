/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/about', destination: '/#profile-details', permanent: true }];
  },
};

export default nextConfig;
