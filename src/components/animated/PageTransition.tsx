'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { PropsWithChildren } from 'react';
import { useSettingsStore } from '@/store/useSettingsStore';

export function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const { animationSpeed, reduceAnimations } = useSettingsStore();
  const durationMap = { lent: 0.55, normal: 0.35, rapide: 0.2 } as const;
  const duration = reduceAnimations ? 0 : durationMap[animationSpeed];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: reduceAnimations ? 0 : 16, scale: reduceAnimations ? 1 : 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: reduceAnimations ? 0 : -12, scale: reduceAnimations ? 1 : 0.98 }}
        transition={{ duration, ease: 'easeOut' }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
