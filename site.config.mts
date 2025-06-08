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
			name: 'Instagram',
			url: 'https://www.instagram.com/andrewbrauteseth',
			icon: Instagram,
		} as SocialLink,
	],
};
