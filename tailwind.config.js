/** @type {import('tailwindcss').Config} */
module.exports = {
  preflight: false,
  content: ['frontend/contents/**/*.md', 'frontend/contents/.vitepress/theme/*.vue'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}