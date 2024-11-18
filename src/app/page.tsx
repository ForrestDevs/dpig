import FAQ from "@/components/layout/faq";
import Hero from "@/components/layout/hero";
import HowToBuy from "@/components/layout/how-to-buy";
import ScrollingBanner from "@/components/layout/scrolling-banner";
import Tokenomics from "@/components/layout/tokenomics";
import Roadmap from "@/components/layout/roadmap";
import Lore from "@/components/layout/lore";
import { Navigation } from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 opacity-90">
      <div className="absolute inset-0 pointer-events-none before:absolute before:inset-0 before:bg-[url('/noise.webp')] before:opacity-20 before:mix-blend-overlay before:animate-noise -z-1"></div>
      <Navigation />
      <Hero />
      <ScrollingBanner />
      <Lore />
      <ScrollingBanner />
      <Tokenomics />
      <ScrollingBanner />
      <HowToBuy />
      <ScrollingBanner />
      <Roadmap />
      <ScrollingBanner />
      <FAQ />
      <Footer />
    </div>
  );
}
