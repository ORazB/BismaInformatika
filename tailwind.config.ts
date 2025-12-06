import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    
    extend: {
      colors: {
        primary: '#B52026',
        secondary: '#8D181C',
        accent: '#FFB606'
      }
    },
  },
  plugins: [],
};

export default config;