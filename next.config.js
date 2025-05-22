/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/my-blog' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/my-blog/' : '',
    trailingSlash: true,
}

module.exports = nextConfig 