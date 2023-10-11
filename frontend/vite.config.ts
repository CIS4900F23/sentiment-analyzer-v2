import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const { BACKEND_PORT, BACKEND_HOST, YOOBI_PORT, YOOBI_HOST } = process.env;
const backendProxyTarget = `${BACKEND_HOST}:${BACKEND_PORT}`;
const yoobiProxyTarget = `${YOOBI_HOST}:${YOOBI_PORT}`;

const config: UserConfig = {
	plugins: [sveltekit()],
	test: {
		globals: true,
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		setupFiles: ['src/test/setupTest.ts']
	},
	server: {
		proxy: {
			'/api': {
				target: backendProxyTarget,
				changeOrigin: true
			},
			'/ask': {
				target: yoobiProxyTarget,
				changeOrigin: true
			}
		},
		port: 3000,
		strictPort: true,
		host: true, // needed for docker container
		fs: {
			allow: ['../node_modules'] // Added to fix this issue: https://github.com/sveltejs/kit/issues/2701
		},
		watch: {
			usePolling: true
		}
	}
};

export default config;
