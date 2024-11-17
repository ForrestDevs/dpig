"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function Tokenomics() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "CihjDh2tUGqbAbxKCmxKd7ssMsvMaWecFBBZNeNZpump";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="relative overflow-hidden bg-purple-800">
      {/* Stars Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(white, rgba(255,255,255,0.2) 2px, transparent 40px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Moon */}
      <div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-yellow-100 shadow-2xl"
        style={{ boxShadow: "inset -20px -20px 50px rgba(0,0,0,0.2)" }}
      >
        <div className="absolute w-6 h-6 rounded-full bg-yellow-200/50 top-4 left-8" />
        <div className="absolute w-8 h-8 rounded-full bg-yellow-200/50 bottom-8 right-6" />
        <div className="absolute w-4 h-4 rounded-full bg-yellow-200/50 top-12 right-8" />
      </div>

      <div className="container relative z-10 py-24">
        <h2
          className="mb-12 text-6xl font-black tracking-tighter text-white"
          style={{
            textShadow:
              "4px 4px 0px rgba(0,0,0,0.2), -2px -2px 0px rgba(255,255,255,0.2)",
          }}
        >
          Monster-nomics
        </h2>

        <div
          className="space-y-4 text-4xl font-black tracking-tight text-green-400"
          style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.2)" }}
        >
          <div>Pump.fun Launch</div>
          <div>LP Burned</div>
          <div>1 Billion Supply</div>
        </div>

        <div className="mt-12 flex items-center gap-2 max-w-3xl">
          <div className="flex-1 p-4 bg-white rounded-full">
            <code className="text-sm sm:text-base md:text-lg font-mono break-all">
              {contractAddress}
            </code>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-green-400 hover:bg-green-500 transition-colors"
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
    </section>
  );
}
