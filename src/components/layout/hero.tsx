import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { config } from "@/lib/config";
export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center gap-8 py-24 px-8"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="text-center md:text-left flex flex-col gap-4">
          <h1
            className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl"
            style={{
              textShadow:
                "4px 4px 0px rgba(0,0,0,0.2), -2px -2px 0px rgba(255,255,255,0.2)",
            }}
          >
            {config.ticker}
          </h1>
          <p className="leading-normal text-black/90 sm:text-2xl sm:leading-8 mt-4">
            Meet the world&apos;s drunkest pig on the blockchain! Stumbling his
            way to the moon with a beer in hand and dreams in his heart. Oink
            oink, drink drink!
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <Button
              className="text-pink-600 font-bold hover:bg-white/90"
              size="lg"
            >
              Buy {config.ticker}
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/drunkpig.png"
            alt="Drunk Pig"
            className="md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain"
            width={384}
            height={384}
          />
        </div>
      </div>
    </section>
  );
}
