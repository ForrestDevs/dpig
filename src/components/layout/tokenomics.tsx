"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { info } from "@/lib/info";
import Image from "next/image";

export default function Tokenomics() {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(info.contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section
      id="tokenomics"
      className="relative overflow-hidden bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            url('/assets/beer1.png') 5% 5% / 10% auto,
            url('/assets/beer2.png') 25% 30% / 10% auto,
            url('/assets/beer3.png') 75% 70% / 10% auto,
            url('/assets/beer4.png') 95% 95% / 10% auto
          `,
          backgroundRepeat: "repeat",
        }}
      />
      <div className="container relative z-10 py-24 px-8 md:px-16 max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center -z-10">
            <Image
              src="/assets/pig1.png"
              alt="Drunk Pig Mascot"
              className="w-96 h-96 object-contain opacity-80"
              width={384}
              height={384}
            />
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-[48px] p-8 md:p-12 shadow-xl">
            <h2
              className="mb-8 text-4xl md:text-5xl font-black tracking-tighter text-black"
              style={{
                textShadow:
                  "4px 4px 0px rgba(0,0,0,0.3), -2px -2px 0px rgba(255,255,255,0.3)",
              }}
            >
              $STRAWBERRY Tokenomics
            </h2>

            <div
              className="space-y-6 text-2xl md:text-3xl font-black tracking-tight text-black"
              style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.3)" }}
            >
              <div>Supply: 420,690,000,000 🍺</div>
              <div>
                2% Tax for Marketing
                <br />
                <span className="text-lg">
                  (Gotta spread the word about our drunk pig!)
                </span>
              </div>
              <div>
                2% Tax for Development
                <br />
                <span className="text-lg">(More beer money for the devs)</span>
              </div>
              <div>
                LP Locked for 1 Year
                <br />
                <span className="text-lg">(Like our pig in rehab)</span>
              </div>
              <div>
                Contract Renounced
                <br />
                <span className="text-lg">
                  (Even we can&apos;t mess this up!)
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <div className="flex-1 p-4 bg-white/90 backdrop-blur rounded-full shadow-lg">
                <code className="text-sm sm:text-base font-mono break-all">
                  {info.contractAddress}
                </code>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-400 hover:bg-pink-500 transition-colors shadow-lg"
              >
                <span className="sr-only">Copy Contract Address</span>
                {copied ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <Copy className="w-5 h-5 text-white" />
                )}
              </button>
              {copied && (
                <div className="absolute top-full mt-2 px-3 py-1 bg-black/75 text-white text-sm rounded-full">
                  Copied!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
