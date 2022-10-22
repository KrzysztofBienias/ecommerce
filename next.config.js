/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = {
    images: {
        domains: ['imgur.com', 'mir-s3-cdn-cf.behance.net'],
    },
    ...nextConfig,
};
