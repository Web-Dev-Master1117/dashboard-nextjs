/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'avatars.githubusercontent.com',
			'avatar.vercel.sh',
			'xsgames.co',
		],
	},
	experimental: {
		appDir: true,
		serverComponentsExternalPackages: ['@tremor/react'],
	},
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
