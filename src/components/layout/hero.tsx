import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { config } from "@/lib/config";
export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center gap-8 py-24 px-4"
    >
      <div className="grid lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
        <div className="order-2 lg:order-1 flex justify-center">
          <Image
            src="/assets/pig1.png"
            alt="Drunk Pig"
            className="w-32 h-32 lg:w-64 lg:h-64 object-contain"
            width={256}
            height={256}
          />
        </div>

        <div className="order-1 lg:order-2 text-center flex flex-col gap-4 items-center">
          <h1
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              textShadow:
                "4px 4px 0px rgba(0,0,0,0.2), -2px -2px 0px rgba(255,255,255,0.2)",
            }}
          >
            {config.ticker}
          </h1>
          <p className="leading-normal text-black/90 sm:text-xl sm:leading-8 mt-4 px-6">
            Meet the world&apos;s drunkest pig on the blockchain! Stumbling his
            way to the moon with a beer in hand and dreams in his heart. Oink
            oink, drink drink!
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button
              className="text-pink-600 font-bold hover:bg-white/90"
              size="lg"
            >
              Buy {config.ticker}
            </Button>
          </div>
        </div>

        <div className="order-3 flex justify-center">
          <Image
            src="/assets/beer1.png"
            alt="Beer Mug"
            className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
            width={128}
            height={128}
          />
        </div>
      </div>
    </section>
  );
}
