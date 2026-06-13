'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContactForm() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    (window as any).openContactForm = () => setOpen(true);
  }, []);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setOpen(false); }, 3000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(10px)' }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full max-w-md mx-4 p-10 rounded-2xl"
            style={{ background: '#101010', border: '1px solid rgba(255,255,255,0.08)' }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setOpen(false)} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-white/30 hover:text-white text-xl">×</button>

            {!submitted ? (
              <>
                <p className="text-[10px] tracking-[0.5em] uppercase text-[#c8a96e] mb-2">Kontakt</p>
                <h3 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-white mb-2">Planirajte Putovanje</h3>
                <p className="text-xs text-white/30 mb-8 leading-relaxed">Recite nam gdje želite ići i mi ćemo kreirati savršenu avanturu za vas.</p>
                <div className="flex flex-col gap-3">
                  {['Ime i prezime', 'Email adresa', 'Telefon', 'Željena destinacija'].map(field => (
                    <input key={field} type="text" placeholder={field}
                      className="w-full bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-white/25 rounded-xl outline-none focus:border-[#c8a96e]/60 transition-colors duration-300" />
                  ))}
                  <button onClick={handleSubmit}
                    className="mt-2 w-full bg-[#c8a96e] text-[#050505] py-4 text-[10px] tracking-[0.45em] uppercase hover:bg-[#e8c98e] transition-colors duration-300 rounded-xl font-medium">
                    Pošaljite Upit
                  </button>
                </div>
                <p className="mt-5 text-[9px] text-white/20 text-center">Slanjem pristajete na našu Politiku Privatnosti</p>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                <p className="text-[#c8a96e] text-4xl mb-4">✓</p>
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-white mb-3">Upit Poslan</h3>
                <p className="text-sm text-white/40">Hvala! Naš tim će vas kontaktirati uskoro.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
