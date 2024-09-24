/** @type {import('next').NextConfig} */
import withPWA from "@ducanh2912/next-pwa";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode : true,
    assetPrefix: isProd ? '/_next' : '',
};

export default withPWA({
    dest : "public",
})(nextConfig)