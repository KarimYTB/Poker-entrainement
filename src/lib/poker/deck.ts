import { RANKS, SUITS, type Card } from './cards';

export function createDeck(): Card[] {
  return SUITS.flatMap((suit) => RANKS.map((rank) => ({ rank, suit })));
}

export function shuffleDeck(deck: Card[], rng: () => number = Math.random) {
  const copy = [...deck];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function dealCards(deck: Card[], count: number) {
  return {
    cards: deck.slice(0, count),
    rest: deck.slice(count)
  };
}
