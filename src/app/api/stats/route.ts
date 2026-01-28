import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const hands = await prisma.hand.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'asc' }
  });

  const totalHands = hands.length;
  const totalGain = hands.reduce((acc, hand) => acc + hand.netGain, 0);
  const winrate = totalHands > 0 ? (totalGain / totalHands) * 100 : 0;

  return NextResponse.json({
    totalHands,
    totalGain,
    winrate,
    timeline: hands.map((hand, index) => ({
      index,
      value: hands.slice(0, index + 1).reduce((acc, item) => acc + item.netGain, 0)
    }))
  });
}
