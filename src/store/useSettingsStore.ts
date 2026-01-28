import { create } from 'zustand';

export type AnimationSpeed = 'lent' | 'normal' | 'rapide';

type SettingsState = {
  tableStyle: string;
  animationSpeed: AnimationSpeed;
  reduceAnimations: boolean;
  soundEnabled: boolean;
  setSetting: <K extends keyof Omit<SettingsState, 'setSetting'>>(key: K, value: SettingsState[K]) => void;
};

export const useSettingsStore = create<SettingsState>((set) => ({
  tableStyle: 'neon',
  animationSpeed: 'normal',
  reduceAnimations: false,
  soundEnabled: true,
  setSetting: (key, value) => set({ [key]: value })
}));
