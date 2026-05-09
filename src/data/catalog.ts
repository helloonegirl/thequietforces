// Typed accessor for products.json. Every page imports from here, never from
// the raw JSON. If the data shape ever changes, the type errors will show
// you everywhere that needs an update.

import raw from './products.json';

export type Theme = 'Being' | 'Deciding' | 'Relating' | 'Doing';

export interface Force {
  name: string;
  tagline: string;
}

export interface Product {
  slug: string;
  volumeLabel: string;
  title: string;
  theme: Theme | null;
  pageCount: number;
  isFree: boolean;
  price: number | null;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  forces: Force[];
  pullQuote: string | null;
  coverImage: string | null;
  accentGradient: [string, string];
  payhipUrl: string | null;
  comingSoon: boolean;
  continueWith: string[];
  metaDescription: string;
  ogImage: string | null;
}

export interface Bundle {
  slug: string;
  title: string;
  subtitle: string;
  includes: string[];
  bundlePrice: number;
  payhipUrl: string | null;
  isFlagship: boolean;
  comingSoon: boolean;
}

export interface LaunchPromo {
  active: boolean;
  discountPercent: number;
  label: string;
  endsOn: string;
}

export const site         = raw.site;
export const launchPromo: LaunchPromo = raw.launchPromo;
export const products: Product[] = raw.products as Product[];
export const bundles:  Bundle[]  = raw.bundles  as Bundle[];

export function getProduct(slug: string): Product {
  const p = products.find(p => p.slug === slug);
  if (!p) throw new Error(`Unknown product slug: ${slug}`);
  return p;
}

export function getBundle(slug: string): Bundle {
  const b = bundles.find(b => b.slug === slug);
  if (!b) throw new Error(`Unknown bundle slug: ${slug}`);
  return b;
}

/** Sum of the individual prices of every product in a bundle. */
export function bundleIndividualTotal(b: Bundle): number {
  return b.includes
    .map(slug => getProduct(slug).price ?? 0)
    .reduce((a, b) => a + b, 0);
}

/** Apply the launch promo to a price (returns the discounted price, rounded to .x9). */
export function applyPromo(price: number): number {
  if (!launchPromo.active) return price;
  const raw = price * (1 - launchPromo.discountPercent / 100);
  // Round down to the nearest .x9 for editorial pricing.
  return Math.floor(raw) + 0.99 > raw ? Math.floor(raw) - 0.01 + 1 : Math.floor(raw) + 0.99;
}

export function formatPrice(n: number): string {
  return `$${n.toFixed(2)}`;
}
