import { text } from '@sveltejs/kit';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      primary: '#FFE8C2',
      second: "#484349",
      green: "#499167",
      red: "#EF6461",
      blue:"#98C1D9"
    }
  },
  plugins: []
};