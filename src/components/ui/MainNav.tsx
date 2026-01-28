'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/app', label: 'Table' },
  { href: '/history', label: 'Historique' },
  { href: '/stats', label: 'Stats' },
  { href: '/profile', label: 'Profil' },
  { href: '/settings', label: 'Réglages' }
];

export function MainNav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-winamax-dark/80 backdrop-blur"
    >
      <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-white">
          Poker Extreme Trainer
        </Link>
        <div className="hidden items-center gap-4 md:flex">
          {links.map((link) => (
            <motion.div key={link.href} whileHover={{ scale: 1.05 }}>
              <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
        <Link
          href="/auth/signin"
          className="rounded-full border border-winamax-red px-4 py-2 text-xs text-white"
        >
          Connexion
        </Link>
      </div>
    </motion.nav>
  );
}
