import React from "react";

export default function ScrollingBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-2">
      <div className="animate-scroll-left whitespace-nowrap">
        {Array(32)
          .fill("$DPIG ")
          .map((text, index) => (
            <span
              key={index}
              className="inline-block text-2xl font-bold text-pink-500 mx-4"
            >
              {text}
            </span>
          ))}
      </div>
    </div>
  );
}
