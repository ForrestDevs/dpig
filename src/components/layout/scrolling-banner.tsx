import React from "react";
import { info } from "@/lib/info";

export default function ScrollingBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-4">
      <div className="animate-scroll-left whitespace-nowrap">
        {Array(32)
          .fill(info.ticker)
          .map((text, index) => (
            <span
              key={index}
              className="inline-block text-4xl font-bold text-pink-500 mx-4"
            >
              {text}
            </span>
          ))}
      </div>
    </div>
  );
}
