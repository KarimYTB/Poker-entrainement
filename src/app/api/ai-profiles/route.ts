import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const profiles = await prisma.aIProfile.findMany({ orderBy: { createdAt: 'asc' } });
  return NextResponse.json({ data: profiles });
}
