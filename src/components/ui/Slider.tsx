'use client';

import { motion } from 'framer-motion';
import type { InputHTMLAttributes } from 'react';

export function Slider({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <motion.input
      type="range"
      whileHover={{ scale: 1.01 }}
      className={`w-full accent-winamax-red ${className ?? ''}`}
      {...props}
    />
  );
}
