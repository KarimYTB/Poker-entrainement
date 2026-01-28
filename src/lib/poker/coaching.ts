export type CoachingNote = {
  grade: 'A' | 'B' | 'C' | 'D';
  summary: string;
  leaks: string[];
  alternatives: string[];
};

export function generateCoaching({
  street,
  action,
  equity,
  potOdds,
  position
}: {
  street: 'preflop' | 'flop' | 'turn' | 'river';
  action: 'fold' | 'call' | 'raise' | 'all-in' | 'check';
  equity: number;
  potOdds: number;
  position: string;
}): CoachingNote {
  const leaks: string[] = [];
  const alternatives: string[] = [];
  let grade: CoachingNote['grade'] = 'B';
  let summary = 'Décision correcte avec marge d’amélioration.';

  if (action === 'call' && equity < potOdds) {
    leaks.push('Call avec équité insuffisante face aux pot odds.');
    alternatives.push('Préférer fold ou raise avec plan clair.');
    grade = 'C';
    summary = 'Le call est probablement trop loose.';
  }

  if (action === 'raise' && equity < 0.4 && street !== 'preflop') {
    leaks.push('Bluff avec trop peu d’équité ou de fold equity.');
    alternatives.push('Privilégier check ou delay c-bet.');
    grade = 'C';
    summary = 'La relance manque de support equity.';
  }

  if (action === 'fold' && equity > 0.45) {
    leaks.push('Fold possiblement trop tight.');
    alternatives.push('Envisager call si les côtes sont bonnes.');
    grade = 'B';
    summary = 'Le fold semble conservateur.';
  }

  if (position === 'BTN' && action === 'fold' && street === 'preflop') {
    leaks.push('Opportunité de vol manquée au bouton.');
    alternatives.push('Open-raise plus large au BTN.');
  }

  if (action === 'all-in' && equity > 0.7) {
    grade = 'A';
    summary = 'All-in très favorable compte tenu de l’équité.';
  }

  return {
    grade,
    summary,
    leaks,
    alternatives
  };
}
