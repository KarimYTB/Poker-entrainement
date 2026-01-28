'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'J1', value: 0 },
  { name: 'J2', value: 12 },
  { name: 'J3', value: 4 },
  { name: 'J4', value: 18 },
  { name: 'J5', value: 30 }
];

export function StatsDashboard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <div className="rounded-3xl border border-white/10 bg-surface-800/80 p-6">
        <h3 className="text-lg font-semibold text-white">Courbe de bankroll</h3>
        <div className="mt-4 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4cc9f0" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
