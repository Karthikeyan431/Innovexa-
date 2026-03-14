/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',
        'section-bg': 'var(--section-bg)',
        card: 'var(--card)',
        footer: 'var(--footer)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'accent-secondary': 'var(--accent-secondary)',
        'glow-blue': 'var(--glow-blue)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #8A2BE2, #7B5CFF, #3DA9FC)',
      },
      boxShadow: {
        'glow': '0 0 18px rgba(61,169,252,0.6)',
        'glow-lg': '0 0 40px rgba(61,169,252,0.4)',
      },
    },
  },
  plugins: [],
}
