import { Card, CardContent } from "@/components/ui/card";
import { config } from "@/lib/config";
import VideoEmbed from "./lore.client";

export default function Component() {
  return (
    <section id="lore" className="py-24 ">
      <div className="container px-4 max-w-4xl mx-auto">
        <h2
          className="mb-12 text-4xl md:text-6xl font-black tracking-tighter text-white text-center"
          style={{
            textShadow:
              "4px 4px 0px rgba(0,0,0,0.2), -2px -2px 0px rgba(255,255,255,0.2)",
          }}
        >
          The Legend of {config.ticker}
        </h2>

        <Card className="overflow-hidden bg-white rounded-3xl">
          <CardContent className="p-0">
            <div className="p-4 md:p-6 space-y-4">
              <div className="flex justify-center">
                <span className="inline-block px-4 py-2 text-white bg-red-500 rounded-full">
                  BREAKING NEWS
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-black tracking-tight text-center">
                {config.ticker} Goes Viral After Epic Beer Adventure: The Birth
                of {config.ticker}
              </h3>

              <div className="flex items-center justify-center gap-4 text-sm text-gray-500 flex-wrap">
                <span>BY CRYPTO CHRONICLES</span>
                <span>•</span>
                <span>THE DAY EVERYTHING CHANGED</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <VideoEmbed />
              <div className="space-y-6 text-base md:text-lg p-4 md:p-6">
                <p className="text-center">
                  In a tale that would soon become crypto legend, a peculiar pig
                  with an unexpected taste for craft beer stumbled into
                  blockchain history. Found surrounded by 12 empty beer cans and
                  wearing what could only be described as a satisfied grin, this
                  pioneering pig became an overnight sensation.
                </p>

                <div className="p-4 md:p-6 border-l-4 border-purple-500 bg-purple-50">
                  <p className="italic text-lg md:text-xl text-center">
                    &quot;I&apos;ve never seen anything like it. The pig had
                    better taste in IPAs than most humans I know!&quot;
                  </p>
                  <p className="mt-2 text-sm text-gray-500 text-center">
                    - The Duck (Best Friend & Witness)
                  </p>
                </div>

                <p className="text-center">
                  This legendary incident sparked the creation of{" "}
                  {config.ticker} - a token that celebrates the joy,
                  spontaneity, and slightly wobbly path of our beloved porcine
                  pioneer. Every transaction carries the spirit of that fateful
                  day when a pig decided to turn a regular garage into the most
                  talked-about pub in crypto history.
                </p>

                <div className="grid gap-4 p-4 md:p-6 bg-gray-50 rounded-2xl md:grid-cols-3">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-600">
                      12
                    </div>
                    <div className="text-sm text-gray-500">Empty Beer Cans</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-600">
                      1
                    </div>
                    <div className="text-sm text-gray-500">Legendary Pig</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-purple-600">
                      ∞
                    </div>
                    <div className="text-sm text-gray-500">Meme Potential</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
