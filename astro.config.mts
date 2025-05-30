import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://data-88.github.io',
	base: '/ab-website',
	vite: {
		plugins: [tailwindcss()],
	},
});
