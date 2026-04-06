/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Domain Foto Google
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // Domain Foto GitHub
      },
    ],
  },
};

export default nextConfig;