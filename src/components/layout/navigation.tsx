"use client";

import { Menu } from "lucide-react";
import { Wallet } from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 px-8">
      <nav className="relative flex items-center justify-between w-full px-6 py-4 bg-white rounded-full mx-auto mt-6">
        <Link className="flex items-center gap-2" href="#">
          <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900">
            $DRUNKPIG
          </span>
        </Link>

        <div className="hidden gap-8 lg:flex">
          <Link
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
            href="#"
          >
            Lore
          </Link>
          <Link
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
            href="#"
          >
            Tokenomics
          </Link>
          <Link
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
            href="#"
          >
            How to Buy
          </Link>
          <Link
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
            href="#"
          >
            Roadmap
          </Link>
          <Link
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
            href="#"
          >
            FAQs
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button className="hidden gap-2 px-6 text-white rounded-full lg:flex bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700">
            <Wallet className="w-4 h-4" />
            Buy $DRUNKPIG
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 p-4 mt-2 space-y-2 bg-white rounded-lg shadow-lg md:hidden">
          <Link
            className="block p-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md"
            href="#"
          >
            Home
          </Link>
          <Link
            className="block p-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md"
            href="#"
          >
            Lore
          </Link>
          <Link
            className="block p-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md"
            href="#"
          >
            Tokenomics
          </Link>
          <Link
            className="block p-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md"
            href="#"
          >
            How to Buy
          </Link>
          <Link
            className="block p-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md"
            href="#"
          >
            Roadmap
          </Link>
          <Link
            className="block p-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md"
            href="#"
          >
            FAQs
          </Link>
          <Button className="w-full gap-2 px-6 text-white rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700">
            <Wallet className="w-4 h-4" />
            Buy $DRUNKPIG
          </Button>
        </div>
      )}
    </div>
  );
}
