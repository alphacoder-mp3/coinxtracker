/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coinxtracker.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
