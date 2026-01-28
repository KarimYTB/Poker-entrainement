import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        winamax: {
          red: '#e0001b',
          dark: '#0f1115',
          gray: '#1b1f27',
          light: '#f5f5f5'
        },
        surface: {
          900: '#0b0f1a',
          800: '#111827',
          700: '#1f2937'
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(224, 0, 27, 0.25)'
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(224, 0, 27, 0.12), transparent 55%)'
      }
    }
  },
  plugins: []
};

export default config;
