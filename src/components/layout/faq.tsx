"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { config } from "@/lib/config";
import { Plus, X } from "lucide-react";
import Image from "next/image";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center -z-10">
            <Image
              src="/assets/pig1.png"
              alt="FAQ Pig"
              className="w-48 h-48 md:w-64 md:h-64 object-contain "
              width={256}
              height={256}
            />
          </div>
          <h2
            className="mb-12 text-4xl md:text-5xl font-black tracking-tighter text-black text-center"
            style={{
              textShadow:
                "2px 2px 0px rgba(0,0,0,0.2), -2px -2px 0px rgba(255,255,255,0.2)",
            }}
          >
            Frequently Asked Pigs
          </h2>
        </div>

        <div className="grid gap-4 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-0">
              <AccordionTrigger className="flex gap-4 p-6 text-xl font-bold text-left bg-white rounded-[32px] hover:no-underline group">
                What is {config.ticker}?
                <div className="ml-auto">
                  <X className="w-6 h-6 hidden group-data-[state=open]:block" />
                  <Plus className="w-6 h-6 block group-data-[state=open]:hidden" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2 p-6 bg-white rounded-[32px] text-lg">
                A {config.ticker} is not just a what, it&apos;s a who, a why,
                and sometimes a where! {config.ticker} is the embodiment of
                crypto chaos and cuddly confusion!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-0">
              <AccordionTrigger className="flex gap-4 p-6 text-xl font-bold text-left bg-white rounded-[32px] hover:no-underline group">
                Is {config.ticker} a serious investment?
                <div className="ml-auto">
                  <X className="w-6 h-6 hidden group-data-[state=open]:block" />
                  <Plus className="w-6 h-6 block group-data-[state=open]:hidden" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2 p-6 bg-white rounded-[32px] text-lg">
                While we love to have fun, {config.ticker} is built on solid
                fundamentals and a strong community. However, always do your own
                research and invest responsibly!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-0">
              <AccordionTrigger className="flex gap-4 p-6 text-xl font-bold text-left bg-white rounded-[32px] hover:no-underline group">
                What&apos;s &quot;The Piggening&quot;?
                <div className="ml-auto">
                  <X className="w-6 h-6 hidden group-data-[state=open]:block" />
                  <Plus className="w-6 h-6 block group-data-[state=open]:hidden" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2 p-6 bg-white rounded-[32px] text-lg">
                The Piggening is our community event where {config.ticker}{" "}
                holders come together to celebrate, share memes, and participate
                in exclusive rewards programs!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-0">
              <AccordionTrigger className="flex gap-4 p-6 text-xl font-bold text-left bg-white rounded-[32px] hover:no-underline group">
                How do I join the {config.ticker} community?
                <div className="ml-auto">
                  <X className="w-6 h-6 hidden group-data-[state=open]:block" />
                  <Plus className="w-6 h-6 block group-data-[state=open]:hidden" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2 p-6 bg-white rounded-[32px] text-lg">
                Join our Discord, follow us on Twitter, and of course, grab some{" "}
                {config.ticker} tokens to become part of our amazing community!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-0">
              <AccordionTrigger className="flex gap-4 p-6 text-xl font-bold text-left bg-white rounded-[32px] hover:no-underline group">
                What&apos;s next on the {config.ticker} roadmap?
                <div className="ml-auto">
                  <X className="w-6 h-6 hidden group-data-[state=open]:block" />
                  <Plus className="w-6 h-6 block group-data-[state=open]:hidden" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2 p-6 bg-white rounded-[32px] text-lg">
                Our drunk pig&apos;s got an epic journey ahead! Next up,
                we&apos;re launching the world&apos;s first pig-to-pig social
                network, teaching bartenders how to serve drinks to hooved
                customers, and organizing the legendary &quot;Oink After
                Dark&quot; party series. Keep an eye on our roadmap to follow
                our mascot&apos;s journey from casual sipper to party animal
                legend!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
