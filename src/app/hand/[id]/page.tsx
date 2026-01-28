import { Card } from '@/components/ui/Card';

export default function HandDetailPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <h1 className="text-3xl font-semibold text-white">Relecture de main</h1>
      <Card>
        <p className="text-sm text-white/70">
          Timeline animée action par action avec coaching et équité affichée en temps réel.
        </p>
      </Card>
      <Card>
        <p className="text-sm text-white/70">Score décision: B – call légèrement loose selon les pot odds.</p>
      </Card>
    </div>
  );
}
