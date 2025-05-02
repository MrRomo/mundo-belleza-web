/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Dancing Script', 'cursive'], // For stylized titles like the logo
        'sans': ['Montserrat', 'sans-serif'], // For regular text
        'serif': ['Merriweather', 'serif'], // For possible accent text
      },
    },
  },
  plugins: [],
};
