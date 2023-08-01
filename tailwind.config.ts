import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "./pages/**/*.vue",
    "./components/**/*.{js,vue,ts}",
    'docs/content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'bla': '#272727',
        'whi': '#ded9cc',
        'pin': '#d04e7a',
        'yel': '#c5ce5f',
        'gre': '#338f57',
        'blu': '#81a0ca',
      },
    },
  },
}