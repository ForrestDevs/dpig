import React from "react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-8 py-24 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        $DRUNKPIG
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        The memeiest drunk pig on the blockchain. Join the party or miss out on
        the fun! 🐷🍺
      </p>
      <div className="flex gap-4">
        <Button className="bg-pink-600 hover:bg-pink-700" size="lg">
          Buy $DRUNKPIG
        </Button>
        <Button variant="outline" size="lg">
          Read Whitepaper
        </Button>
      </div>
    </section>
  );
}
