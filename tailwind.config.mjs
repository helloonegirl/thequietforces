/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // Replace defaults — the brief forbids default Tailwind colors.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      cream:    '#fdfaf3',
      text:     '#2b2a26',
      'text-mid': '#5a5348',
      'text-dim': '#8a8272',
      gold:     '#e6b45f',
      'gold-dark':   '#a68a3e',
      'gold-bright': '#d4a24a',
      border:   '#d6cdb4',
      // Product accents (gradient stops)
      navy:        { from: '#1a2332', to: '#2c3e5a' },
      burgundy:    { from: '#2a1a1a', to: '#5a2c2c' },
      forest:      { from: '#0f2418', to: '#1e4330' },
      terracotta:  { from: '#3a1a12', to: '#6b2c1e' },
      charcoal:    { from: '#1a1a1a', to: '#2b2a26' },
    },
    fontFamily: {
      // Brand pairing — do not substitute.
      serif: ['Fraunces', 'serif'],
      sans:  ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      letterSpacing: {
        tightish: '-0.01em',
        tighter2: '-0.015em',
        widest2:  '0.3em',
      },
      maxWidth: {
        prose2: '600px',
      },
    },
  },
  plugins: [],
};
