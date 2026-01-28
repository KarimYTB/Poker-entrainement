import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#4cc9f0',
          purple: '#7209b7',
          pink: '#f72585',
          green: '#3aefb6'
        },
        surface: {
          900: '#0b0f1a',
          800: '#111827',
          700: '#1f2937'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(76, 201, 240, 0.35)'
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(76, 201, 240, 0.2), transparent 50%)'
      }
    }
  },
  plugins: []
};

export default config;
