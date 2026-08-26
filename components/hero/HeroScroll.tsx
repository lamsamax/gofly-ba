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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const windowContainer = windowContainerRef.current;
    const skyContainer = skyContainerRef.current;
    const heroCopy = heroCopyRef.current;
    const heroHeader = heroHeaderRef.current;
    if (!hero || !windowContainer || !skyContainer || !heroCopy || !heroHeader) return;

    gsap.set(heroCopy, { y: 30, opacity: 0 });

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
          {/* FADE prema Destinacijama — dio istog sloja kao nebo, pa se skalira/pomjera zajedno s njim */}
          <div
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: '55%',
              background: 'linear-gradient(to bottom, transparent 0%, rgba(5,5,5,0.12) 25%, rgba(5,5,5,0.4) 55%, rgba(5,5,5,0.8) 80%, #050505 100%)',
              pointerEvents: 'none',
            }}
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
            padding: isMobile ? '1.25rem' : '2.5rem 3.5rem',
            willChange: 'opacity', zIndex: 10,
            fontFamily: 'sans-serif', pointerEvents: 'none'
          }}
        >
          {!isMobile && (
            <div style={{ position: 'absolute', top: '22%', left: '3.5rem', maxWidth: '35%' }}>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 6rem)', fontWeight: 700, letterSpacing: '0.02em', lineHeight: 0.9, color: '#ffffff', margin: 0, fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic' }}>
                Velike<br />avanture
              </h1>
            </div>
          )}

          {!isMobile && (
            <div style={{ position: 'absolute', bottom: '26%', right: '3.5rem', textAlign: 'right', maxWidth: '40%' }}>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 6rem)', fontWeight: 700, letterSpacing: '0.02em', lineHeight: 0.9, color: '#ffffff', margin: 0, fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic' }}>
                Manje<br />cijene
              </h1>
            </div>
          )}

          {/* Bottom-left text — desktop only */}
          {!isMobile && (
            <div style={{ position: 'absolute', bottom: '3.5rem', left: '3.5rem', maxWidth: '24rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.2, margin: '0 0 0.5rem 0' }}>Svako putovanje počinje pravim izborom.</h4>
              </div>
              <hr style={{ border: 'none', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: 0 }} />
              <p style={{ fontSize: '0.72rem', lineHeight: 1.5, opacity: 0.7, margin: 0, fontWeight: 700 }}>
              Vjerujemo da nezaboravna putovanja ne moraju imati visoku cijenu. Zato pronalazimo najbolje ponude za vaše sljedeće odredište.</p>
            </div>
          )}

          {/* Skrol button — desktop only */}
          {!isMobile && (
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.65rem', letterSpacing: '0.15em', fontWeight: 700, opacity: 0.8 }}>
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
          )}

          {/* Mobile: scroll hint centered on screen */}
          {isMobile && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', pointerEvents: 'none' }}>
              <svg width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'bounce 1.8s ease-in-out infinite' }}>
                <path d="M6 8l6 6 6-6" />
                <path d="M6 14l6 6 6-6" />
              </svg>
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontWeight: 700 }}>Scroll to start</span>
            </div>
          )}

        </div>

        {/* SLOJ 4: Krajnji tekst */}
        <div
          ref={heroCopyRef}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100svh', display: 'flex', justifyContent: 'center', alignItems: 'center', willChange: 'transform, opacity', zIndex: 20, padding: '0 10%', pointerEvents: 'none' }}
        >
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2.5rem, 5vw, 5.5rem)', fontWeight: 700, lineHeight: 1.1, color: '#ffffff', textAlign: 'center', maxWidth: '1100px' }}>
            Pametna putovanja počinju ovdje.
          </h1>
        </div>

      </section>
    </>
  );
}