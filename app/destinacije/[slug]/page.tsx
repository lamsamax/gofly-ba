'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Destination } from '@/lib/destinations';
import { supabase } from '@/lib/supabase';
import { GoFlyWordmark } from '@/components/ui/Logo';
import Link from 'next/link';

function ActivityIcon({ icon }: { icon: string }) {
  const icons: Record<string, string> = {
    'plane-up': '✈', 'plane-down': '🛬', 'plane': '✈',
    'bus': '🚌', 'hotel': '🏨', 'food': '🍽', 'walk': '🚶', 'info': 'ℹ',
  };
  return (
    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
      style={{ background: 'rgba(200,169,110,0.08)', border: '1px solid rgba(200,169,110,0.15)', color: '#c8a96e' }}>
      {icons[icon] || '•'}
    </div>
  );
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const [dest, setDest] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeDay, setActiveDay] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    supabase
      .from('destinations')
      .select('*')
      .eq('slug', params.slug)
      .single()
      .then(({ data, error }) => {
        if (error || !data) { setLoading(false); return; }
        setDest({
          slug: data.slug,
          name: data.name,
          region: data.region,
          tagline: data.tagline,
          heroGradient: data.hero_gradient,
          price: data.price,
          priceNote: data.price_note,
          duration: data.duration,
          dates: data.dates,
          capacity: data.capacity,
          difficulty: data.difficulty,
          difficultyFun: data.difficulty_fun,
          difficultyActivity: data.difficulty_activity,
          hasKids: data.has_kids,
          route: data.route,
          story: data.story,
          days: data.days,
          notes: data.notes,
          included: data.included,
          notIncluded: data.not_included,
          installments: data.installments,
        });
        setLoading(false);
      });
  }, [params.slug]);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormOpen(false); }, 3000);
  };

  if (loading) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div style={{ width: 40, height: 40, border: '2px solid rgba(200,169,110,0.2)', borderTop: '2px solid #c8a96e', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
  if (!dest) return notFound();

  return (
    <div className="min-h-screen bg-[#050505] text-white font-[family-name:var(--font-inter)]">

      {/* Navbar */}
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
        <div className="flex items-center justify-between px-5 py-3 rounded-2xl"
          style={{ background: 'rgba(5,5,5,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(200,169,110,0.12)' }}>
          <Link href="/"><GoFlyWordmark /></Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/#about" className="text-[10px] tracking-[0.35em] uppercase text-white/40 hover:text-white/80 transition-colors duration-300">O Nama</Link>
            <Link href="/destinacije" className="text-[10px] tracking-[0.35em] uppercase text-[#c8a96e]">Destinacije</Link>
            <Link href="/#benefits" className="text-[10px] tracking-[0.35em] uppercase text-white/40 hover:text-white/80 transition-colors duration-300">Iskustvo</Link>
          </div>
          <button onClick={() => setFormOpen(true)}
            className="px-5 py-2 rounded-full text-[10px] tracking-[0.3em] uppercase text-[#050505] font-medium transition-all duration-300 hover:opacity-90"
            style={{ background: '#c8a96e' }}>
            Prijavi Se →
          </button>
        </div>
      </nav>

      {/* Hero — all dark */}
      <section className="relative min-h-screen flex items-end pt-24 pb-16 px-8 md:px-16 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0d0600 0%, #1a0d00 40%, #050505 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(ellipse at 15% 60%, rgba(200,169,110,0.06) 0%, transparent 55%), radial-gradient(ellipse at 85% 25%, rgba(200,169,110,0.03) 0%, transparent 45%)',
        }} />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            {/* Transport icons */}
            <div className="flex gap-2 mb-8">
              {['✈', '🚌', '🏨'].map((icon, i) => (
                <div key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-base"
                  style={{ background: 'rgba(200,169,110,0.08)', border: '1px solid rgba(200,169,110,0.2)' }}>
                  {icon}
                </div>
              ))}
            </div>

            <p className="text-[10px] tracking-[0.5em] uppercase text-[#c8a96e] mb-3">{dest.region}</p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light leading-none text-white mb-3">
              {dest.name}
            </h1>
            <h2 className="text-lg font-light uppercase tracking-[0.25em] text-white/50 mb-10">
              {dest.tagline}
            </h2>

            {/* Route */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-full mb-10 w-fit"
              style={{ background: 'rgba(200,169,110,0.06)', border: '1px solid rgba(200,169,110,0.15)' }}>
              <span className="text-[#c8a96e] text-sm">📍</span>
              <span className="text-xs text-white/50 tracking-wide">{dest.route}</span>
            </div>

            {/* Price + CTA */}
            <div className="flex items-center gap-6 flex-wrap">
              <div>
                <p className="text-3xl font-light text-white">{dest.price}</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#c8a96e] mt-1">{dest.priceNote}</p>
              </div>
              <button onClick={() => setFormOpen(true)}
                className="px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase text-[#050505] transition-all duration-300 hover:opacity-90"
                style={{ background: '#c8a96e' }}>
                Prijavi Se →
              </button>
            </div>
          </motion.div>

          {/* Right: stats in dark cards */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {[
                { label: 'Popunjenost', value: dest.capacity },
                { label: 'Polazak/Povratak', value: dest.dates },
                { label: 'Trajanje putovanja', value: dest.duration },
                { label: 'Djeca', value: dest.hasKids },
              ].map(({ label, value }) => (
                <div key={label} className="p-4 rounded-2xl"
                  style={{ background: 'rgba(200,169,110,0.04)', border: '1px solid rgba(200,169,110,0.08)' }}>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-white/30 mb-2">{label}</p>
                  <p className="text-base font-light text-white">{value}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Zahtjevnost', value: dest.difficulty },
                { label: 'Zabava', value: dest.difficultyFun },
                { label: 'Aktivnost', value: dest.difficultyActivity },
              ].map(({ label, value }) => (
                <div key={label} className="p-3 rounded-xl text-center"
                  style={{ background: 'rgba(200,169,110,0.04)', border: '1px solid rgba(200,169,110,0.08)' }}>
                  <p className="text-[9px] uppercase text-[#c8a96e]/60 mb-1">{label}</p>
                  <p className="text-xs text-[#c8a96e]">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story section — dark */}
      <section className="bg-[#080808] border-t border-white/[0.04] px-8 md:px-16 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="h-px w-12 bg-[#c8a96e] mb-8" />
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light italic leading-tight text-white mb-8">
              {dest.story.quote}
            </h2>
            {dest.story.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-loose text-white/45 mb-5">{p}</p>
            ))}
          </div>

          {/* Dark placeholder card */}
          <div className="rounded-3xl overflow-hidden aspect-[4/3] flex flex-col items-center justify-center"
            style={{ background: 'linear-gradient(160deg, #1a0d00 0%, #0d0600 100%)', border: '1px solid rgba(200,169,110,0.08)' }}>
            <div className="text-6xl mb-4 opacity-60">🏜️</div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#c8a96e]/60">{dest.name}</p>
          </div>
        </div>
      </section>

      {/* Plan i program — dark */}
      <section className="bg-[#050505] border-t border-white/[0.04] px-8 md:px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#c8a96e]/60 mb-2">Plan i program</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-white mb-10">
            Program putovanja
          </h2>

          {/* Day tabs */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {dest.days.map((day, i) => (
              <button key={i} onClick={() => setActiveDay(i)}
                className="px-5 py-2.5 text-[10px] font-light tracking-widest uppercase transition-all duration-300 rounded-xl border"
                style={{
                  background: activeDay === i ? 'rgba(200,169,110,0.15)' : 'transparent',
                  borderColor: activeDay === i ? 'rgba(200,169,110,0.4)' : 'rgba(255,255,255,0.08)',
                  color: activeDay === i ? '#c8a96e' : 'rgba(255,255,255,0.3)',
                }}>
                Dan {day.number}
              </button>
            ))}
          </div>

          {/* Active day */}
          <motion.div key={activeDay} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl p-8"
            style={{ background: 'rgba(200,169,110,0.03)', border: '1px solid rgba(200,169,110,0.08)' }}>
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/[0.06]">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(200,169,110,0.08)', border: '1px solid rgba(200,169,110,0.15)' }}>
                <span className="text-[#c8a96e] text-base">📅</span>
              </div>
              <div>
                <p className="text-xl font-light text-white">{dest.days[activeDay].date}</p>
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#c8a96e]/60">{dest.days[activeDay].dayName}</p>
              </div>
              <h3 className="ml-auto font-[family-name:var(--font-cormorant)] text-xl font-light text-white/70">
                {dest.days[activeDay].title}
              </h3>
            </div>

            <div className="flex flex-col gap-0">
              {dest.days[activeDay].activities.map((activity, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-white/[0.04] last:border-0">
                  <ActivityIcon icon={activity.icon} />
                  <div className="pt-1">
                    {activity.time && <p className="text-sm font-medium text-white mb-0.5">{activity.time}</p>}
                    <p className="text-sm text-white/50">{activity.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bitne napomene — dark */}
      <section className="bg-[#080808] border-t border-white/[0.04] px-8 md:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-[#c8a96e] text-sm font-bold"
              style={{ background: 'rgba(200,169,110,0.1)', border: '1px solid rgba(200,169,110,0.2)' }}>
              i
            </div>
            <h2 className="text-[10px] tracking-[0.5em] uppercase text-white/60">Bitne Napomene</h2>
          </div>
          <ul className="flex flex-col gap-4">
            {dest.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/45 leading-relaxed">
                <span className="text-[#c8a96e]/50 mt-0.5 flex-shrink-0">—</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Promo cijena — dark */}
      <section className="bg-[#050505] border-t border-white/[0.04] px-8 md:px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#c8a96e]/60 mb-4">Cijena</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-white mb-10">
            Promo Cijena
          </h2>

          {/* Price block */}
          <div className="p-8 rounded-2xl mb-10"
            style={{ background: 'rgba(200,169,110,0.04)', border: '1px solid rgba(200,169,110,0.1)' }}>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-white">
                {dest.price}
              </span>
              <span className="text-white/40 text-sm">+ PZO</span>
            </div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#c8a96e] mb-8">(promo cijena)</p>

            <div className="border-t border-white/[0.06] pt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#c8a96e] text-lg">💳</span>
                <p className="text-sm font-light text-white/70">Uplata moguća na rate</p>
              </div>
              {dest.installments.map((inst, i) => (
                <p key={i} className="text-sm text-white/40 mb-2 ml-8">
                  — {inst.label}: <span className="text-white/70">{inst.amount}</span>{' '}
                  <span className="text-white/30">({inst.deadline})</span>
                </p>
              ))}
            </div>
          </div>

          {/* Included / Not included */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl"
              style={{ background: 'rgba(200,169,110,0.03)', border: '1px solid rgba(200,169,110,0.08)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[#050505] text-xs font-bold"
                  style={{ background: '#c8a96e' }}>✓</div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-white">
                  Cijena uključuje
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {dest.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/45 leading-relaxed">
                    <span className="text-[#c8a96e]/50 mt-0.5 flex-shrink-0">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white/60 text-xs border border-white/20">✗</div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-white">
                  Cijena ne uključuje
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {dest.notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/35 leading-relaxed">
                    <span className="text-white/20 mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <button onClick={() => setFormOpen(true)}
              className="px-12 py-5 rounded-full text-sm font-medium tracking-[0.3em] uppercase text-[#050505] transition-all duration-300 hover:opacity-90"
              style={{ background: '#c8a96e' }}>
              Prijavi Se Na Putovanje →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] bg-[#050505] px-8 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <GoFlyWordmark />
          <p className="text-[9px] tracking-[0.3em] uppercase text-white/20">
            © {new Date().getFullYear()} GoFly. Sva prava zadržana.
          </p>
        </div>
      </footer>

      {/* Contact form modal — dark */}
      {formOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}
          onClick={() => setFormOpen(false)}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            className="relative w-full max-w-md mx-4 p-10 rounded-2xl"
            style={{ background: '#0a0a0a', border: '1px solid rgba(200,169,110,0.15)' }}
            onClick={e => e.stopPropagation()}>
            <button onClick={() => setFormOpen(false)}
              className="absolute top-5 right-5 text-white/25 hover:text-white/70 text-xl transition-colors">×</button>
            {!submitted ? (
              <>
                <p className="text-[10px] tracking-[0.5em] uppercase text-[#c8a96e] mb-2">Prijava</p>
                <h3 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-white mb-1">{dest.name}</h3>
                <p className="text-sm text-[#c8a96e]/70 mb-8">{dest.price}</p>
                <div className="flex flex-col gap-3">
                  {['Ime i prezime', 'Email adresa', 'Broj telefona', 'Broj putnika'].map(field => (
                    <input key={field} type="text" placeholder={field}
                      className="w-full bg-white/[0.03] border border-white/[0.07] px-4 py-3 text-sm text-white placeholder-white/20 rounded-xl outline-none focus:border-[#c8a96e]/40 transition-colors duration-300" />
                  ))}
                  <button onClick={handleSubmit}
                    className="mt-2 w-full py-4 text-[10px] tracking-[0.45em] uppercase text-[#050505] transition-all duration-300 rounded-xl font-medium hover:opacity-90"
                    style={{ background: '#c8a96e' }}>
                    Pošaljite Prijavu
                  </button>
                </div>
                <p className="mt-4 text-[9px] text-white/20 text-center">
                  Slanjem pristajete na našu Politiku Privatnosti
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-[#c8a96e] text-4xl mb-4">✓</p>
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-white mb-3">
                  Prijava Primljena
                </h3>
                <p className="text-sm text-white/40">Hvala! Naš tim će vas kontaktirati uskoro.</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
