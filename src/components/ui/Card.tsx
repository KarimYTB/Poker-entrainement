import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-white/10 bg-winamax-gray/80 p-6 shadow-xl backdrop-blur',
        className
      )}
    >
      {children}
    </div>
  );
}
