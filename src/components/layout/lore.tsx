import { Beer, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Component() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-800 to-purple-900">
      <div className="container">
        <h2
          className="mb-12 text-6xl font-black tracking-tighter text-white"
          style={{
            textShadow:
              "4px 4px 0px rgba(0,0,0,0.2), -2px -2px 0px rgba(255,255,255,0.2)",
          }}
        >
          The Legend of $DPIG
        </h2>

        <Card className="overflow-hidden bg-white rounded-3xl">
          <CardContent className="p-0">
            <div className="p-6 space-y-4 md:p-8">
              <div className="inline-block px-4 py-2 text-white bg-red-500 rounded-full">
                BREAKING NEWS
              </div>

              <h3 className="text-4xl font-black tracking-tight">
                Pig Goes Viral After Epic Beer Adventure: The Birth of $DPIG
              </h3>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>BY CRYPTO CHRONICLES</span>
                <span>•</span>
                <span>THE DAY EVERYTHING CHANGED</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Story
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Beer className="w-4 h-4" />
                  Buy $DPIG
                </Button>
              </div>
            </div>

            <div className="relative aspect-video bg-gray-100">
              <img
                src="/placeholder.svg"
                alt="The legendary drunk pig"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-sm text-white bg-gradient-to-t from-black/80 to-transparent">
                The legendary pig that inspired a crypto movement
              </div>
            </div>

            <div className="p-6 space-y-6 text-lg md:p-8">
              <p>
                In a tale that would soon become crypto legend, a peculiar pig
                with an unexpected taste for craft beer stumbled into blockchain
                history. Found surrounded by 12 empty beer cans and wearing what
                could only be described as a satisfied grin, this pioneering pig
                became an overnight sensation.
              </p>

              <div className="p-6 border-l-4 border-purple-500 bg-purple-50">
                <p className="italic text-xl">
                  &quot;I&apos;ve never seen anything like it. The pig had better
                  taste in IPAs than most humans I know!&quot;
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  - The Duck (Best Friend & Witness)
                </p>
              </div>

              <p>
                This legendary incident sparked the creation of $DPIG - a token
                that celebrates the joy, spontaneity, and slightly wobbly path
                of our beloved porcine pioneer. Every transaction carries the
                spirit of that fateful day when a pig decided to turn a regular
                garage into the most talked-about pub in crypto history.
              </p>

              <div className="grid gap-6 p-6 bg-gray-50 rounded-2xl md:grid-cols-3">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-500">Empty Beer Cans</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">1</div>
                  <div className="text-sm text-gray-500">Legendary Pig</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">∞</div>
                  <div className="text-sm text-gray-500">Meme Potential</div>
                </div>
              </div>

              <p>
                Today, $DPIG stands as a testament to those unexpected moments
                that bring the crypto community together. With every buy, sell,
                and transfer, we raise a virtual toast to the pig that showed us
                how to truly live in the moment.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
