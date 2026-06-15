import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'GoFly – Avanturistička Putovanja Širom Svijeta',
  description: 'Odabrana avanturistička putovanja u 150+ destinacija širom svijeta. Fly More. Pay Less.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bs" className={`${inter.variable} ${cormorant.variable}`}>
      <body>

        {/* Intro loading screen */}
        <div
          id="intro-screen"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
          style={{ animation: 'introFade 2.8s ease forwards' }}
        >
          <div className="flex flex-col items-center gap-5">
            <svg width="56" height="56" viewBox="0 0 100 100" fill="none">
              <defs>
                <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF8C00" />
                  <stop offset="50%" stopColor="#FF4500" />
                  <stop offset="100%" stopColor="#FF1493" />
                </linearGradient>
              </defs>
              <path d="M50 5C32 5 18 19 18 37C18 55 50 90 50 90C50 90 82 55 82 37C82 19 68 5 50 5Z" fill="url(#lg)" />
              <circle cx="50" cy="36" r="18" fill="#050505" />
              <path d="M58 28L42 36L46 40L40 46L44 46L50 40L54 44L62 30L58 28Z" fill="white" transform="rotate(-35, 50, 37)" />
            </svg>

            <div className="text-center">
              <p className="font-[family-name:var(--font-cormorant)] text-3xl font-light tracking-[0.25em] text-white">
                GO<em className="not-italic" style={{ color: '#c8a96e' }}>FLY</em>
              </p>
              <p className="text-[8px] tracking-[0.5em] uppercase text-white/30 mt-1">
                Fly More. Pay Less.
              </p>
            </div>

            <div className="w-28 h-px bg-white/8 relative overflow-hidden mt-3">
              <div
                className="absolute inset-y-0 left-0 bg-[#c8a96e]"
                style={{ animation: 'progressLine 2.2s ease forwards' }}
              />
            </div>
          </div>
        </div>

        {/* Intro control */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var intro = document.getElementById('intro-screen');
            var seen = sessionStorage.getItem('gofly-intro-seen');

            if (seen || window.location.pathname !== '/') {
              if (intro) {
                intro.style.animation = 'none';
                intro.style.display = 'none';
              }
            } else {
              setTimeout(function() {
                sessionStorage.setItem('gofly-intro-seen', '1');
                if (intro) intro.style.display = 'none';
              }, 2900);
            }
          })();
        `}} />

        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
