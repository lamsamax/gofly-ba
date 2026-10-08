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

export interface Departure {
  id: string;
  label: string;
  dates: string;
  days: Day[];
  installments: { label: string; amount: string; deadline: string }[];
  formUrl: string;
  pdfUrl: string;
  pdfLabel: string;
  climate: string;
}

export interface TravelTip {
  title: string;
  icon: string;
  text: string;
}

export interface LanguagePhrase {
  phrase: string;
  translation: string;
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
  /** Kad postoji više termina polaska (različiti datumi, rate, forme za prijavu). */
  departures?: Departure[];
  travelTips?: TravelTip[];
  languagePhrases?: LanguagePhrase[];
  gallery?: { src: string; caption: string }[];
}

export const DESTINATIONS: Record<string, Destination> = {
  istanbul: {
    slug: 'istanbul',
    name: 'Istanbul',
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

  rim: {
    slug: 'rim',
    name: 'Rim',
    region: 'Italija',
    tagline: 'Avanturistički Pohod',
    heroGradient: 'linear-gradient(135deg, #1a0a00 0%, #3d1a00 50%, #1a0a00 100%)',
    price: '599,00 KM',
    priceNote: 'cijena za prvih 15 putnika · redovna cijena 699,00 KM',
    duration: '6 dana / 5 noći',
    dates: '21.11. ili 05.12.2026.',
    capacity: '15 mjesta po promo cijeni',
    difficulty: '★★★☆☆',
    difficultyFun: '★★★★★',
    difficultyActivity: '★★★★☆',
    hasKids: 'NE',
    route: 'Rim – Vatikan – Napulj',
    story: {
      quote: 'Vrijeme je za Rim! Grad historije, dobre hrane i umjetnosti koje morate doživjeti barem jednom.',
      paragraphs: [
        'Predstavljamo vam GoFly, novi brend za sve one koji vole putovati više, a trošiti manje. Fokus nam je na niskobudžetnim letovima, povoljnim destinacijama i putovanjima koja su dostupna svima. A za početak, vodimo vas u jedan od najljepših gradova Evrope.',
        'Rim je u antičko doba bio jedno od najvažnijih središta svijeta i prijestolnica moćnog Rimskog Carstva. Poznat je po bogatoj historiji, brojnim spomenicima i razvoju umjetnosti, arhitekture i prava. Najvažnija znamenitost je Koloseum, ogromni antički amfiteatar u kojem su se održavale gladijatorske borbe. Posebno su poznati i Rimski forum, Panteon i Fontana di Trevi. Stari dio grada prepun je trgova, uskih ulica, fontana i historijskih građevina, a Rim je jedinstven i po tome što se u njemu nalazi Vatikan, najmanja država na svijetu — sjedište Katoličke crkve, dom Bazilike svetog Petra, Vatikanskih muzeja i Sikstinske kapele sa čuvenim Michelangelovim freskama.',
        'Fakultativno vas vodimo i do Napulja, jednog od najstarijih gradova Italije na obali Tirenskog mora, u podnožju vulkana Vezuv — poznatog po istorijskom centru, obližnjim Pompejima i, naravno, pravoj pizzi napoletani. Prijavite se, spakujte se i krenite s nama u Rim.',
      ],
    },
    days: [
      {
        number: 1, date: '21.11.', dayName: 'SUBOTA', title: 'Sarajevo – Rim',
        activities: [
          { time: '15:00h', icon: 'bus', text: 'Okupljanje na sarajevskom aerodromu.' },
          { time: '17:10h', icon: 'plane-up', text: 'Polazak iz Sarajeva.' },
          { time: '18:35h', icon: 'plane-down', text: 'Dolazak u Rim.' },
          { icon: 'walk', text: 'Transfer do smještaja. Check in. Vrijeme za odmor.' },
          { icon: 'walk', text: 'U dogovoreno vrijeme sa vodičem upoznavanje grada. Slobodno vrijeme.' },
          { icon: 'hotel', text: 'Noćenje.' },
        ],
      },
      {
        number: 2, date: '22.11.', dayName: 'NEDJELJA', title: 'Rim',
        activities: [
          { icon: 'walk', text: 'Obilazak grada sa vodičem u dogovoreno vrijeme.' },
          { icon: 'walk', text: 'Slobodno vrijeme.' },
          { icon: 'hotel', text: 'Noćenje.' },
        ],
      },
      {
        number: 3, date: '23.11.', dayName: 'PONEDJELJAK', title: 'Rim – Vatikan – Rim',
        activities: [
          { icon: 'walk', text: 'Obilazak Vatikana uz vodiča.' },
          { icon: 'walk', text: 'Slobodno vrijeme.' },
          { icon: 'walk', text: 'Večernji izlazak u Rimu.' },
          { icon: 'hotel', text: 'Noćenje.' },
        ],
      },
      {
        number: 4, date: '24.11.', dayName: 'UTORAK', title: 'Rim – Napulj – Rim',
        activities: [
          { icon: 'bus', text: 'Fakultativni izlet u Napulj. Uz dogovor sa grupom obilazak grada.' },
          { icon: 'walk', text: 'Slobodno vrijeme.' },
          { icon: 'bus', text: 'Povratak u Rim i večernji izlazak.' },
          { icon: 'hotel', text: 'Noćenje.' },
        ],
      },
      {
        number: 5, date: '25.11.', dayName: 'SRIJEDA', title: 'Rim',
        activities: [
          { icon: 'info', text: 'Slobodan dan. Uz dogovor s grupom moguće organizovati dodatni izlet ili slično.' },
          { icon: 'hotel', text: 'Noćenje.' },
        ],
      },
      {
        number: 6, date: '26.11.', dayName: 'ČETVRTAK', title: 'Rim – Sarajevo',
        activities: [
          { icon: 'hotel', text: 'Check out iz smještaja.' },
          { icon: 'walk', text: 'Slobodno vrijeme do polaska na aerodrom.' },
          { time: '16:00h', icon: 'bus', text: 'Polazak na aerodrom prema dogovoru (cca).' },
          { time: '19:05h', icon: 'plane-up', text: 'Let iz Rima za Sarajevo.' },
          { time: '20:35h', icon: 'plane-down', text: 'Dolazak u Sarajevo.' },
        ],
      },
    ],
    notes: [
      'Plan je podložan promjeni uslijed subjektivnih i objektivnih okolnosti i agencija zadržava pravo promjene i izmjene.',
      'Plan je kreiran više za avanturiste nego za turiste.',
      'Plan nije za osobe koje su razmažene i koje nisu spremne za avanturu.',
      'Ovo putovanje je organizovano za stalne putnike na putovanjima Victorius travel agencije i napominjemo da kako organizujemo sebi i prijateljima, tako ćemo i ostalim putnicima.',
      'Za ovo putovanje važe opći uslovi putovanja agencije Victorius d.o.o.',
      'U toku cijelog putovanja angažovan je vodič koji će biti s nama tokom cijelog putovanja.',
    ],
    included: [
      'Povratna karta avio prevoza iz Sarajeva – Wizz Air',
      'Ruksak kao ručni prtljag',
      '5 noći u 1/2 ili 1/3 sobama',
      'Transfer aerodrom – smještaj – aerodrom',
      'Usluge agencije',
      'PDV',
    ],
    notIncluded: [
      'Obilazak Rima sa lokalnim vodičem',
      'Obilazak Vatikana i Vatikanskih muzeja sa lokalnim vodičem',
      'Moguće organizovati odlazak u Napulj vozom ili sl.',
      'Doplatu za kofer',
      'Turistička taxa: 4 eura po noći',
      'Individualne troškove ulaznica u muzeje i sl.',
      'Individualne troškove',
      'Bakšiš za vodiča (pratioca grupe) – 15,00–20,00 €',
      'PZO 16,00 KM (obavezno u grupi ili individualno na preporučenu osiguranu sumu od 30.000 eura)',
      'Fakultativno osiguranje u slučaju spriječenosti učešća na putovanju (80,00 KM)',
    ],
    installments: [
      { label: 'Prva rata i prijava', amount: '200,00 KM', deadline: 'do kraja oktobra' },
      { label: 'Druga rata', amount: 'ostatak', deadline: 'deset dana prije putovanja' },
    ],
    departures: [
      {
        id: 'novembar',
        label: 'Novembar 2026.',
        dates: '21.11. – 26.11.2026.',
        days: [
          {
            number: 1, date: '21.11.', dayName: 'SUBOTA', title: 'Sarajevo – Rim',
            activities: [
              { time: '15:00h', icon: 'bus', text: 'Okupljanje na sarajevskom aerodromu.' },
              { time: '17:10h', icon: 'plane-up', text: 'Polazak iz Sarajeva.' },
              { time: '18:35h', icon: 'plane-down', text: 'Dolazak u Rim.' },
              { icon: 'walk', text: 'Transfer do smještaja. Check in. Vrijeme za odmor.' },
              { icon: 'walk', text: 'U dogovoreno vrijeme sa vodičem upoznavanje grada. Slobodno vrijeme.' },
              { icon: 'hotel', text: 'Noćenje.' },
            ],
          },
          {
            number: 2, date: '22.11.', dayName: 'NEDJELJA', title: 'Rim',
            activities: [
              { icon: 'walk', text: 'Obilazak grada sa vodičem u dogovoreno vrijeme.' },
              { icon: 'walk', text: 'Slobodno vrijeme.' },
              { icon: 'hotel', text: 'Noćenje.' },
            ],
          },
          {
            number: 3, date: '23.11.', dayName: 'PONEDJELJAK', title: 'Rim – Vatikan – Rim',
            activities: [
              { icon: 'walk', text: 'Obilazak Vatikana uz vodiča.' },
              { icon: 'walk', text: 'Slobodno vrijeme.' },
              { icon: 'walk', text: 'Večernji izlazak u Rimu.' },
              { icon: 'hotel', text: 'Noćenje.' },
            ],
          },
          {
            number: 4, date: '24.11.', dayName: 'UTORAK', title: 'Rim – Napulj – Rim',
            activities: [
              { icon: 'bus', text: 'Fakultativni izlet u Napulj. Uz dogovor sa grupom obilazak grada.' },
              { icon: 'walk', text: 'Slobodno vrijeme.' },
              { icon: 'bus', text: 'Povratak u Rim i večernji izlazak.' },
              { icon: 'hotel', text: 'Noćenje.' },
            ],
          },
          {
            number: 5, date: '25.11.', dayName: 'SRIJEDA', title: 'Rim',
            activities: [
              { icon: 'info', text: 'Slobodan dan. Uz dogovor s grupom moguće organizovati dodatni izlet ili slično.' },
              { icon: 'hotel', text: 'Noćenje.' },
            ],
          },
          {
            number: 6, date: '26.11.', dayName: 'ČETVRTAK', title: 'Rim – Sarajevo',
            activities: [
              { icon: 'hotel', text: 'Check out iz smještaja.' },
              { icon: 'walk', text: 'Slobodno vrijeme do polaska na aerodrom.' },
              { time: '16:00h', icon: 'bus', text: 'Polazak na aerodrom prema dogovoru (cca).' },
              { time: '19:05h', icon: 'plane-up', text: 'Let iz Rima za Sarajevo.' },
              { time: '20:35h', icon: 'plane-down', text: 'Dolazak u Sarajevo.' },
            ],
          },
        ],
        installments: [
          { label: 'Prva rata i prijava', amount: '200,00 KM', deadline: 'do kraja oktobra' },
          { label: 'Druga rata', amount: 'ostatak', deadline: 'deset dana prije putovanja' },
        ],
        formUrl: 'https://docs.google.com/forms/d/1oAGaGuBM4eRWdM6WTVHUql_Jt46J7p3mu2nCmWwGQQs/viewform',
        pdfUrl: '/pdf/rim-novembar-2026.pdf',
        pdfLabel: 'Plan i program – Novembar (PDF)',
        climate: 'Rim u novembru ima blagu jesensku klimu. Temperature se najčešće kreću oko 10–18°C tokom dana, dok su noći hladnije. Vrijeme je promjenjivo, pa su mogući sunčani, ali i kišni dani — ponesite slojevitu odjeću, topliju jaknu, kišobran i udobnu obuću za hodanje.',
      },
      {
        id: 'decembar',
        label: 'Decembar 2026.',
        dates: '05.12. – 10.12.2026.',
        days: [
          {
            number: 1, date: '05.12.', dayName: 'SUBOTA', title: 'Sarajevo – Rim',
            activities: [
              { time: '15:00h', icon: 'bus', text: 'Okupljanje na sarajevskom aerodromu.' },
              { time: '17:10h', icon: 'plane-up', text: 'Polazak iz Sarajeva.' },
              { time: '18:35h', icon: 'plane-down', text: 'Dolazak u Rim.' },
              { icon: 'walk', text: 'Transfer do smještaja. Check in. Vrijeme za odmor.' },
              { icon: 'walk', text: 'U dogovoreno vrijeme sa vodičem upoznavanje grada. Slobodno vrijeme.' },
              { icon: 'hotel', text: 'Noćenje.' },
            ],
          },
          {
            number: 2, date: '06.12.', dayName: 'NEDJELJA', title: 'Rim',
            activities: [
              { icon: 'walk', text: 'Obilazak grada sa vodičem u dogovoreno vrijeme.' },
              { icon: 'walk', text: 'Slobodno vrijeme.' },
              { icon: 'hotel', text: 'Noćenje.' },
            ],
          },
          {
            number: 3, date: '07.12.', dayName: 'PONEDJELJAK', title: 'Rim – Vatikan – Rim',
            activities: [
              { icon: 'walk', text: 'Obilazak Vatikana uz vodiča.' },
              { icon: 'walk', text: 'Slobodno vrijeme.' },
              { icon: 'walk', text: 'Večernji izlazak u Rimu.' },
              { icon: 'hotel', text: 'Noćenje.' },
            ],
          },
          {
            number: 4, date: '08.12.', dayName: 'UTORAK', title: 'Rim – Napulj – Rim',
            activities: [
              { icon: 'bus', text: 'Fakultativni izlet u Napulj. Uz dogovor sa grupom obilazak grada.' },
              { icon: 'walk', text: 'Slobodno vrijeme.' },
              { icon: 'bus', text: 'Povratak u Rim i večernji izlazak.' },
              { icon: 'hotel', text: 'Noćenje.' },
            ],
          },
          {
            number: 5, date: '09.12.', dayName: 'SRIJEDA', title: 'Rim',
            activities: [
              { icon: 'info', text: 'Slobodan dan. Uz dogovor s grupom moguće organizovati dodatni izlet ili slično.' },
              { icon: 'hotel', text: 'Noćenje.' },
            ],
          },
          {
            number: 6, date: '10.12.', dayName: 'ČETVRTAK', title: 'Rim – Sarajevo',
            activities: [
              { icon: 'hotel', text: 'Check out iz smještaja.' },
              { icon: 'walk', text: 'Slobodno vrijeme do polaska na aerodrom.' },
              { time: '16:00h', icon: 'bus', text: 'Polazak na aerodrom prema dogovoru (cca).' },
              { time: '19:05h', icon: 'plane-up', text: 'Let iz Rima za Sarajevo.' },
              { time: '20:35h', icon: 'plane-down', text: 'Dolazak u Sarajevo.' },
            ],
          },
        ],
        installments: [
          { label: 'Prva rata i prijava', amount: '100,00 KM', deadline: 'do sredine oktobra' },
          { label: 'Druga rata', amount: '200,00 KM', deadline: 'do sredine novembra' },
          { label: 'Treća rata', amount: 'ostatak', deadline: 'deset dana prije putovanja' },
        ],
        formUrl: 'https://docs.google.com/forms/d/1AlV0QE01fcbs2cNNcfYnTq1g0FwG6q9hFS5ADLJJXi4/viewform',
        pdfUrl: '/pdf/rim-decembar-2026.pdf',
        pdfLabel: 'Plan i program – Decembar (PDF)',
        climate: 'Rim u decembru ima blagu, ali hladniju zimsku klimu. Temperature se najčešće kreću oko 6–14°C tokom dana, uz povremenu kišu. Ponesite topliju jaknu ili kaput, džemper, šal i udobnu obuću za hodanje.',
      },
    ],
    travelTips: [
      {
        title: 'Valuta i plaćanja',
        icon: '💶',
        text: 'Službena valuta je euro (€). Gotovo svuda možete plaćati karticama, naročito u restoranima, prodavnicama, hotelima i većim muzejima — obratite pažnju na moguće provizije izvan Eurozone. Napojnice nisu obavezne, ali se očekuje simbolična zahvalnica, npr. 5–10% u restoranu, zaokruživanje cijene u taksiju, ili 1–2 € za vodiča.',
      },
      {
        title: 'Hrana i zdravlje',
        icon: '🍝',
        text: 'Rimska kuhinja je jednostavna i zasnovana na svježim namirnicama: pasta carbonara, cacio e pepe, amatriciana, supplì i tanka hrskava pizza romana. Voda iz česme je sigurna za piće, a po gradu su brojne javne česme (nasoni) s besplatnom pitkom vodom. Apoteke (farmacia) prepoznajete po zelenom krstu.',
      },
      {
        title: 'Klima i odjeća',
        icon: '🧥',
        text: 'Pogledajte napomenu uz odabrani termin putovanja iznad — klima se razlikuje za novembar i decembar.',
      },
      {
        title: 'Sigurnost',
        icon: '🛡',
        text: 'Rim je uglavnom siguran grad, ali kao i u drugim velikim evropskim gradovima budite oprezni u gužvama. Najčešći problem su sitne krađe i džeparenje, posebno oko Koloseuma, Fontane di Trevi, Vatikana, stanice Termini i u javnom prevozu. Nosite torbu ispred sebe u gužvi, a pasoš i vrijednosti čuvajte na sigurnom (sef u hotelu).',
      },
      {
        title: 'Internet',
        icon: '📶',
        text: 'Savjetuje se uzimanje lokalne SIM kartice ili e-sima kako biste bili uvijek dostupni. Tip utičnica je isti kao kod nas, pa punjače ne morate mijenjati.',
      },
      {
        title: 'Prevoz',
        icon: '🚇',
        text: 'Gradski prevoz (autobusi, tramvaji, metro) dobro je razvijen i povoljan. Metro je najbrži za veće udaljenosti, a historijski centar — Koloseum, Panteon, Fontana di Trevi, Piazza Navona — najbolje je obilaziti pješice jer su znamenitosti relativno blizu jedna drugoj.',
      },
      {
        title: 'Suveniri i zabava',
        icon: '🎁',
        text: 'Miniature Koloseuma, proizvodi s motivima Vatikana, ručno izrađena keramika, kožni proizvodi, maslinovo ulje i tjestenina popularni su suveniri. Za zabavu izdvajaju se večernje šetnje historijskim centrom i noćni obilazak osvijetljenih znamenitosti.',
      },
    ],
    gallery: [
      { src: '/images/rim-gallery/kolosej.jpg', caption: 'Koloseum' },
      { src: '/images/rim-gallery/fontana-di-trevi.jpg', caption: 'Fontana di Trevi' },
      { src: '/images/rim-gallery/panteon.jpg', caption: 'Panteon' },
      { src: '/images/rim-gallery/vatikan.jpg', caption: 'Vatikan' },
    ],
    languagePhrases: [
      { phrase: 'Zdravo', translation: 'Ciao' },
      { phrase: 'Hvala', translation: 'Grazie' },
      { phrase: 'Da / Ne', translation: 'Sì / No' },
      { phrase: 'Molim', translation: 'Per favore' },
      { phrase: 'Izvinite', translation: 'Scusi' },
      { phrase: 'Dobro jutro', translation: 'Buongiorno' },
      { phrase: 'Dobro veče', translation: 'Buonasera' },
      { phrase: 'Doviđenja', translation: 'Arrivederci' },
      { phrase: 'Kako si?', translation: 'Come stai?' },
      { phrase: 'Gdje je…?', translation: 'Dov’è…?' },
      { phrase: 'Koliko košta?', translation: 'Quanto costa?' },
      { phrase: 'Prijatno', translation: 'Buon appetito' },
    ],
  },
};
