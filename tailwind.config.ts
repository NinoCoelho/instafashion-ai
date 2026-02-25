import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /from-(pink|orange|purple)-500/,
      variants: ['bg-gradient-to-r', 'bg-gradient-to-br', 'bg-gradient-to-b'],
    },
    {
      pattern: /via-(orange|pink)-500/,
      variants: ['bg-gradient-to-r', 'bg-gradient-to-br'],
    },
    {
      pattern: /to-(purple|orange|pink)-600/,
      variants: ['bg-gradient-to-r', 'bg-gradient-to-br'],
    },
    'bg-clip-text',
    'text-transparent',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
