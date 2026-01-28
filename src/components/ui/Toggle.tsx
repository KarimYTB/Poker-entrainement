'use client';

import { motion } from 'framer-motion';

export function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (value: boolean) => void; label: string }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-center gap-3 text-sm text-white"
    >
      <span>{label}</span>
      <div className={`relative h-6 w-11 rounded-full ${checked ? 'bg-winamax-red' : 'bg-surface-700'}`}>
        <motion.span
          layout
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white"
          animate={{ x: checked ? 20 : 2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </div>
    </button>
  );
}
