import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import { config } from "@/lib/config";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center gap-8 py-24 px-8"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        <div className="text-center md:text-left flex flex-col gap-4">
          <h1
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white md:text-8xl lg:text-9xl"
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
          <div className="flex justify-center md:justify-start gap-4 mt-8 flex-wrap">
            <Button
              className="text-pink-600 font-bold hover:bg-white/90"
              size="lg"
            >
              Buy {config.ticker}
            </Button>
            <Link
              href={config.twitterUrl}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </Link>
            <Link
              href={config.telegramUrl}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <title>Telegram</title>
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/drunkpig.png"
            alt="Drunk Pig"
            className="object-contain"
            width={384}
            height={384}
          />
        </div>
      </div>
    </section>
  );
}
