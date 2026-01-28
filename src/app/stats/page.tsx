import { StatsDashboard } from '@/components/stats/StatsDashboard';
import { Card } from '@/components/ui/Card';

export default function StatsPage() {
  return (
    <div className="w-full space-y-6">
      <h1 className="text-3xl font-semibold text-white">Statistiques Pro</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {['VPIP', 'PFR', '3-bet'].map((stat) => (
          <Card key={stat}>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">{stat}</p>
            <p className="mt-3 text-2xl text-white">24%</p>
          </Card>
        ))}
      </div>
      <StatsDashboard />
    </div>
  );
}
