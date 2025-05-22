/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/my-blog' : '',
    images: {
        unoptimized: true,
    },
    webpack: (config, { dev, isServer }) => {
        if (dev && !isServer) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@stagewise/toolbar-next': '@stagewise/toolbar-next/dist/index.js',
            };
        }
        return config;
    },
}

module.exports = nextConfig 