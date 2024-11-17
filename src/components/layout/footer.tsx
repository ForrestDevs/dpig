import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      <div className="container px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Logo and Mascot Section */}
          <div className="flex items-center space-x-4">
            <div className="relative w-32 h-32">
              <img
                alt="DPIG Mascot"
                className="object-contain"
                height={128}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "1/1",
                }}
                width={128}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="grid grid-cols-2 gap-4 lg:gap-8 text-sm lg:text-base">
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
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://twitter.com/dpig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://t.me/dpig"
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
              GET $DPIG TODAY
            </Button>
          </div>
        </div>

        {/* Contract Address */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-xs font-mono text-white/60 break-all">
            Contract:
            0xMinipool2routerMint.CihjDh2tUGqbAbxKCmxKd7ssMsvMaWecFBBZNeNZpump
          </div>
          <div className="mt-4 text-sm text-white/60">
            © 2024 $DPIG. All rights piggerved.
          </div>
        </div>
      </div>
    </footer>
  );
}
