/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
	preflight: false,
 }
}

