import { Hero } from '@/components/landing/Hero';
import { Card } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <div className="flex w-full flex-col gap-10">
      <Hero />
      <div className="grid gap-6 md:grid-cols-3">
        {['IA compétitive', 'Analyse complète', 'Coaching post-main'].map((title) => (
          <Card key={title}>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/60">
              Données réelles, suivi en base et accompagnement probabiliste pour progresser durablement.
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
