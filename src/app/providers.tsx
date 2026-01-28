'use client';

import { SessionProvider } from 'next-auth/react';
import type { PropsWithChildren } from 'react';
import { PageTransition } from '@/components/animated/PageTransition';

export function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <PageTransition>{children}</PageTransition>
    </SessionProvider>
  );
}
