'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function LiveClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('bs-BA', {
        hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Europe/Sarajevo'
      }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}

const STATS = [
  { label: 'Podržanih Zemalja', value: '150+' },
  { label: 'Sjedište', value: 'Sarajevo, BiH' },
  { label: 'Lokalno Vrijeme', value: <LiveClock /> },
];

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="bg-[#080808] border-t border-white/[0.04] px-8 md:px-24 py-24">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x divide-white/[0.06]">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="sm:px-12 first:pl-0 last:pr-0"
          >
            <p className="text-[9px] tracking-[0.45em] uppercase text-white/30 mb-3">{stat.label}</p>
            <p className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
