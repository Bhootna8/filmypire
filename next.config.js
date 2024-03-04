/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                hostname: '*',
                protocol: 'https'
            }
        ]
    }
}

module.exports = nextConfig
