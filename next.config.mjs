/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/destinyfelixkiisi/image/upload/w_65,h_65/personal/**',
            },
        ],
    },
};

export default nextConfig;
