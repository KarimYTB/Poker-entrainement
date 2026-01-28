export type PlayerContribution = {
  playerId: string;
  amount: number;
  allIn: boolean;
};

export type SidePot = {
  amount: number;
  eligible: string[];
};

export function calculateSidePots(contributions: PlayerContribution[]): SidePot[] {
  const sorted = [...contributions].sort((a, b) => a.amount - b.amount);
  const pots: SidePot[] = [];
  let previous = 0;

  for (let i = 0; i < sorted.length; i += 1) {
    const level = sorted[i];
    const currentAmount = level.amount;
    const activePlayers = sorted.slice(i).map((player) => player.playerId);
    const potAmount = (currentAmount - previous) * activePlayers.length;
    if (potAmount > 0) {
      pots.push({ amount: potAmount, eligible: activePlayers });
    }
    previous = currentAmount;
  }

  return pots;
}
