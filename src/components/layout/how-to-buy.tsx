"use client";

import { Card } from "@/components/ui/card";
import { info } from "@/lib/info";
import Link from "next/link";
import { useState } from "react";

const buySteps = [
  {
    step: 1,
    title: "Create a Wallet",
    description:
      "Get yourself a crypto wallet. It's like a piggy bank, but digital and way cooler!",
  },
  {
    step: 2,
    title: "Buy some SOL",
    description:
      "$STRAWBERRY thinks it's magic internet money, and he's not entirely wrong.",
  },
  {
    step: 3,
    title: "Connect Wallet",
    description:
      "Link your wallet to raydium. Don't worry, $STRAWBERRY will guide you through it!",
  },
  {
    step: 4,
    title: "Swap for $STRAWBERRY",
    description:
      "Time to join the party! Swap your SOL for $STRAWBERRY and become part of the squad.",
  },
];

export default function HowToBuy() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section id="how-to-buy" className="py-24">
      <div className="container mx-auto px-8 md:px-16 max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-12 z-10 text-center md:text-left">
              <h2
                className="text-4xl md:text-5xl font-black tracking-tighter text-white"
                style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.2)" }}
              >
                How to Buy
              </h2>
              <h3
                className="text-4xl md:text-5xl font-black tracking-tighter text-white"
                style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.2)" }}
              >
                {info.ticker}?
              </h3>
            </div>

            <div className="flex justify-center md:justify-start">
              <Link
                href={info.dexUrl}
                className="gap-2 px-6 md:px-8 py-4 text-base md:text-lg font-semibold text-pink-500 rounded-full bg-black"
              >
                Buy {info.ticker} Now
              </Link>
            </div>
          </div>

          <div className="relative">
            <Card className="relative overflow-hidden bg-white rounded-3xl">
              <div className="p-6 md:p-12">
                <div className="text-lg md:text-xl font-semibold text-neutral-500">
                  STEP {buySteps[currentStep].step}:
                </div>
                <h3 className="mt-2 text-3xl md:text-4xl font-black tracking-tighter">
                  {buySteps[currentStep].title}
                </h3>
                <p className="mt-4 text-lg md:text-xl text-neutral-600">
                  {buySteps[currentStep].description}
                </p>

                <div className="flex justify-center gap-2 mt-8">
                  {buySteps.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentStep ? "bg-pink-500" : "bg-neutral-200"
                      }`}
                      onClick={() => setCurrentStep(index)}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
