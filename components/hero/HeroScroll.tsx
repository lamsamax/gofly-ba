'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HeroScroll() {
  const heroRef = useRef<HTMLElement>(null);
  const windowContainerRef = useRef<HTMLDivElement>(null);
  const skyContainerRef = useRef<HTMLDivElement>(null);
  const heroCopyRef = useRef<HTMLDivElement>(null);
  const heroHeaderRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    const windowContainer = windowContainerRef.current;
    const skyContainer = skyContainerRef.current;
    const heroCopy = heroCopyRef.current;
    const heroHeader = heroHeaderRef.current;
    const fade = fadeRef.current;
    if (!hero || !windowContainer || !skyContainer || !heroCopy || !heroHeader) return;

    gsap.set(heroCopy, { y: 30, opacity: 0 });
    if (fade) gsap.set(fade, { opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: `+=${window.innerHeight * 3}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1.2,
      onUpdate: (self) => {
        const progress = self.progress;

        // 1. PROZOR
        let windowScale = 1 + progress * 1.8;
        let windowOpacity = progress < 0.4
          ? 1
          : progress >= 0.8
            ? 0
            : 1 - (progress - 0.4) / 0.4;

        gsap.set(windowContainer, {
          scale: windowScale,
          opacity: windowOpacity,
          display: windowOpacity === 0 ? 'none' : 'block'
        });

        // 2. OBLACI
        let skyScale = 1 + progress * 0.5;
        let skyY = -progress * 150;
        gsap.set(skyContainer, { scale: skyScale, y: skyY });

        // 3. HEADER
        let headerOpacity = progress <= 0.25 ? 1 - (progress / 0.25) : 0;
        gsap.set(heroHeader, { opacity: headerOpacity });

        // 4. KRAJNJI TEKST
        if (progress > 0.7) {
          let textProgress = (progress - 0.7) / 0.3;
          gsap.set(heroCopy, {
            y: 30 * (1 - textProgress),
            opacity: textProgress,
            pointerEvents: 'auto'
          });
        } else {
          gsap.set(heroCopy, { y: 30, opacity: 0, pointerEvents: 'none' });
        }

        // 5. FADE prema TextReveal — samo na samom kraju
        if (fade) {
          const fadeOpacity = progress < 0.85 ? 0 : (progress - 0.85) / 0.15;
          gsap.set(fade, { opacity: fadeOpacity });
        }
      },
    });

    return () => { trigger.kill(); };
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="hero"
        style={{
          color: '#f5f5f0',
          position: 'relative',
          width: '100%',
          height: '100svh',
          overflow: 'hidden',
          backgroundColor: '#1a3c5a'
        }}
      >
        {/* SLOJ 1: Oblaci */}
        <div
          ref={skyContainerRef}
          style={{
            position: 'absolute', top: 0, left: 0,
            width: '100%', height: '100svh',
            willChange: 'transform', zIndex: 1,
          }}
        >
          <img src="/clean_clouds.jpeg" alt="Nebo i oblaci"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* SLOJ 2: Prozor */}
        <div
          ref={windowContainerRef}
          style={{
            position: 'absolute', top: 0, left: 0,
            width: '100%', height: '100svh',
            willChange: 'transform, opacity', zIndex: 2, pointerEvents: 'none'
          }}
        >
          <img src="/org1.jpeg" alt="Prozor aviona"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* SLOJ 3: Tekst i UI */}
        <div
          ref={heroHeaderRef}
          style={{
            position: 'absolute', top: 0, left: 0,
            width: '100%', height: '100svh',
            padding: '2.5rem 3.5rem',
            willChange: 'opacity', zIndex: 10,
            fontFamily: 'sans-serif', pointerEvents: 'none'
          }}
        >
          <div style={{ position: 'absolute', top: '22%', left: '3.5rem', maxWidth: '35%' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 6rem)', fontWeight: 300, letterSpacing: '0.02em', lineHeight: 0.9, color: '#ffffff', margin: 0, fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic' }}>
              Velike<br />avanture
            </h1>
          </div>

          <div style={{ position: 'absolute', bottom: '26%', right: '3.5rem', textAlign: 'right', maxWidth: '40%' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 6rem)', fontWeight: 300, letterSpacing: '0.02em', lineHeight: 0.9, color: '#ffffff', margin: 0, fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic' }}>
              Manje<br />cijene
            </h1>
          </div>

          <div style={{ position: 'absolute', bottom: '3.5rem', left: '3.5rem', maxWidth: '24rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.2, margin: '0 0 0.5rem 0' }}>Svako putovanje počinje pravim izborom.</h4>
            </div>
            <hr style={{ border: 'none', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: 0 }} />
            <p style={{ fontSize: '0.72rem', lineHeight: 1.5, opacity: 0.7, margin: 0 }}>
            Vjerujemo da nezaboravna putovanja ne moraju imati visoku cijenu. Zato pronalazimo najbolje ponude za vaše sljedeće odredište.</p>
          </div>

          {/* Skrol button */}
          <button
            onClick={() => window.scrollBy({ top: window.innerHeight * 3, behavior: 'smooth' })}
            style={{
              position: 'absolute', bottom: '4.5rem', right: '3.5rem', width: '30%',
              display: 'flex', flexDirection: 'column', gap: '0.8rem',
              background: 'none', border: 'none', color: 'white',
              cursor: 'pointer', padding: 0, pointerEvents: 'auto',
              textAlign: 'left', transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <hr style={{ border: 'none', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: 0 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.65rem', letterSpacing: '0.15em', fontWeight: 600, opacity: 0.8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <svg className="animate-scroll-hint" width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                  <path d="M6 8l6 6 6-6" />
                  <path d="M6 14l6 6 6-6" />
                </svg>
                <span>SKROLUJTE DOLJE</span>
                <span>ZA POČETAK PUTOVANJA</span>
              </div>
            </div>
          </button>

          {/* CTA dugmad */}
          <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '0.6rem', zIndex: 50, pointerEvents: 'auto' }}>
            <button
              onClick={() => setFormOpen(true)}
              style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none', padding: '0.75rem 2rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', textTransform: 'uppercase', letterSpacing: '0.07em', transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f8f8f5'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)'; }}
            >
              Počnite Istraživati
            </button>
            <button
              onClick={() => setFormOpen(true)}
              style={{ backgroundColor: '#ffffff', width: '2.4rem', height: '2.4rem', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#000000', fontSize: '0.8rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px) rotate(15deg)'; e.currentTarget.style.backgroundColor = '#f8f8f5'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) rotate(0deg)'; e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)'; }}
            >
              <span style={{ display: 'inline-block', transform: 'rotate(-45deg)' }}>✈</span>
            </button>
          </div>
        </div>

        {/* SLOJ 4: Krajnji tekst */}
        <div
          ref={heroCopyRef}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100svh', display: 'flex', justifyContent: 'center', alignItems: 'center', willChange: 'transform, opacity', zIndex: 20, padding: '0 10%', pointerEvents: 'none' }}
        >
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2.5rem, 5vw, 5.5rem)', fontWeight: 300, lineHeight: 1.1, color: '#ffffff', textAlign: 'center', maxWidth: '1100px' }}>
            Pametna putovanja počinju ovdje.
          </h1>
        </div>

        {/* FADE prema TextReveal — GSAP kontrolisan */}
        <div
          ref={fadeRef}
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '200px',
            background: 'linear-gradient(to bottom, transparent 0%, #EBD5D3 100%)',
            zIndex: 25,
            pointerEvents: 'none',
            opacity: 0,
          }}
        />
      </section>

      {/* Kontakt forma */}
      {formOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(10px)' }} onClick={() => setFormOpen(false)}>
          <div className="relative w-full max-w-md mx-4 p-10 rounded-2xl" style={{ background: '#101010', border: '1px solid rgba(255,255,255,0.08)' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setFormOpen(false)} className="absolute top-5 right-5 text-white/30 hover:text-white text-xl">×</button>
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#c8a96e] mb-2">Kontakt</p>
            <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-white mb-8">Planirajte Putovanje</h3>
            <div className="flex flex-col gap-4">
              {['Ime i prezime', 'Email adresa', 'Telefon', 'Željena destinacija'].map(field => (
                <input key={field} type="text" placeholder={field} className="w-full bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/25 rounded-xl outline-none focus:border-[#c8a96e]/60 transition-colors duration-300" />
              ))}
              <button className="mt-2 w-full bg-[#c8a96e] text-[#050505] py-4 text-[10px] tracking-[0.45em] uppercase hover:bg-[#e8c98e] transition-colors duration-300 rounded-xl">
                Pošaljite Upit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}