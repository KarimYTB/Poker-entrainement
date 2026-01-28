import { HistoryList } from '@/components/history/HistoryList';
import { Card } from '@/components/ui/Card';

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <h1 className="text-3xl font-semibold text-white">Historique complet</h1>
      <Card>
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
          <span>Filtres: date, limites, adversaires, résultat</span>
        </div>
      </Card>
      <HistoryList />
    </div>
  );
}
