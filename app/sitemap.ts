import type { MetadataRoute } from 'next';
import { DESTINATION_CARDS } from '@/lib/destination-cards';

const BASE_URL = 'https://gofly.ba';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ['/', '/destinacije/'].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const destinationRoutes: MetadataRoute.Sitemap = DESTINATION_CARDS.map((card) => ({
    url: `${BASE_URL}/destinacije/${card.slug}/`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...destinationRoutes];
}
