import type { Card } from './cards';
import { createDeck, shuffleDeck } from './deck';
import { compareHands, evaluateHand } from './evaluator';

export type EquityResult = {
  win: number;
  tie: number;
  lose: number;
  runs: number;
};

export function simulateEquity({
  heroCards,
  boardCards,
  opponents,
  runs = 5000
}: {
  heroCards: Card[];
  boardCards: Card[];
  opponents: number;
  runs?: number;
}): EquityResult {
  let win = 0;
  let tie = 0;
  let lose = 0;

  for (let i = 0; i < runs; i += 1) {
    const deck = shuffleDeck(createDeck())
      .filter(
        (card) =>
          !heroCards.some((hero) => hero.rank === card.rank && hero.suit === card.suit) &&
          !boardCards.some((board) => board.rank === card.rank && board.suit === card.suit)
      );

    const neededBoard = 5 - boardCards.length;
    const runBoard = deck.slice(0, neededBoard);
    let offset = neededBoard;

    const heroHand = evaluateHand([...heroCards, ...boardCards, ...runBoard]);
    let heroBest = heroHand;
    let heroOutcome = 'win';

    for (let opp = 0; opp < opponents; opp += 1) {
      const oppCards = deck.slice(offset, offset + 2);
      offset += 2;
      const oppHand = evaluateHand([...oppCards, ...boardCards, ...runBoard]);
      const comparison = compareHands(heroBest, oppHand);
      if (comparison < 0) {
        heroOutcome = 'lose';
      }
      if (comparison === 0 && heroOutcome !== 'lose') {
        heroOutcome = 'tie';
      }
    }

    if (heroOutcome === 'win') {
      win += 1;
    } else if (heroOutcome === 'tie') {
      tie += 1;
    } else {
      lose += 1;
    }
  }

  return { win, tie, lose, runs };
}
