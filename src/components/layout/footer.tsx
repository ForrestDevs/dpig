import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send, Twitter } from "lucide-react";
import Image from "next/image";
import { config } from "@/lib/config";
export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Logo and Mascot Section */}
          <div className="flex items-center space-x-4 justify-center lg:justify-start">
            <div className="relative w-32 h-32">
              <Image
                alt="DPIG Mascot"
                className="object-contain"
                src="/BuyGif.gif"
                width={200}
                height={200}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="grid grid-cols-2 gap-4 lg:gap-8 text-sm lg:text-base text-center lg:text-left">
            <Link
              className="hover:text-pink-500 transition-colors"
              href="#lore"
            >
              Lore
            </Link>
            <Link
              className="hover:text-pink-500 transition-colors"
              href="#tokenomics"
            >
              Tokenomics
            </Link>
            <Link
              className="hover:text-pink-500 transition-colors"
              href="#how-to-buy"
            >
              How to Buy
            </Link>
            <Link
              className="hover:text-pink-500 transition-colors"
              href="#roadmap"
            >
              Roadmap
            </Link>
            <Link
              className="hover:text-pink-500 transition-colors"
              href="#faqs"
            >
              FAQs
            </Link>
          </nav>

          {/* Social and CTA */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Follow Us</h3>
              <div className="flex space-x-4 justify-center lg:justify-start">
                <Link
                  href={config.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href={config.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  <span className="sr-only">Telegram</span>
                </Link>
              </div>
            </div>
            <Button
              className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full"
              size="lg"
            >
              GET {config.ticker} TODAY
            </Button>
          </div>
        </div>

        {/* Contract Address */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center">
          <div className="mt-4 text-sm text-white/60">
            © 2024 {config.ticker}. All rights piggerved.
          </div>
        </div>
      </div>
    </footer>
  );
}
