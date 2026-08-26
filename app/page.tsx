import { Navbar } from '@/components/ui/Navbar';
import { HeroScroll } from '@/components/hero/HeroScroll';
import { Fleet } from '@/components/sections/Fleet';
import { Benefits } from '@/components/sections/Benefits';
import { Stats } from '@/components/sections/Stats';
// import { GlobalMap } from '@/components/sections/GlobalMap';
import { Footer } from '@/components/ui/Footer';

export default function Home() {
  return (
    <main className="bg-[#050505] text-[#f5f5f0]">
      <Navbar />
      <HeroScroll />
      <Fleet />
      <Benefits />
      <Stats />
      {/* <GlobalMap /> */}
      <Footer />
    </main>
  );
}
