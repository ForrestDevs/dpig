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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-700 to-purple-900">
      <Navigation />
      <Hero />
      <ScrollingBanner />
      <Lore />
      <ScrollingBanner />
      <Tokenomics />
      <HowToBuy />
      <Roadmap />
      <ScrollingBanner />
      <FAQ />
      <Footer />
    </div>
  );
}
