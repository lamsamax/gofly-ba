'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PILLARS = [
  {
    title: 'Stručno Kreirano',
    body: 'Svako GoFly putovanje dizajniraju ljudi koji su to sami doživjeli. Nema generičkih itinerera — samo rute koje otkrivaju ono što svaku destinaciju čini posebnom.',
  },
  {
    title: 'Vaša Sloboda',
    body: 'Cijenimo vaše vrijeme i znatiželju iznad svega. GoFly vam daje slobodu da istražujete, doživljavate i povezujete se gdje god vas avantura odvede — bez kompromisa.',
  },
  {
    title: 'Preciznost i Izvrsnost',
    body: 'Svaki detalj vašeg putovanja — od planiranja rute do iskustava na terenu — odražava naše posvećenost savršenstvu. Naš tim ispunjava najviše globalne standarde.',
  },
  {
    title: 'Globalni Doseg, Lični Pristup',
    body: 'Sa destinacijama u 150+ zemalja, GoFly vam donosi svijet bliže. Naši stručnjaci upravljaju svakim aspektom vašeg putovanja, garantirajući glatko i izvanredno iskustvo.',
  },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section id="about" ref={ref} className="bg-[#050505] px-8 md:px-24 py-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <p className="mb-4 text-[10px] tracking-[0.55em] uppercase text-[#c8a96e]">GoFly</p>
        <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-white">
          Globalna Avanturistička Putovanja
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.4 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xs tracking-[0.3em] uppercase text-white/40 mb-16"
      >
        Direktan Pristup Izvanrednim Putovanjima
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
        {PILLARS.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: i * 0.12, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="h-px w-10 bg-[#c8a96e] mb-6" />
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-white mb-4">
              {pillar.title}
            </h3>
            <p className="text-sm leading-loose text-white/42">{pillar.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
