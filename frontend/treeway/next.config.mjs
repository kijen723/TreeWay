/** @type {import('next').NextConfig} */
import withPWA from "@ducanh2912/next-pwa";

const isProd = process.env.NODE_ENV === 'production';  // isProd 변수를 먼저 선언

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: isProd ? '/_next' : '',  // isProd 변수를 사용
};

export default withPWA({
    dest: "public",
})(nextConfig);  // withPWA에 nextConfig만 넘김
