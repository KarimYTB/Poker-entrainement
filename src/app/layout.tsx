import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { MainNav } from '@/components/ui/MainNav';

export const metadata: Metadata = {
  title: 'Poker Extreme Trainer',
  description: 'Camp d’entraînement ultime pour Texas Hold’em.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          <div className="min-h-screen bg-radial-glow">
            <MainNav />
            <main className="w-full px-6 pb-16 pt-24 md:px-12">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
