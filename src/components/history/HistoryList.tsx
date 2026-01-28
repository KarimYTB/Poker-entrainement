'use client';

import { motion } from 'framer-motion';

const entries = [
  { id: '1', title: 'AKs vs TAG', result: '+12bb', date: 'Aujourd’hui' },
  { id: '2', title: 'Flush vs two pair', result: '-8bb', date: 'Hier' },
  { id: '3', title: 'Set flopé', result: '+20bb', date: 'Hier' }
];

export function HistoryList() {
  return (
    <div className="space-y-3">
      {entries.map((entry, index) => (
        <motion.div
          key={entry.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        className="rounded-2xl border border-white/10 bg-winamax-gray/80 p-4"
      >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">{entry.title}</p>
              <p className="text-xs text-white/50">{entry.date}</p>
            </div>
            <span className="text-sm text-winamax-red">{entry.result}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
