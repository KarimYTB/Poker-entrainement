import type { Card, Rank } from './cards';

export type HandCategory =
  | 'High Card'
  | 'One Pair'
  | 'Two Pair'
  | 'Three of a Kind'
  | 'Straight'
  | 'Flush'
  | 'Full House'
  | 'Four of a Kind'
  | 'Straight Flush';

export type HandRank = {
  category: HandCategory;
  tiebreakers: Rank[];
};

const CATEGORY_ORDER: HandCategory[] = [
  'High Card',
  'One Pair',
  'Two Pair',
  'Three of a Kind',
  'Straight',
  'Flush',
  'Full House',
  'Four of a Kind',
  'Straight Flush'
];

function sortRanksDesc(ranks: Rank[]) {
  return [...ranks].sort((a, b) => b - a);
}

function getStraight(ranks: Rank[]) {
  const unique = Array.from(new Set(ranks)).sort((a, b) => b - a);
  if (unique[0] === 14) {
    unique.push(1 as Rank);
  }

  for (let i = 0; i <= unique.length - 5; i += 1) {
    const window = unique.slice(i, i + 5);
    if (window[0] - window[4] === 4) {
      return window[0] === 1 ? 5 : window[0];
    }
  }

  return null;
}

export function evaluateHand(cards: Card[]): HandRank {
  const ranks = cards.map((card) => card.rank);
  const suits = cards.map((card) => card.suit);

  const rankCounts = new Map<Rank, number>();
  ranks.forEach((rank) => rankCounts.set(rank, (rankCounts.get(rank) ?? 0) + 1));

  const suitCounts = new Map<string, Card[]>();
  cards.forEach((card) => {
    const list = suitCounts.get(card.suit) ?? [];
    list.push(card);
    suitCounts.set(card.suit, list);
  });

  const flushCards = Array.from(suitCounts.values()).find((group) => group.length >= 5);

  if (flushCards) {
    const flushRanks = sortRanksDesc(flushCards.map((card) => card.rank));
    const straightFlushHigh = getStraight(flushRanks);
    if (straightFlushHigh) {
      return { category: 'Straight Flush', tiebreakers: [straightFlushHigh as Rank] };
    }
  }

  const four = Array.from(rankCounts.entries()).find(([, count]) => count === 4);
  if (four) {
    const kickers = sortRanksDesc(ranks.filter((rank) => rank !== four[0]));
    return { category: 'Four of a Kind', tiebreakers: [four[0], ...kickers.slice(0, 1)] };
  }

  const triples = Array.from(rankCounts.entries())
    .filter(([, count]) => count === 3)
    .map(([rank]) => rank)
    .sort((a, b) => b - a);

  const pairs = Array.from(rankCounts.entries())
    .filter(([, count]) => count === 2)
    .map(([rank]) => rank)
    .sort((a, b) => b - a);

  if (triples.length > 0 && (pairs.length > 0 || triples.length > 1)) {
    const topTriple = triples[0];
    const topPair = pairs[0] ?? triples[1];
    return { category: 'Full House', tiebreakers: [topTriple, topPair] };
  }

  if (flushCards) {
    const flushRanks = sortRanksDesc(flushCards.map((card) => card.rank));
    return { category: 'Flush', tiebreakers: flushRanks.slice(0, 5) };
  }

  const straightHigh = getStraight(ranks);
  if (straightHigh) {
    return { category: 'Straight', tiebreakers: [straightHigh as Rank] };
  }

  if (triples.length > 0) {
    const kickers = sortRanksDesc(ranks.filter((rank) => rank !== triples[0]));
    return { category: 'Three of a Kind', tiebreakers: [triples[0], ...kickers.slice(0, 2)] };
  }

  if (pairs.length >= 2) {
    const topPairs = pairs.slice(0, 2);
    const kicker = sortRanksDesc(ranks.filter((rank) => !topPairs.includes(rank)))[0];
    return { category: 'Two Pair', tiebreakers: [...topPairs, kicker] };
  }

  if (pairs.length === 1) {
    const kickers = sortRanksDesc(ranks.filter((rank) => rank !== pairs[0]));
    return { category: 'One Pair', tiebreakers: [pairs[0], ...kickers.slice(0, 3)] };
  }

  return { category: 'High Card', tiebreakers: sortRanksDesc(ranks).slice(0, 5) };
}

export function compareHands(a: HandRank, b: HandRank) {
  const categoryDiff = CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
  if (categoryDiff !== 0) {
    return categoryDiff;
  }

  for (let i = 0; i < Math.max(a.tiebreakers.length, b.tiebreakers.length); i += 1) {
    const diff = (a.tiebreakers[i] ?? 0) - (b.tiebreakers[i] ?? 0);
    if (diff !== 0) {
      return diff;
    }
  }

  return 0;
}
