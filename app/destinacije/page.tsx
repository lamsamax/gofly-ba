'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GoFlyWordmark } from '@/components/ui/Logo';

type DestCard = { slug: string; name: string; region: string; emoji: string; transport: string[]; image: string; };

const TRANSPORT_LABELS: Record<string, string> = { '✈': 'Avion', '🚌': 'Autobus', '🏨': 'Hotel' };

function DestCard({ dest, index }: { dest: DestCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ height: '200px' }}
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={dest.image
          ? { backgroundImage: `url(${dest.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
          : { background: 'linear-gradient(135deg, #1a0a00 0%, #3d1a00 100%)' }
        } />
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c8a96e] opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
      <div className="absolute top-4 right-4 text-3xl opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500">
        {dest.emoji}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-[9px] tracking-[0.4em] uppercase text-white/35 mb-1">{dest.region}</p>
        <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-light text-white mb-2 leading-tight">
          {dest.name}
        </h3>
        <div className="flex items-center gap-1.5 mb-3">
          {dest.transport.map((icon, i) => (
            <div key={i} title={TRANSPORT_LABELS[icon]}
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
              style={{ background: 'rgba(200,169,110,0.08)', border: '1px solid rgba(200,169,110,0.15)' }}>
              {icon}
            </div>
          ))}
        </div>
        <Link href={`/destinacije/${dest.slug}`}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] tracking-[0.25em] uppercase transition-all duration-300"
          style={{ background: 'rgba(200,169,110,0.08)', border: '1px solid rgba(200,169,110,0.2)', color: '#c8a96e' }}>
          Saznaj više →
        </Link>
      </div>
    </motion.div>
  );
}

export default function DestinacijePage() {
  const [search, setSearch] = useState('');
  const [destinations, setDestinations] = useState<DestCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('destinations')
      .select('slug, name, region, emoji, transport, image')
      .order('name')
      .then(({ data, error }) => {
        if (error) console.error('Supabase error:', error);
        if (data) setDestinations(data as DestCard[]);
        setLoading(false);
      });
  }, []);

  const filtered = destinations.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.region.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* Navbar */}
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">
        <div className="flex items-center justify-between px-5 py-3 rounded-2xl"
          style={{ background: 'rgba(5,5,5,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(200,169,110,0.12)' }}>
          <Link href="/"><GoFlyWordmark /></Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-[10px] tracking-[0.35em] uppercase text-white/40 hover:text-white/80 transition-colors duration-300">O Nama</Link>
            <Link href="/destinacije" className="text-[10px] tracking-[0.35em] uppercase text-[#c8a96e]">Destinacije</Link>
            <Link href="/#benefits" className="text-[10px] tracking-[0.35em] uppercase text-white/40 hover:text-white/80 transition-colors duration-300">Iskustvo</Link>
            <Link href="/#global" className="text-[10px] tracking-[0.35em] uppercase text-white/40 hover:text-white/80 transition-colors duration-300">Globalno</Link>
          </div>
          <a href="tel:+38761000000" className="hidden md:block text-[10px] tracking-[0.2em] text-white/40 hover:text-white/80 transition-colors duration-300">
            +387 61 000 000
          </a>
        </div>
      </nav>

      {/* Hero header */}
      <section className="relative pt-40 pb-20 px-8 md:px-16 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0d0600 0%, #050505 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(ellipse at 15% 60%, rgba(200,169,110,0.05) 0%, transparent 55%)`,
        }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} className="relative max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.6em] uppercase text-[#c8a96e] mb-4">GoFly</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light text-white mb-4 leading-none">
            Putovanja
          </h1>
          <svg width="220" height="16" viewBox="0 0 220 16" className="mb-6" fill="none">
            <path d="M4 12 Q25 4 50 9 Q75 14 100 7 Q125 0 150 9 Q175 16 200 7 Q210 3 216 8"
              stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
          </svg>
          <p className="text-white/35 text-sm max-w-lg leading-relaxed">
            Odaberite svoju sljedeću avanturu. Svako putovanje je pažljivo osmišljeno da vam pruži nezaboravno iskustvo.
          </p>
          <div className="mt-10 max-w-md">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 text-sm">🔍</span>
              <input type="text" placeholder="Pretražite destinacije..."
                value={search} onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full text-sm text-white placeholder-white/20 outline-none"
                style={{ background: 'rgba(200,169,110,0.04)', border: '1px solid rgba(200,169,110,0.12)' }} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="px-8 md:px-16 pb-24 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <p className="text-[9px] tracking-[0.3em] uppercase text-white/20">
            {filtered.length} destinacija
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((dest, i) => <DestCard key={dest.slug} dest={dest} index={i} />)}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-4xl mb-4 opacity-30">🔍</p>
            <p className="text-white/30 text-sm">Nema destinacija za &ldquo;{search}&rdquo;</p>
          </div>
        )}
      </section>

      <footer className="border-t border-white/[0.04] bg-[#050505] px-8 md:px-16 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <GoFlyWordmark />
          <p className="text-[9px] tracking-[0.3em] uppercase text-white/15">
            © {new Date().getFullYear()} GoFly. Sva prava zadržana.
          </p>
        </div>
      </footer>
    </div>
  );
}