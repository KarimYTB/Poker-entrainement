import { describe, expect, it } from 'vitest';
import { evaluateHand } from '@/lib/poker/evaluator';

const makeCard = (rank: number, suit: string) => ({ rank, suit } as const);

describe('evaluateHand', () => {
  it('detects flush', () => {
    const hand = [
      makeCard(14, '♠'),
      makeCard(10, '♠'),
      makeCard(7, '♠'),
      makeCard(4, '♠'),
      makeCard(2, '♠'),
      makeCard(9, '♦'),
      makeCard(3, '♣')
    ];
    expect(evaluateHand(hand).category).toBe('Flush');
  });

  it('detects full house', () => {
    const hand = [
      makeCard(10, '♠'),
      makeCard(10, '♦'),
      makeCard(10, '♣'),
      makeCard(4, '♠'),
      makeCard(4, '♥'),
      makeCard(9, '♣'),
      makeCard(2, '♠')
    ];
    expect(evaluateHand(hand).category).toBe('Full House');
  });

  it('detects straight', () => {
    const hand = [
      makeCard(14, '♠'),
      makeCard(13, '♦'),
      makeCard(12, '♣'),
      makeCard(11, '♠'),
      makeCard(10, '♥'),
      makeCard(3, '♣'),
      makeCard(2, '♠')
    ];
    expect(evaluateHand(hand).category).toBe('Straight');
  });
});
