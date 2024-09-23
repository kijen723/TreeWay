/** @type {import('next').NextConfig} */
import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {
    reactStrictMode : true,
};

//const isProd = process.env.NODE_ENV === 'production';

export default withPWA({
    dest : "public",
    // assetPrefix: isProd ? '/_next' : '',
})(nextConfig)