import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://andrewbrauteseth.netlify.app/',
	base: '/andrew-website',
	vite: {
		plugins: [tailwindcss()],
	},
});
