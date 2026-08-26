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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="GoFly" className="h-28 w-auto object-contain" />

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
