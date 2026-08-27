import { DESTINATION_CARDS } from '@/lib/destination-cards';
import { DestinationPageClient } from './DestinationPageClient';

export function generateStaticParams() {
  return DESTINATION_CARDS.map((c) => ({ slug: c.slug }));
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  return <DestinationPageClient slug={params.slug} />;
}
