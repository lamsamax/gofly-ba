'use client';

import { useState, useEffect, useRef } from 'react';
import { SEQUENCE_FRAME_COUNT, SEQUENCE_PATH, FRAME_PREFIX, FRAME_EXT } from '@/lib/constants';

interface PreloaderState {
  images: HTMLImageElement[];
  isLoaded: boolean;
  progress: number;
}

export function useImagePreloader(): PreloaderState {
  const [state, setState] = useState<PreloaderState>({ images: [], isLoaded: false, progress: 0 });
  const cacheRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    if (cacheRef.current.length === SEQUENCE_FRAME_COUNT) {
      setState({ images: cacheRef.current, isLoaded: true, progress: 1 });
      return;
    }

    const images: HTMLImageElement[] = new Array(SEQUENCE_FRAME_COUNT);
    let loaded = 0;

    for (let i = 1; i <= SEQUENCE_FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `${SEQUENCE_PATH}${FRAME_PREFIX}${String(i).padStart(3, '0')}${FRAME_EXT}`;
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === SEQUENCE_FRAME_COUNT) {
          cacheRef.current = images;
          setState({ images, isLoaded: true, progress: 1 });
        } else {
          setState(p => ({ ...p, progress: loaded / SEQUENCE_FRAME_COUNT }));
        }
      };
      images[i - 1] = img;
    }

    setState({ images, isLoaded: false, progress: 0 });
  }, []);

  return state;
}