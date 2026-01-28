import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { z } from 'zod';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { rateLimit } from '@/lib/rateLimit';

const HandSchema = z.object({
  tableSize: z.number().min(2).max(9),
  blinds: z.string(),
  buyIn: z.number().min(1),
  stackDepth: z.number().min(1),
  heroCards: z.array(z.any()),
  board: z.array(z.any()),
  potSize: z.number().min(0),
  result: z.string(),
  netGain: z.number(),
  actions: z.array(z.any()),
  opponents: z.array(z.any()),
  coaching: z.record(z.any())
});

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page') ?? '1');
  const pageSize = Number(searchParams.get('pageSize') ?? '20');

  const hands = await prisma.hand.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
    skip: (page - 1) * pageSize,
    take: pageSize
  });

  return NextResponse.json({ data: hands, page, pageSize });
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const ip = request.headers.get('x-forwarded-for') ?? 'local';
  const limiter = rateLimit(`hands:${ip}`, 20, 60_000);
  if (!limiter.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  const body = await request.json();
  const parsed = HandSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const hand = await prisma.hand.create({
    data: {
      ...parsed.data,
      userId: session.user.id
    }
  });

  return NextResponse.json({ data: hand }, { status: 201 });
}
