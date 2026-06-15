'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BENEFITS = [
  {
    title: 'Najbolje avio ponude',
    body: 'Pronalazimo povoljne letove i pažljivo birane aranžmane kako biste mogli putovati češće i otkrivati više – bez nepotrebnih troškova.',
    icon: '◈',
    color: '#7EC8E3',
  },
  {
    title: 'Dostupni 24/7',
    body: 'Od prve ideje do povratka kući, naš tim je tu za sva pitanja i pomoć kako bi vaše putovanje proteklo bez stresa.',
    icon: '◎',
    color: '#c8a96e',
  },
  {
    title: 'Pažljivo odabrane destinacije',
    body: 'Od romantičnih vikenda u Parizu do mediteranskih bijegova i evropskih metropola – biramo destinacije koje vrijedi doživjeti.',
    icon: '◇',
    color: '#a8d8a8',
  },
  {
    title: 'Putovanje po vašoj mjeri',
    body: 'Bilo da tražite vikend odmor, porodično putovanje ili spontanu avanturu, pomoći ćemo vam pronaći aranžman koji odgovara vašim željama i budžetu.',
    icon: '◉',
    color: '#d4a5a5',
  },
];

export function Benefits() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section id="benefits" ref={ref} className="bg-[#050505] px-8 md:px-24 py-40 border-t border-white/[0.04]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <p className="mb-4 text-[10px] tracking-[0.55em] uppercase text-[#c8a96e]">Zašto GoFly</p>
        <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-white">
          Bolji Način Putovanja
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.04]">
        {BENEFITS.map((benefit, i) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="group bg-[#050505] p-12 hover:bg-white/[0.02] transition-colors duration-500"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-8 text-xl"
              style={{ background: `${benefit.color}15`, color: benefit.color }}>
              {benefit.icon}
            </div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-white mb-4">
              {benefit.title}
            </h3>
            <div className="h-px w-10 mb-6" style={{ background: benefit.color }} />
            <p className="text-sm leading-loose text-white/42">{benefit.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
