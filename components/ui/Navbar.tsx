'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { GoFlyWordmark } from './Logo';

const NAV_LINKS = [
  { label: 'O Nama', href: '#about' },
  { label: 'Destinacije', href: '/destinacije' },
  { label: 'Iskustvo', href: '#benefits' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-500"
          style={{
            background: scrolled ? 'rgba(8,8,8,0.75)' : 'rgba(8,8,8,0.25)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
          }}
        >
          <Link href="/">
            <GoFlyWordmark />
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[10px] tracking-[0.35em] uppercase text-white/50 hover:text-white transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+38761000000" className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300">
              +387 61 000 000
            </a>
            <a href="mailto:info@gofly.ba" className="text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300">
              info@gofly.ba
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Meni"
          >
            <span className={`h-px w-6 bg-white/70 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-px w-4 bg-white/70 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-px w-6 bg-white/70 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-3 right-3 z-40 rounded-2xl p-8 flex flex-col gap-6"
            style={{
              background: 'rgba(8,8,8,0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-[0.35em] uppercase text-white/60 hover:text-white transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
            <div className="border-t border-white/[0.06] pt-6 flex flex-col gap-3">
              <a href="tel:+38761000000" className="text-xs tracking-[0.2em] text-white/40">+387 61 000 000</a>
              <a href="mailto:info@gofly.ba" className="text-xs tracking-[0.2em] text-white/40">info@gofly.ba</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
