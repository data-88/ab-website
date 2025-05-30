import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'AB',
	favicon: 'favicon.ico',
	owner: 'Andrew Brauteseth',
	profileImage: 'profile.webp',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://github.com/data-88/ab-website',
			icon: Github,
		} as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/andrewbrautesethnstins',
			icon: Instagram,
		} as SocialLink,
	],
};
