import { Hero } from '@/components/landing/Hero';
import { Card } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10">
      <Hero />
      <div className="grid gap-6 md:grid-cols-3">
        {['IA Extrême', 'Animations vivantes', 'Coaching post-main'].map((title) => (
          <Card key={title}>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/60">
              Expérience ultra dynamique avec transitions fluides et micro-interactions sur chaque écran.
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
