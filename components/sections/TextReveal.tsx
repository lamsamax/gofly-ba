'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const WORDS = [
  'GoFly', 'je', 'agencija', 'za', 'avanturistička', 'putovanja',
  'sa', 'više', 'od', '5.000', 'uspješnih', 'putovanja',
  'u', '150+', 'zemalja.', 'Od', 'solo',
  'avanturista', 'do', 'porodica,', 'naši',
  'putnici', 'nam', 'vjeruju', 'da', 'im', 'pružimo', 'nezaboravno', 'iskustvo,', 'svaki', 'put.',
];

function Word({ word, progress, range }: { word: string; progress: any; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.22em]">
      {word}
    </motion.span>
  );
}

export function TextReveal() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 1.0', 'end 0.5'] });

  return (
    <section
  id="text-reveal-section"
  ref={ref}
  className="relative min-h-screen flex items-end overflow-hidden"
      style={{ 
  background: 'linear-gradient(180deg, #EBD5D3 0%, #87CEEB 15%, #5BA3D9 40%, #2E7DB5 70%, #1a5c8a 100%)',
  backgroundColor: '#EBD5D3'
}}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          radial-gradient(ellipse at 15% 40%, rgba(255,255,255,0.2) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 45%)
        `,
      }} />

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />

      <div className="relative z-20 px-8 md:px-16 pb-36 pt-40">
        <p className="text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] font-bold text-white leading-tight tracking-tight">
          {WORDS.map((word, i) => (
            <Word
              key={i}
              word={word}
              progress={scrollYProgress}
              range={[i / WORDS.length, Math.min((i + 4) / WORDS.length, 1)]}
            />
          ))}
        </p>
      </div>
    </section>
  );
}