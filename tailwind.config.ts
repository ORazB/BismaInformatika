import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#F59E0B',
      }
    },
  },
  plugins: [],
};

export default config;