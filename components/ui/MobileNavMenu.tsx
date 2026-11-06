'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'O Nama', href: '/#about' },
  { label: 'Destinacije', href: '/destinacije' },
  { label: 'Iskustvo', href: '/#benefits' },
];

/**
 * Hamburger button + dropdown for mobile (hidden from md up).
 * Place it inside a positioned navbar container (e.g. a `fixed` <nav>):
 * the dropdown is absolutely positioned just below that container.
 */
export function MobileNavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        className="md:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11 -mr-2"
        aria-label="Meni"
        aria-expanded={menuOpen}
      >
        <span className={`h-px w-6 bg-white/70 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`h-px w-4 bg-white/70 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`h-px w-6 bg-white/70 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl p-8 flex flex-col gap-6"
            style={{
              background: 'rgba(8,8,8,0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(200,169,110,0.12)',
            }}
          >
            {NAV_LINKS.map(({ label, href }) => {
              const active = href === '/destinacije' && pathname?.startsWith('/destinacije');
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm tracking-[0.35em] uppercase transition-colors duration-300 ${
                    active ? 'text-[#c8a96e]' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="border-t border-white/[0.06] pt-6 flex flex-col gap-3">
              <a href="tel:+38733533303" className="text-xs tracking-[0.2em] text-white/40">+387 33 533 303</a>
              <a href="mailto:goflybosnia@gmail.com" className="text-xs tracking-[0.2em] text-white/40">goflybosnia@gmail.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
