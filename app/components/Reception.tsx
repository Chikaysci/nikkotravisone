"use client";

import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { IoRestaurant } from "react-icons/io5";
import { GiPartyPopper } from "react-icons/gi";
import { RevealWrapper } from "next-reveal";

function Reception() {
  return (
    <section id="reception" className="w-screen">
      <div className="min-h-screen bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] relative px-6 py-16 md:px-12 lg:px-20">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a1a1a] to-transparent"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section Header */}
          <RevealWrapper duration={1500} origin="top">
            <div className="text-center mb-16">
              <p className="text-[#d4af37]/60 tracking-[0.4em] text-xs uppercase mb-4">
                Celebrate With Us
              </p>
              <h1 className="font-script text-5xl md:text-6xl text-[#d4af37] mb-4">
                The Reception
              </h1>
              <div className="w-24 h-[1px] bg-white/30 mx-auto"></div>
            </div>
          </RevealWrapper>

          {/* Reception Details Card */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              {/* Image Header */}
              <div className="h-64 md:h-80 bg-gradient-to-br from-[#4a4a4a] to-[#3a3a3a] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <GiPartyPopper className="text-[#d4af37]/20 text-6xl mx-auto mb-4" />
                    <p className="text-[#d4af37]/80 tracking-[0.3em] text-lg uppercase">
                      Dinner & Dancing
                    </p>
                    <p className="text-[#d4af37]/50 tracking-[0.2em] text-sm mt-2">
                      Following the Ceremony
                    </p>
                    <p className="text-[#d4af37]/70 text-sm mt-4 max-w-sm mx-auto font-light italic leading-relaxed">
                      "Step behind the velvet curtain and join us for a late-night speakeasy wedding reception -- killer cocktails, good music and unforgettable party vibes"
                    </p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 border border-white/10 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border border-white/10 rounded-full"></div>
              </div>

              {/* Details Content */}
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Time */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <AiFillClockCircle className="text-[#d4af37]/80 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-[#d4af37] font-light tracking-wider mb-2">
                        TIME
                      </h3>
                      <p className="text-[#d4af37]/70 text-lg">5:00 PM - 9:00 PM</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <HiLocationMarker className="text-[#d4af37]/80 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-[#d4af37] font-light tracking-wider mb-2">
                        VENUE
                      </h3>
                      <p className="text-[#d4af37]/70 text-lg">
                        Hi Brau Speakeasy - Aloha Beer Co
                      </p>
                      <p className="text-[#d4af37]/50 text-sm mt-1">
                        700 Queen St, Honolulu, HI 96813
                      </p>
                    </div>
                  </div>
                </div>

                {/* Event Schedule */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <h3 className="text-[#d4af37]/50 tracking-[0.2em] text-xs uppercase mb-6 text-center">
                    Evening Schedule
                  </h3>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#d4af37]/60 text-sm">🍸</span>
                      </div>
                      <div>
                        <p className="text-[#d4af37]/80 text-sm font-semibold">5PM — Cocktails</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <IoRestaurant className="text-[#d4af37]/60 text-sm" />
                      </div>
                      <div>
                        <p className="text-[#d4af37]/80 text-sm font-semibold">6PM — Dinner</p>
                        <p className="text-[#d4af37]/60 text-xs mt-1 font-light leading-relaxed">
                          Buffet-style small plates — grab a few favorites, share the love, and keep the good times (and drinks) flowing
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <GiPartyPopper className="text-[#d4af37]/60 text-sm" />
                      </div>
                      <div>
                        <p className="text-[#d4af37]/80 text-sm font-semibold">7PM–9PM — Dancing</p>
                        <p className="text-[#d4af37]/60 text-xs mt-1 font-light leading-relaxed">
                          The DJ knows our vibe — expect high energy EDM favorites cranked up, blended with old-school upbeat anthems
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Button */}
                <div className="mt-8 text-center">
                  <a
                    href="https://maps.app.goo.gl/CUnkFtmeMg5ph1Ux8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 rounded-full text-[#d4af37]/80 text-sm tracking-wider uppercase hover:bg-white/10 transition-all duration-300"
                  >
                    <HiLocationMarker />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Additional Note */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-12 text-center">
              <p className="text-[#d4af37]/50 italic text-sm max-w-md mx-auto leading-relaxed">
                "Let the music play, the glasses clink, and the dance floor fill as we gather to celebrate love, commitment, and the joyful start of our married life"
              </p>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default Reception;
