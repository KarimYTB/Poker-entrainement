'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export function StatCard({ title, value, suffix }: { title: string; value: number; suffix?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/10 bg-winamax-gray/80 p-4"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-white/50">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-white">
        <CountUp end={value} duration={1.4} />
        {suffix}
      </p>
    </motion.div>
  );
}
