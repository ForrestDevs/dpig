"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    title: "Buy some ETH",
    description:
      "$DPIG thinks it's magic internet money, and he's not entirely wrong.",
  },
  {
    step: 3,
    title: "Connect Wallet",
    description:
      "Link your wallet to our platform. Don't worry, $DPIG will guide you through it!",
  },
  {
    step: 4,
    title: "Swap for $DPIG",
    description:
      "Time to join the party! Swap your ETH for $DPIG and become part of the squad.",
  },
];

export default function HowToBuy() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section className="py-24 bg-purple-800">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-12">
              <h2
                className="text-5xl font-black tracking-tighter text-white"
                style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.2)" }}
              >
                How to Buy
              </h2>
              <h3
                className="text-5xl font-black tracking-tighter text-white"
                style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.2)" }}
              >
                $DPIG?
              </h3>
            </div>

            <div className="flex justify-start">
              <Button className="gap-2 px-8 py-6 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700">
                Buy $DPIG Now
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="relative overflow-hidden bg-white rounded-3xl">
              <div className="p-8 md:p-12">
                <div className="text-xl font-semibold text-neutral-500">
                  STEP {buySteps[currentStep].step}:
                </div>
                <h3 className="mt-2 text-4xl font-black tracking-tighter">
                  {buySteps[currentStep].title}
                </h3>
                <p className="mt-4 text-xl text-neutral-600">
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
