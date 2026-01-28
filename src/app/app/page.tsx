import { StatCard } from '@/components/dashboard/StatCard';
import { PokerTable } from '@/components/table/PokerTable';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function AppPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      <Card className="bg-gradient-to-r from-neon-purple/30 via-surface-800 to-neon-blue/20">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Hub de session</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Bienvenue au camp d’entraînement</h2>
            <p className="mt-2 text-sm text-white/70">
              Relance une session ou plonge directement sur la table. Chaque action est animée et suivie en base de données.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/app">
                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white">Lancer une session</span>
              </Link>
              <Link href="/history">
                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white">Historique</span>
              </Link>
              <Link href="/stats">
                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white">Stats</span>
              </Link>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <StatCard title="Gain total" value={1250} suffix=" €" />
            <StatCard title="Winrate" value={6.8} suffix=" bb/100" />
            <StatCard title="Mains jouées" value={842} />
            <StatCard title="Meilleur coup" value={220} suffix=" bb" />
          </div>
        </div>
      </Card>
      <PokerTable />
    </div>
  );
}
