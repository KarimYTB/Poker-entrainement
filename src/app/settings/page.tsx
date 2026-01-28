'use client';

import { useSettingsStore } from '@/store/useSettingsStore';
import { Card } from '@/components/ui/Card';
import { Slider } from '@/components/ui/Slider';
import { Toggle } from '@/components/ui/Toggle';

export default function SettingsPage() {
  const { animationSpeed, reduceAnimations, soundEnabled, setSetting } = useSettingsStore();

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-3xl font-semibold text-white">Réglages</h1>
      <Card>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-white/60">Vitesse des animations</p>
            <div className="mt-2 flex gap-3">
              {(['lent', 'normal', 'rapide'] as const).map((speed) => (
                <button
                  key={speed}
                  className={`rounded-full border px-4 py-2 text-xs ${
                    animationSpeed === speed ? 'border-neon-blue text-white' : 'border-white/10 text-white/60'
                  }`}
                  onClick={() => setSetting('animationSpeed', speed)}
                >
                  {speed}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-white/60">Réduire les animations</p>
            <Toggle
              checked={reduceAnimations}
              onChange={(value) => setSetting('reduceAnimations', value)}
              label="Accessibilité"
            />
          </div>
          <div>
            <p className="text-sm text-white/60">Volume des sons</p>
            <Slider min={0} max={100} defaultValue={60} />
            <Toggle checked={soundEnabled} onChange={(value) => setSetting('soundEnabled', value)} label="Sons actifs" />
          </div>
        </div>
      </Card>
    </div>
  );
}
