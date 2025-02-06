import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';  // Keep this import for Vercel deployment

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),  // Use the Vercel adapter
	},
	preprocess: vitePreprocess()
};

export default config;
