'use client';

import { motion } from 'framer-motion';

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-white/10 bg-surface-800/80 p-6"
    >
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-neon-purple/30" />
        <div>
          <h3 className="text-xl font-semibold text-white">Shadow Grinder</h3>
          <p className="text-sm text-white/60">Niveau: Intermédiaire</p>
        </div>
      </div>
      <div className="mt-4 grid gap-2 text-sm text-white/70">
        <p>Objectif: Gagner 5bb/100 en 30 jours.</p>
        <p>Style favori: Table néon nocturne.</p>
      </div>
    </motion.div>
  );
}
