import FAQ from "@/components/layout/faq";
import Hero from "@/components/layout/hero";
import HowToBuy from "@/components/layout/how-to-buy";
import ScrollingBanner from "@/components/layout/scrolling-banner";
import Tokenomics from "@/components/layout/tokenomics";
import { Navigation } from "@/components/layout/navigation";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-700 to-purple-900">
      <Navigation />
      <Hero />
      <ScrollingBanner />
      <Tokenomics />
      <HowToBuy />
      <ScrollingBanner />
      <FAQ />
    </div>
  );
}
