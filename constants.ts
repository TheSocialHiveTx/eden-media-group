
import { Brand, NavItem } from './types';

export const BRANDS: Brand[] = [
  {
    id: 'motor-toad',
    name: 'Motor Toad',
    mission: 'Bold, expressive creativity with an edge.',
    description: 'A platform dedicated to expressive design and rebellious creativity, breaking through the noise of common trends.',
    values: ['Authenticity', 'Expression', 'Innovation'],
    tone: 'Bold, expressive, creative',
    image: 'https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=800',
    externalLink: '#'
  },
  {
    id: 'peachy-charms',
    name: 'Peachy Charms',
    mission: 'Handcrafted joy in every personal detail.',
    description: 'Bringing warmth and personality to everyday life through carefully crafted accessories and heartfelt designs.',
    values: ['Craftsmanship', 'Joy', 'Personal Connection'],
    tone: 'Handcrafted, joyful, personal',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    externalLink: '#'
  },
  {
    id: 'spreading-truth',
    name: 'Spreading Truth',
    mission: 'Faith-driven media for an eternal message.',
    description: 'Utilizing modern media tools to communicate timeless truths and inspire deeper connection with faith.',
    values: ['Truth', 'Integrity', 'Impact'],
    tone: 'Faith-driven, message-focused',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=800',
    externalLink: '#'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Our Brands', path: '/brands' },
  { label: 'Philosophy', path: '/philosophy' },
  { label: 'Collaborate', path: '/contact' }
];
