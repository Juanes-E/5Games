/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    ],
    theme: {
      extend: {
        colors: {
          background: '#0f172a',
          primary: '#38bdf8',
          text: '#f8fafc',
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  