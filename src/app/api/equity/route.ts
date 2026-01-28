import { NextResponse } from 'next/server';
import { z } from 'zod';
import { simulateEquity } from '@/lib/poker/equity';
import { rateLimit } from '@/lib/rateLimit';

const EquitySchema = z.object({
  heroCards: z.array(z.object({ rank: z.number(), suit: z.string() })),
  boardCards: z.array(z.object({ rank: z.number(), suit: z.string() })),
  opponents: z.number().min(1).max(8),
  runs: z.number().min(500).max(10000).optional()
});

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'local';
  const limiter = rateLimit(`equity:${ip}`, 10, 10_000);
  if (!limiter.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  const body = await request.json();
  const parsed = EquitySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const result = simulateEquity({
    heroCards: parsed.data.heroCards,
    boardCards: parsed.data.boardCards,
    opponents: parsed.data.opponents,
    runs: parsed.data.runs
  });

  const winPct = (result.win / result.runs) * 100;
  const tiePct = (result.tie / result.runs) * 100;

  return NextResponse.json({
    winPct: Number(winPct.toFixed(2)),
    tiePct: Number(tiePct.toFixed(2)),
    runs: result.runs,
    note: 'Estimation Monte Carlo'
  });
}
