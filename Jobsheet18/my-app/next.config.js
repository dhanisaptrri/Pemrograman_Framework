/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
     {
        protocol: "https",
        hostname: "static.nike.com", // Nike (Product)
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Domain Foto GitHub
        port: "",
        pathname: "/**", // Sesuaikan dengan path gambar GitHub jika diperlukan
      },
    ],
  },
};

export default nextConfig;