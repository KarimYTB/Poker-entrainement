import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const profiles = [
  {
    name: 'Nit Impitoyable',
    avatar: 'nit.png',
    description: 'Ultra serré, ne joue que les premiums.',
    vpip: 12,
    pfr: 10,
    threeBet: 4,
    aggression: 2.2,
    level: 'Intermédiaire',
    style: 'Nit'
  },
  {
    name: 'TAG Régulier',
    avatar: 'tag.png',
    description: 'Serré-agressif, value solide.',
    vpip: 20,
    pfr: 16,
    threeBet: 7,
    aggression: 3.0,
    level: 'Avancé',
    style: 'TAG'
  },
  {
    name: 'LAG Électrique',
    avatar: 'lag.png',
    description: 'Vols fréquents, pression constante.',
    vpip: 30,
    pfr: 24,
    threeBet: 9,
    aggression: 3.5,
    level: 'Avancé',
    style: 'LAG'
  },
  {
    name: 'Maniaque Turbo',
    avatar: 'maniac.png',
    description: 'Relance sans peur, énorme variance.',
    vpip: 45,
    pfr: 35,
    threeBet: 14,
    aggression: 4.2,
    level: 'Extrême',
    style: 'Maniaque'
  },
  {
    name: 'Calling Station',
    avatar: 'station.png',
    description: 'Payeur chronique, bluffe peu.',
    vpip: 38,
    pfr: 8,
    threeBet: 2,
    aggression: 1.5,
    level: 'Débutant',
    style: 'Calling Station'
  },
  {
    name: 'Tricky Fox',
    avatar: 'tricky.png',
    description: 'Lignes créatives, check-raise.',
    vpip: 25,
    pfr: 18,
    threeBet: 8,
    aggression: 3.4,
    level: 'Avancé',
    style: 'Tricky'
  },
  {
    name: 'Grinder GTO',
    avatar: 'gto.png',
    description: 'Équilibré, difficile à lire.',
    vpip: 22,
    pfr: 19,
    threeBet: 10,
    aggression: 3.1,
    level: 'Pro',
    style: 'Équilibré'
  },
  {
    name: 'Sniper 3-Bet',
    avatar: 'sniper.png',
    description: 'Punition préflop et squeeze.',
    vpip: 18,
    pfr: 17,
    threeBet: 12,
    aggression: 3.6,
    level: 'Avancé',
    style: 'Aggro 3bet'
  },
  {
    name: 'Roi des Bluffs',
    avatar: 'bluff.png',
    description: 'Bluffs calibrés, timing parfait.',
    vpip: 27,
    pfr: 23,
    threeBet: 9,
    aggression: 4.0,
    level: 'Pro',
    style: 'Bluffeur'
  },
  {
    name: 'Value Hunter',
    avatar: 'value.png',
    description: 'Thin value et discipline.',
    vpip: 21,
    pfr: 15,
    threeBet: 5,
    aggression: 2.8,
    level: 'Intermédiaire',
    style: 'Value'
  },
  {
    name: 'Ice Cold',
    avatar: 'ice.png',
    description: 'Ultra patient, punit les leaks.',
    vpip: 14,
    pfr: 12,
    threeBet: 6,
    aggression: 2.6,
    level: 'Pro',
    style: 'Nit Pro'
  },
  {
    name: 'Extrême Adaptatif',
    avatar: 'extreme.png',
    description: 'Mix d’attaques et d’adaptations rapides.',
    vpip: 28,
    pfr: 24,
    threeBet: 11,
    aggression: 3.8,
    level: 'Extrême',
    style: 'Difficulté Extrême'
  }
];

async function main() {
  await prisma.aIProfile.deleteMany();
  await prisma.aIProfile.createMany({ data: profiles });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
