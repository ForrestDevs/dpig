"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, X } from "lucide-react";
import Image from "next/image";

export default function FAQ() {
  return (
    <section className="py-24 bg-purple-800">
      <div className="container relative">
        <h2
          className="mb-12 text-5xl font-black tracking-tighter text-white"
          style={{
            textShadow:
              "2px 2px 0px rgba(0,0,0,0.2), -2px -2px 0px rgba(255,255,255,0.2)",
          }}
        >
          Frequently Asked Pigs
        </h2>

        <div className="grid gap-4 md:max-w-[80%]">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-0">
              <AccordionTrigger className="flex gap-4 p-6 text-xl font-bold text-left bg-white rounded-[32px] hover:no-underline group">
                What is $DPIG?
                <div className="ml-auto">
                  <X className="w-6 h-6 hidden group-data-[state=open]:block" />
                  <Plus className="w-6 h-6 block group-data-[state=open]:hidden" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2 p-6 bg-white rounded-[32px] text-lg">
                A $DPIG is not just a what, it&apos;s a who, a why, and
                sometimes a where! $DPIG is the embodiment of crypto chaos and
                cuddly confusion!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-0">
              <AccordionTrigger className="flex gap-4 p-6 text-xl font-bold text-left bg-white rounded-[32px] hover:no-underline group">
                Is $DPIG a serious investment?
                <div className="ml-auto">
                  <X className="w-6 h-6 hidden group-data-[state=open]:block" />
                  <Plus className="w-6 h-6 block group-data-[state=open]:hidden" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2 p-6 bg-white rounded-[32px] text-lg">
                While we love to have fun, $DPIG is built on solid fundamentals
                and a strong community. However, always do your own research and
                invest responsibly!
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
                The Piggening is our community event where $DPIG holders come
                together to celebrate, share memes, and participate in exclusive
                rewards programs!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-0">
              <AccordionTrigger className="flex gap-4 p-6 text-xl font-bold text-left bg-white rounded-[32px] hover:no-underline group">
                How do I join the $DPIG community?
                <div className="ml-auto">
                  <X className="w-6 h-6 hidden group-data-[state=open]:block" />
                  <Plus className="w-6 h-6 block group-data-[state=open]:hidden" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2 p-6 bg-white rounded-[32px] text-lg">
                Join our Discord, follow us on Twitter, and of course, grab some
                $DPIG tokens to become part of our amazing community!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-0">
              <AccordionTrigger className="flex gap-4 p-6 text-xl font-bold text-left bg-white rounded-[32px] hover:no-underline group">
                What&apos;s next on the $DPIG roadmap?
                <div className="ml-auto">
                  <X className="w-6 h-6 hidden group-data-[state=open]:block" />
                  <Plus className="w-6 h-6 block group-data-[state=open]:hidden" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-2 p-6 bg-white rounded-[32px] text-lg">
                We&apos;re working on exclusive NFTs, governance implementation,
                and expanding our ecosystem. Stay tuned for more exciting
                announcements!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Decorative Image */}
        <div className="absolute right-0 bottom-0 hidden md:block">
          <div className="relative w-64 h-64">
            <Image
              src="/placeholder.svg"
              alt="Drunk Pig Mascot"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
