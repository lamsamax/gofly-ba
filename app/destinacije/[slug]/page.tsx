import type { Metadata } from 'next';
import { DESTINATION_CARDS } from '@/lib/destination-cards';
import { DESTINATIONS } from '@/lib/destinations';
import { DestinationPageClient } from './DestinationPageClient';

export function generateStaticParams() {
  return DESTINATION_CARDS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const card = DESTINATION_CARDS.find((c) => c.slug === params.slug);
  if (!card) return {};

  const dest = DESTINATIONS[card.slug];
  const title = `${card.name} – Putovanje iz Sarajeva`;
  const description = dest?.story?.quote
    ?? `Avanturistički pohod u ${card.name} (${card.region}) sa GoFly. Fly More. Pay Less.`;

  return {
    title,
    description,
    alternates: { canonical: `/destinacije/${card.slug}/` },
    openGraph: { title, description, url: `/destinacije/${card.slug}/`, images: [card.image] },
    twitter: { title, description, images: [card.image] },
  };
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  return <DestinationPageClient slug={params.slug} />;
}
