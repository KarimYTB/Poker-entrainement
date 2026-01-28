'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const seats = ['UTG', 'MP', 'CO', 'BTN', 'SB', 'BB'];

export function PokerTable() {
  const cards = useMemo(() => ['A♠', 'K♠'], []);

  return (
    <Card className="mt-6 bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-white/60">Table 6-max • 1/2 • 100bb</p>
            <h2 className="text-2xl font-semibold text-white">Session en cours</h2>
          </div>
          <Button>Lancer une main</Button>
        </div>
        <div className="relative flex h-64 items-center justify-center rounded-full border border-white/10 bg-surface-700/70">
          <div className="absolute inset-6 rounded-full border border-neon-blue/30" />
          <div className="flex gap-2">
            {cards.map((card) => (
              <motion.div
                key={card}
                initial={{ y: -20, opacity: 0, rotate: -8 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.4, type: 'spring' }}
                className="flex h-20 w-14 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-lg font-semibold text-white"
              >
                {card}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-4 rounded-full bg-neon-blue/20 px-4 py-1 text-xs text-neon-blue"
          >
            Pot: 12.5bb
          </motion.div>
          {seats.map((seat, index) => (
            <motion.div
              key={seat}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="absolute rounded-full border border-white/10 bg-surface-900/80 px-3 py-1 text-xs text-white"
              style={{
                top: `${15 + (index % 3) * 20}%`,
                left: `${index < 3 ? 10 + index * 30 : 10 + (index - 3) * 30}%`
              }}
            >
              {seat}
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {['Fold', 'Call', 'Raise', 'All-in'].map((action) => (
            <motion.button
              key={action}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-2xl border border-white/10 bg-surface-800/80 px-4 py-2 text-sm text-white"
            >
              {action}
            </motion.button>
          ))}
        </div>
      </div>
    </Card>
  );
}
