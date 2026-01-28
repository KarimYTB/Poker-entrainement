import type { Card } from './cards';
import { evaluateHand } from './evaluator';

export type AIProfile = {
  id: string;
  name: string;
  style: string;
  vpip: number;
  pfr: number;
  threeBet: number;
  aggression: number;
  level: string;
};

export type AIDecision = {
  action: 'fold' | 'call' | 'raise' | 'all-in';
  amount?: number;
  rationale: string;
};

export type AIContext = {
  holeCards: Card[];
  boardCards: Card[];
  potSize: number;
  toCall: number;
  stack: number;
  position: 'UTG' | 'MP' | 'CO' | 'BTN' | 'SB' | 'BB';
  playerTendencies: {
    foldsTooMuch: boolean;
    callsTooMuch: boolean;
    aggression: number;
  };
  difficulty: 'normal' | 'extreme';
};

const positionAggression = {
  UTG: 0.8,
  MP: 0.9,
  CO: 1.05,
  BTN: 1.2,
  SB: 1.0,
  BB: 0.95
};

function estimatedStrength(hole: Card[], board: Card[]) {
  const fullHand = [...hole, ...board];
  if (fullHand.length < 5) {
    const highCards = hole.map((card) => card.rank).sort((a, b) => b - a);
    const paired = hole[0].rank === hole[1].rank;
    const suited = hole[0].suit === hole[1].suit;
    let score = (highCards[0] + highCards[1]) / 28;
    if (paired) score += 0.25;
    if (suited) score += 0.1;
    return Math.min(score, 1);
  }
  const evaluated = evaluateHand(fullHand);
  const categoryBoost = {
    'High Card': 0.35,
    'One Pair': 0.5,
    'Two Pair': 0.65,
    'Three of a Kind': 0.75,
    Straight: 0.82,
    Flush: 0.88,
    'Full House': 0.93,
    'Four of a Kind': 0.97,
    'Straight Flush': 1
  }[evaluated.category];
  return categoryBoost;
}

export function decideAction(profile: AIProfile, context: AIContext): AIDecision {
  const strength = estimatedStrength(context.holeCards, context.boardCards);
  const potOdds = context.toCall > 0 ? context.toCall / (context.potSize + context.toCall) : 0;
  const positionFactor = positionAggression[context.position];
  const difficultyBoost = context.difficulty === 'extreme' ? 1.1 : 1;
  const aggression = (profile.aggression / 5) * positionFactor * difficultyBoost;

  let bias = aggression + (strength - potOdds);

  if (context.playerTendencies.foldsTooMuch) {
    bias += 0.2;
  }
  if (context.playerTendencies.callsTooMuch) {
    bias += 0.1;
  }

  const randomSwing = (Math.random() - 0.5) * 0.2;
  bias += randomSwing;

  if (context.stack <= context.toCall) {
    return { action: 'all-in', rationale: 'Stack engagé, shove logique.' };
  }

  if (bias < 0.15 && context.toCall > 0) {
    return { action: 'fold', rationale: 'Pot odds défavorables.' };
  }

  if (bias < 0.4) {
    return { action: 'call', rationale: 'Suivi contrôlé pour réaliser l’équité.' };
  }

  const raiseSize = Math.min(context.stack, Math.max(context.toCall * 3, Math.round(context.potSize * 0.75)));
  if (raiseSize >= context.stack * 0.9) {
    return { action: 'all-in', rationale: 'Pression maximale avec avantage.' };
  }

  return { action: 'raise', amount: raiseSize, rationale: 'Relance agressive pour value/pression.' };
}
