export interface DestinationCard {
  slug: string;
  name: string;
  region: string;
  emoji: string;
  transport: string[];
  image: string;
}

export const DESTINATION_CARDS: DestinationCard[] = [
  { slug: 'milano', name: 'Milano', region: 'Italija', emoji: '🛍', transport: ['✈', '🚌', '🏨'], image: '/images/milano.jpg' },
  { slug: 'barcelona', name: 'Barcelona', region: 'Španija', emoji: '🥂', transport: ['✈', '🚌', '🏨'], image: '/images/barcelona.jpg' },
  { slug: 'pariz', name: 'Pariz', region: 'Francuska', emoji: '🗼', transport: ['✈', '🚌', '🏨'], image: '/images/pariz.jpg' },
  { slug: 'rim', name: 'Rim', region: 'Italija', emoji: '🏛', transport: ['✈', '🚌', '🏨'], image: '/images/rim.jpg' },
  { slug: 'berlin', name: 'Berlin', region: 'Njemačka', emoji: '🐻', transport: ['✈', '🚌', '🏨'], image: '/images/berlin.jpg' },
  { slug: 'bec', name: 'Beč', region: 'Austrija', emoji: '🎻', transport: ['✈', '🚌', '🏨'], image: '/images/bec.jpg' },
  { slug: 'prag', name: 'Prag', region: 'Češka', emoji: '🏰', transport: ['✈', '🚌', '🏨'], image: '/images/prag.jpg' },
  { slug: 'stockholm', name: 'Stockholm', region: 'Švedska', emoji: '👑', transport: ['✈', '🏨'], image: '/images/stockholm.jpg' },
  // Istanbul privremeno isključen — vrati karticu ovdje kad bude spreman za objavu.
  // { slug: 'istanbul', name: 'Istanbul', region: 'Turska', emoji: '🕌', transport: ['✈', '🚌', '🏨'], image: '/images/istanbul.jpg' },
];
