'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { DESTINATION_CARDS } from '@/lib/destination-cards';

type DestCard = { slug: string; name: string; region: string; transport: string[]; image: string; };

const TRANSPORT_LABELS: Record<string, string> = {
  '✈': 'Avion',
  '🚌': 'Autobus',
  '🏨': 'Hotel',
};

function DestCard({ dest, index }: { dest: DestCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ height: '480px' }}
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={dest.image
          ? { backgroundImage: `url(${dest.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
          : { background: 'linear-gradient(160deg, #1a0800 0%, #3d1500 60%, #0d0400 100%)' }
        }
      />

      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c8a96e] opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-[9px] tracking-[0.45em] uppercase text-white/40 mb-1.5">{dest.region}</p>
        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-white mb-4 leading-tight">
          {dest.name}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          {dest.transport.map((icon, i) => (
            <div key={i} title={TRANSPORT_LABELS[icon]}
              className="w-7 h-7 rounded-full flex items-center justify-center text-sm"
              style={{ background: 'rgba(200,169,110,0.12)', border: '1px solid rgba(200,169,110,0.2)' }}>
              {icon}
            </div>
          ))}
        </div>

        <Link href={`/destinacije/${dest.slug}`}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[9px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[rgba(200,169,110,0.2)]"
          style={{ background: 'rgba(200,169,110,0.1)', border: '1px solid rgba(200,169,110,0.25)', color: '#c8a96e' }}>
          Saznaj više →
        </Link>
      </div>
    </motion.div>
  );
}

const FEATURED_DESTINATIONS = DESTINATION_CARDS.slice(0, 4);

export function Fleet() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-5%' });

  return (
    <section id="fleet" ref={ref} className="bg-[#050505] px-8 md:px-24 py-40">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="mb-4 text-[10px] tracking-[0.55em] uppercase text-[#c8a96e]">
          Odabrana Putovanja
        </p>
        <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-white">
          Doživite iskustvo
        </h2>
      </motion.div>

      {inView && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURED_DESTINATIONS.map((dest, i) => (
            <DestCard key={dest.slug} dest={dest} index={i} />
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <Link href="/destinacije"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-[10px] tracking-[0.4em] uppercase transition-all duration-300 hover:bg-[rgba(200,169,110,0.08)]"
          style={{ border: '1px solid rgba(200,169,110,0.3)', color: '#c8a96e' }}>
          Pogledaj Sve Destinacije →
        </Link>
      </motion.div>
    </section>
  );
}
