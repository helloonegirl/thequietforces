/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // Replace defaults — the brief forbids default Tailwind colors.
    // Color names are flat strings (no nested shade objects) so utilities
    // like text-text-mid, bg-gold-dark resolve unambiguously.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      cream:        '#fdfaf3',
      ink:          '#2b2a26',
      'ink-mid':    '#5a5348',
      'ink-dim':    '#8a8272',
      gold:         '#e6b45f',
      'gold-dark':  '#a68a3e',
      'gold-bright':'#d4a24a',
      'border-soft':'#d6cdb4',
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
