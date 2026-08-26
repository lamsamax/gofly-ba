'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CITIES = [
  'Bali', 'Kapadokija', 'Serengeti', 'Kjoto', 'Machu Picchu',
  'Santorini', 'Maldivi', 'Marakeš', 'Island', 'Butan',
  'Antarktika', 'Galapagos', 'Petra', 'Banff', 'Queenstown',
  'Amalfi obala', 'Luang Prabang', 'Svalbard', 'Raja Ampat', 'Farska ostrva',
  'Patagonija', 'Kapadokija', 'Okavango', 'Himalaji', 'Uskršnje ostrvo',
  'Bali', 'Kapadokija', 'Serengeti', 'Kjoto', 'Machu Picchu',
];

// LUKSUZNI CRNO-SIVI MINIMALISTIČKI GLOBUS
function Globe() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full opacity-95" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Duboki crno-tamnosivi gradijent za luksuznu teksturu okeana */}
        <radialGradient id="globeDarkGrad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#161616" stopOpacity="1" />
          <stop offset="70%" stopColor="#0b0b0b" stopOpacity="1" />
          <stop offset="100%" stopColor="#020202" stopOpacity="1" />
        </radialGradient>
        
        {/* Maska koja drži elemente unutar sfere */}
        <clipPath id="globeClip">
          <circle cx="200" cy="200" r="180" />
        </clipPath>
      </defs>

      {/* Crna duboka pozadina (Okeani) */}
      <circle cx="200" cy="200" r="180" fill="url(#globeDarkGrad)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

      {/* SIVI KONTINENTI (Suptilna siva boja sa finim prozirnim sjajem) */}
      <g clipPath="url(#globeClip)" fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5">
        {/* Sjeverna i Južna Amerika */}
        <path d="M120,80 C110,90 100,105 95,120 C90,135 110,140 120,150 C130,160 140,155 145,170 C150,185 135,190 140,200 C145,210 155,225 150,240 C145,255 155,270 160,295 C165,320 175,340 170,360 C165,370 160,375 160,380 L140,350 C135,330 130,310 125,290 C120,270 115,250 110,240 C105,230 95,220 90,205 C85,190 75,180 70,170 C65,160 60,140 65,120 C70,100 85,90 100,85 Z" />
        {/* Evropa i Afrika */}
        <path d="M210,100 C200,110 190,120 195,135 C200,150 185,160 180,175 C175,190 180,210 185,225 C190,240 185,255 190,270 C195,285 205,300 210,320 C215,340 225,355 235,365 C245,375 250,360 255,340 C260,320 265,290 260,270 C255,250 250,230 255,210 C260,190 265,180 260,165 C255,150 245,145 240,135 C235,125 240,115 235,105 C230,95 220,95 210,100 Z" />
        {/* Azija i Australija */}
        <path d="M245,100 C255,95 270,90 290,95 C310,100 330,95 345,110 C360,125 355,140 350,155 C345,170 335,180 340,195 C345,210 330,225 320,235 C310,245 300,235 295,220 C290,205 280,195 275,185 C270,175 260,170 255,155 C250,140 255,125 250,115 Z M310,280 C320,275 335,280 345,290 C355,300 360,315 350,330 C340,345 320,350 310,335 C300,320 300,285 310,280 Z" />
      </g>

      {/* SFTLIDNE SFERNE LINIJE (Mreža meridijana za 3D dubinu) */}
      <g clipPath="url(#globeClip)">
        {[-120, -80, -40, 0, 40, 80, 120].map((y, i) => {
          const r = Math.sqrt(180 * 180 - y * y);
          return r > 0 ? <ellipse key={i} cx="200" cy={200 + y} rx={r} ry={r * 0.25} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" /> : null;
        })}
        {[0, 45, 90, 135].map((angle, i) => (
          <ellipse key={i} cx="200" cy="200" rx={180 * Math.abs(Math.cos(angle * Math.PI / 180))} ry="180"
            fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" transform={`rotate(${angle}, 200, 200)`} />
        ))}
      </g>

      {/* Suptilna atmosfera na ivici globusa */}
      <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />

      {/* ZLATNE DESTINACIJSKE TAČKICE (Luksuzni akcenti koji savršeno skaču iz crno-sive podloge) */}
      {[
        [110, 130], [135, 175], [152, 230], [165, 310], // Amerika
        [205, 125], [190, 180], [215, 260], [240, 330], // Evropa i Afrika
        [270, 115], [315, 135], [335, 180], [325, 305]  // Azija i Australija
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#c8a96e" opacity="0.9" style={{ transformOrigin: `${x}px ${y}px` }} />
      ))}
    </svg>
  );
}

export function GlobalMap() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section id="global" ref={ref} className="bg-[#050505] border-t border-white/[0.04] overflow-hidden">
      <div className="px-8 md:px-24 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="mb-4 text-[10px] tracking-[0.55em] uppercase text-[#c8a96e]">Širom Svijeta</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-white">
            Letite Bilo Gdje
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* ROTIRAJUĆI CRNO-SIVI LUKSUZNI GLOBUS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-full max-w-md mx-auto aspect-square"
            style={{ animation: inView ? 'globeSpin 40s linear infinite' : 'none' }}
          >
            <Globe />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="font-[family-name:var(--font-cormorant)] text-6xl md:text-[8rem] font-light text-white leading-none mb-4 lining-nums">
              1K+
            </p>
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#c8a96e] mb-6">
              Uspješno Organizovanih Putovanja
            </p>
            <p className="text-sm leading-loose text-white/40 max-w-md mb-10">
              Svako putovanje odražava godine stručnosti, strasti i povjerenja.
              Od spontanih avantura do pažljivo planiranih ekspedicija —
              GoFly garantuje čudo, otkriće i izvrsnost na svakom koraku.
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light italic text-white/50">
              &ldquo;Letite bilo gdje s potpunom slobodom i znatiželjem.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/[0.04] py-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...CITIES, ...CITIES].map((city, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="text-[10px] tracking-[0.4em] uppercase text-white/30 px-6">{city}</span>
              <span className="text-[#c8a96e] opacity-40">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-8 md:px-24 py-24 border-t border-white/[0.04]">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-white mb-4">
              Letite bilo gdje s potpunom
              <br />
              <em className="italic text-[#c8a96e]">slobodom i udobnošću</em>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[9px] tracking-[0.4em] uppercase text-white/30">Za Upite</p>
            <a href="mailto:goflybosnia@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors duration-300">goflybosnia@gmail.com</a>
            <a href="tel:+38733533303" className="text-sm text-white/60 hover:text-white transition-colors duration-300">+387 33 533 303</a>
          </div>
        </div>
      </div>
    </section>
  );
}