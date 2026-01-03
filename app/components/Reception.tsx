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
              <p className="text-white/60 tracking-[0.4em] text-xs uppercase mb-4">
                Celebrate With Us
              </p>
              <h1 className="font-script text-5xl md:text-6xl text-white mb-4">
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
                    <GiPartyPopper className="text-white/20 text-6xl mx-auto mb-4" />
                    <p className="text-white/80 tracking-[0.3em] text-lg uppercase">
                      Dinner & Dancing
                    </p>
                    <p className="text-white/50 tracking-[0.2em] text-sm mt-2">
                      Following the Ceremony
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
                      <AiFillClockCircle className="text-white/80 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-light tracking-wider mb-2">
                        TIME
                      </h3>
                      <p className="text-white/70 text-lg">6:00 PM - 11:00 PM</p>
                      <p className="text-white/50 text-sm mt-1">
                        Cocktail hour begins at 6:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <HiLocationMarker className="text-white/80 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-light tracking-wider mb-2">
                        VENUE
                      </h3>
                      <p className="text-white/70 text-lg">
                        The Modern Honolulu
                      </p>
                      <p className="text-white/50 text-sm mt-1">
                        1775 Ala Moana Blvd, Honolulu, HI 96815
                      </p>
                    </div>
                  </div>
                </div>

                {/* Event Schedule */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <h3 className="text-white/50 tracking-[0.2em] text-xs uppercase mb-6 text-center">
                    Evening Schedule
                  </h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                        <span className="text-white/60 text-sm">1</span>
                      </div>
                      <p className="text-white/70 text-sm font-light">Cocktails</p>
                      <p className="text-white/40 text-xs mt-1">6:00 PM</p>
                    </div>
                    <div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                        <IoRestaurant className="text-white/60 text-sm" />
                      </div>
                      <p className="text-white/70 text-sm font-light">Dinner</p>
                      <p className="text-white/40 text-xs mt-1">7:00 PM</p>
                    </div>
                    <div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                        <GiPartyPopper className="text-white/60 text-sm" />
                      </div>
                      <p className="text-white/70 text-sm font-light">Dancing</p>
                      <p className="text-white/40 text-xs mt-1">8:30 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map Button */}
                <div className="mt-8 text-center">
                  <a
                    href="https://www.google.com/maps/place/The+Modern+Honolulu/@21.2868,-157.8419,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 rounded-full text-white/80 text-sm tracking-wider uppercase hover:bg-white/10 transition-all duration-300"
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
              <p className="text-white/50 italic text-sm max-w-md mx-auto leading-relaxed">
                "Let's eat, drink, and dance the night away as we celebrate love and new beginnings."
              </p>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default Reception;
