import { StatCard } from '@/components/dashboard/StatCard';
import { PokerTable } from '@/components/table/PokerTable';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function AppPage() {
  return (
    <div className="flex w-full flex-col gap-8">
      <Card className="bg-gradient-to-r from-winamax-red/20 via-winamax-gray/80 to-winamax-dark">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Hub de session</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Table de travail</h2>
            <p className="mt-2 text-sm text-white/70">
              Bankroll de départ: <span className="font-semibold text-white">1000 €</span>. Session live, suivi complet,
              et historique sauvegardé main par main.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/app">
                <span className="rounded-full border border-winamax-red px-4 py-2 text-xs text-white">
                  Lancer une session
                </span>
              </Link>
              <Link href="/history">
                <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white">Historique</span>
              </Link>
              <Link href="/stats">
                <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white">Stats</span>
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <StatCard title="Gain total" value={258} suffix=" €" />
            <StatCard title="Winrate" value={5.2} suffix=" bb/100" />
            <StatCard title="Mains jouées" value={128} />
            <StatCard title="Bankroll actuelle" value={1258} suffix=" €" />
          </div>
        </div>
      </Card>
      <PokerTable />
    </div>
  );
}
