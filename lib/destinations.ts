export interface DayActivity {
  time?: string;
  icon: 'plane-up' | 'plane-down' | 'plane' | 'bus' | 'hotel' | 'food' | 'walk' | 'info';
  text: string;
}

export interface Day {
  number: number;
  date: string;
  dayName: string;
  title: string;
  activities: DayActivity[];
}

export interface Destination {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  heroGradient: string;
  price: string;
  priceNote: string;
  duration: string;
  dates: string;
  capacity: string;
  difficulty: string;
  difficultyFun: string;
  difficultyActivity: string;
  hasKids: string;
  route: string;
  story: {
    quote: string;
    paragraphs: string[];
  };
  days: Day[];
  notes: string[];
  included: string[];
  notIncluded: string[];
  installments: { label: string; amount: string; deadline: string }[];
}

export const DESTINATIONS: Record<string, Destination> = {
  kapadokija: {
    slug: 'kapadokija',
    name: 'Kapadokija',
    region: 'Turska',
    tagline: 'Avanturistički Pohod',
    heroGradient: 'linear-gradient(135deg, #1a0a00 0%, #3d1a00 50%, #1a0a00 100%)',
    price: '1.299,00 KM',
    priceNote: 'promo cijena',
    duration: '6 dana / 5 noći',
    dates: '17.05. – 22.05.2026.',
    capacity: '30%',
    difficulty: '★★★☆☆',
    difficultyFun: '★★★★★',
    difficultyActivity: '★★★☆☆',
    hasKids: 'DA',
    route: 'Istanbul – Kapadokija – Nevşehir – Uçhisar – Zelve – Göreme',
    story: {
      quote: 'Našu priču započinjemo u Kapadokiji, zemlji neobičnih stijena i pejzaža koji izgledaju kao da su sa druge planete.',
      paragraphs: [
        'U srcu ove regije dočekaće nas nestvarne doline, drevni podzemni gradovi i pećinske kuće uklesane u stijene. Poseban doživljaj pruža let balonom u ranim jutarnjim satima, kada se iznad bajkovitog krajolika polako podižu desetine šarenih balona. Kapadokija nije samo prirodno čudo, već i mjesto bogate tradicije, autentične kuhinje i nezaboravne atmosfere.',
        'Nakon magičnih pejzaža, put nas vodi u Istanbul – grad koji ponosno spaja Evropu i Aziju. Ovdje se prošlost i sadašnjost susreću na svakom koraku. Impozantna Aja Sofija, veličanstvena Plava džamija i živopisni bazari pričaju priče stare stoljećima. Šetnja uskim ulicama, miris začina i pogled na Bosfor stvaraju jedinstven doživljaj grada koji nikoga ne ostavlja ravnodušnim.',
        'Ovo putovanje donosi savršen spoj prirodnih ljepota, kulture i historije – iskustvo koje se pamti dugo nakon povratka kući.',
      ],
    },
    days: [
      {
        number: 1, date: '17.05.', dayName: 'NEDJELJA', title: 'Sarajevo – Istanbul',
        activities: [
          { time: '05:00h', icon: 'bus', text: 'Polazak autobusima iz Sarajeva.' },
          { time: '07:30h', icon: 'plane-up', text: 'Let za Istanbul.' },
          { time: '10:45h', icon: 'plane-down', text: 'Dolazak u Istanbul.' },
          { icon: 'walk', text: 'Transfer do hotela i smještaj.' },
          { icon: 'walk', text: 'Slobodno popodne za istraživanje.' },
          { icon: 'hotel', text: 'Noćenje u Istanbulu.' },
        ],
      },
      {
        number: 2, date: '18.05.', dayName: 'PONEDJELJAK', title: 'Istanbul – Obilazak grada',
        activities: [
          { icon: 'food', text: 'Doručak u hotelu.' },
          { icon: 'walk', text: 'Obilazak Aja Sofije i Plave džamije.' },
          { icon: 'walk', text: 'Šetnja kroz Grand Bazaar.' },
          { icon: 'walk', text: 'Krstarenje Bosforom (fakultativno, 15 EUR).' },
          { icon: 'food', text: 'Turska večera u centru grada.' },
          { icon: 'hotel', text: 'Noćenje u Istanbulu.' },
        ],
      },
      {
        number: 3, date: '19.05.', dayName: 'UTORAK', title: 'Istanbul – Kapadokija',
        activities: [
          { icon: 'food', text: 'Doručak i odjava iz hotela.' },
          { time: '10:00h', icon: 'plane-up', text: 'Let za Nevşehir (Kapadokija).' },
          { time: '11:30h', icon: 'plane-down', text: 'Dolazak u Kapadokiju.' },
          { icon: 'bus', text: 'Transfer do hotela.' },
          { icon: 'walk', text: 'Obilazak Göreme otvorenog muzeja.' },
          { icon: 'hotel', text: 'Noćenje u pećinskom hotelu u Kapadokiji.' },
        ],
      },
      {
        number: 4, date: '20.05.', dayName: 'SRIJEDA', title: 'Kapadokija – Baloni & Doline',
        activities: [
          { time: '04:30h', icon: 'plane-up', text: 'Let balonom nad dolinama (fakultativno, 200–250 EUR).' },
          { icon: 'food', text: 'Champagne doručak nakon leta.' },
          { icon: 'walk', text: 'Obilazak Crvene i Zelene doline (Crvena tura, 50 EUR).' },
          { icon: 'walk', text: 'Posjeta Uçhisar tvrđavi.' },
          { icon: 'food', text: 'Tradicionalna turska večera.' },
          { icon: 'hotel', text: 'Noćenje u Kapadokiji.' },
        ],
      },
      {
        number: 5, date: '21.05.', dayName: 'ČETVRTAK', title: 'Kapadokija – Podzemni gradovi',
        activities: [
          { icon: 'food', text: 'Doručak u hotelu.' },
          { icon: 'walk', text: 'Obilazak podzemnog grada Derinkuyu.' },
          { icon: 'walk', text: 'Ihlara dolina – šetnja kanjonom.' },
          { icon: 'walk', text: 'Posjeta keramičarskim i lončarskim radionicama.' },
          { icon: 'food', text: 'Večera s turskom muzičkom tradicijom.' },
          { icon: 'hotel', text: 'Noćenje u Kapadokiji.' },
        ],
      },
      {
        number: 6, date: '22.05.', dayName: 'PETAK', title: 'Kapadokija – Sarajevo',
        activities: [
          { icon: 'hotel', text: 'Check out iz hotela.' },
          { icon: 'bus', text: 'Transfer do aerodroma.' },
          { time: '08:50h', icon: 'plane-up', text: 'Let za Istanbul.' },
          { time: '18:50h', icon: 'plane-up', text: 'Let za Sarajevo.' },
          { time: '19:45h', icon: 'plane-down', text: 'Dolazak u Sarajevo.' },
        ],
      },
    ],
    notes: [
      'Plan je podložan promjeni uslijed subjektivnih i objektivnih okolnosti i agencija zadržava pravo promjene i izmjene.',
      'Plan je kreiran više za avanturiste nego za turiste.',
      'Plan nije za osobe koje su razmažene i koje nisu spremne za avanturu.',
      'Ovo putovanje je organizovano za stalne putnike GoFly agencije i napominjemo da kako organizujemo sebi i prijateljima, tako ćemo i ostalim putnicima.',
      'Za ovo putovanje važe opći uslovi putovanja agencije GoFly d.o.o.',
      'U toku cijelog putovanja angažovan je lokalni vodič koji će biti sa nama tokom cijelog putovanja.',
      'Sobe u hotelima su sa dva kreveta ili tri po želji.',
    ],
    included: [
      'Povratna karta avio prevoza iz Sarajeva – Turkish Airlines',
      'Kabinski kofer i check in kofer do 23kg',
      '2 noći u dvokrevetnim sobama sa doručkom u Hotelu 3* u Istanbulu',
      '3 noći u dvokrevetnim sobama sa doručkom u pećinskom Hotelu 3* u Kapadokiji',
      'Transfer aerodrom – Istanbul – aerodrom',
      'Transfer aerodrom – Kapadokija – aerodrom',
      'Usluge pratioca grupe u toku cijelog putovanja',
      'Usluge agencije',
      'PDV',
    ],
    notIncluded: [
      'Fakultativni izlet: Let balonom – 200–250 EUR',
      'Fakultativni izlet: Crvena tura – 50 EUR',
      'Fakultativni izlet: Zelena tura – 50 EUR',
      'Fakultativni izlet: vožnja kvadom i jahanje konja (40–45 EUR)',
      'Fakultativni izlet: obilazak Istanbula – 30 EUR',
      'Fakultativni izlet: krstarenje Bosforom – 15 EUR',
      'Fakultativni izlet: turska večer – 35 EUR',
      'Individualne troškove ulaznica u muzeje i sl.',
      'Bakšiš za vodiča',
      'PZO 16,00 KM (obavezno u grupi ili individualno)',
    ],
    installments: [
      { label: 'Prva rata i prijava', amount: '500,00 KM', deadline: 'do sredine marta' },
      { label: 'Druga rata', amount: '500,00 KM', deadline: 'do sredine aprila' },
      { label: 'Treća rata', amount: 'ostatak', deadline: 'do 10 dana prije putovanja' },
    ],
  },
};
