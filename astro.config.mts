import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://andrewbrauteseth.netlify.app/',
	base: 'ab-website',
	vite: {
		plugins: [tailwindcss()],
	},
});
