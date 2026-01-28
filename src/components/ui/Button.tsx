'use client';

import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export function Button({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(
        'rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink px-5 py-2 text-sm font-semibold text-white shadow-glow transition',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-blue',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
