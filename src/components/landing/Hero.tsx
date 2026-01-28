'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="grid gap-10 md:grid-cols-2">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <p className="text-sm uppercase tracking-[0.4em] text-winamax-red">Training Camp</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          Poker Extreme Trainer
        </h1>
        <p className="mt-4 text-white/70">
          Entraîne-toi face à des IA crédibles, analyse chaque main et construis une bankroll solide avec un coaching post-main.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/app">
            <Button>Lancer une session</Button>
          </Link>
          <Link href="/history" className="rounded-full border border-white/20 px-5 py-2 text-sm text-white">
            Voir l’historique
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-white/10 bg-winamax-gray/80 p-6"
      >
        <h3 className="text-lg font-semibold text-white">Ce que tu obtiens</h3>
        <ul className="mt-4 space-y-3 text-sm text-white/70">
          <li>• IA adaptatives basées sur équité, position, sizing.</li>
          <li>• Equity live et coaching probabiliste clair.</li>
          <li>• Historique complet, stats pro et relecture animée.</li>
        </ul>
      </motion.div>
    </section>
  );
}
