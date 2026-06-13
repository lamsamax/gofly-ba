'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollProgress(containerRef: React.RefObject<HTMLElement>): number {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        if (total <= 0) return;
        setProgress(Math.max(0, Math.min(-rect.top / total, 1)));
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafRef.current); };
  }, [containerRef]);

  return progress;
}
