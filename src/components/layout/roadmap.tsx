import React from "react";
import Image from "next/image";

export default function Roadmap() {
  const roadmapPhases = [
    {
      title: "Phase 1: The First Beer",
      description: [
        "Discovers craft beer - A whole new world opens up",
        "Learns to open bottles with hooves - True innovation",
        "First tipsy selfie - Breaking the internet",
        "Drunk texts the farm group chat - No regrets",
      ],
      image: "/images/pregame.png",
      mascotImage: "/assets/pig1.png",
    },
    {
      title: "Phase 2: Getting Wobbly",
      description: [
        "Attempts karaoke - Oinking to Sweet Caroline",
        "Drunk orders pizza for the whole barn",
        "Starts a dance-off with chickens",
        "Declares eternal friendship with a scarecrow",
      ],
      image: "/images/party.png",
      mascotImage: "/assets/pig2.png",
    },
    {
      title: "Phase 3: Peak Party Pig",
      description: [
        "Crowd surfs at the county fair",
        "Becomes local pub's VIP member",
        "Creates signature cocktail: The Muddy Snout",
        "Goes viral for beer pong skills",
      ],
      image: "/images/peak.png",
      mascotImage: "/assets/pig3.png",
    },
    {
      title: "Phase 4: Living Legend",
      description: [
        "Opens first pig-owned brewery",
        "Stars in 'The Hangover: Farm Edition'",
        "Writes bestseller: 'Hair of the Hog'",
        "Wakes up wearing farmer's hat - No memory how",
      ],
      image: "/images/legendary.png",
      mascotImage: "/assets/pig4.png",
    },
  ];

  return (
    <section
      id="roadmap"
      className="container mx-auto px-8 md:px-16 py-24 max-w-7xl "
    >
      <h2
        className="mb-16 text-5xl md:text-7xl font-black tracking-tighter text-center text-white"
        style={{
          textShadow:
            "4px 4px 0px rgba(0,0,0,0.2), -2px -2px 0px rgba(255,255,255,0.2)",
        }}
      >
        Roadmap
      </h2>

      {roadmapPhases.map((phase, index) => (
        <div
          key={phase.title}
          className="grid items-center gap-8 md:gap-12 mb-16 md:mb-24 md:grid-cols-2"
        >
          {/* Content section */}
          <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
            <div className="flex items-center gap-4">
              <Image
                src={phase.mascotImage}
                alt="DPIG mascot"
                className="w-16 h-16 object-contain"
                width={256}
                height={256}
              />
              <h3 className="text-3xl md:text-4xl font-bold text-pink-600">
                {phase.title}
              </h3>
            </div>
            <ul className="space-y-3 text-xl md:text-2xl text-black/90">
              {phase.description.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 list-disc before:content-['•'] before:mr-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image section */}
          <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
            <Image
              src={phase.image}
              alt={`${phase.title} phase`}
              className="w-3/4 mx-auto rounded-2xl shadow-2xl"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
