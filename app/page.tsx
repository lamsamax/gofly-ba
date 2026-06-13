import { Navbar } from '@/components/ui/Navbar';
import { HeroScroll } from '@/components/hero/HeroScroll';
import { TextReveal } from '@/components/sections/TextReveal';
import { About } from '@/components/sections/About';
import { Fleet } from '@/components/sections/Fleet';
import { Benefits } from '@/components/sections/Benefits';
import { Stats } from '@/components/sections/Stats';
import { GlobalMap } from '@/components/sections/GlobalMap';
import { Footer } from '@/components/ui/Footer';
import { ContactForm } from '@/components/ui/ContactForm';

export default function Home() {
  return (
    <main className="bg-[#050505] text-[#f5f5f0]">
      <Navbar />
      <HeroScroll />
      <TextReveal />
      <About />
      <Fleet />
      <Benefits />
      <Stats />
      <GlobalMap />
      <Footer />
      <ContactForm />
    </main>
  );
}
