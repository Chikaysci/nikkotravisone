"use client";

import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { RevealWrapper } from "next-reveal";

function Ceremony() {
  return (
    <section id="ceremony" className="w-screen">
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] relative px-6 py-16 md:px-12 lg:px-20">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section Header */}
          <RevealWrapper duration={1500} origin="top">
            <div className="text-center mb-16">
              <p className="text-white/60 tracking-[0.4em] text-xs uppercase mb-4">
                Join Us For
              </p>
              <h1 className="font-script text-5xl md:text-6xl text-white mb-4">
                The Ceremony
              </h1>
              <div className="w-24 h-[1px] bg-white/30 mx-auto"></div>
            </div>
          </RevealWrapper>

          {/* Ceremony Details Card */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              {/* Image Header */}
              <div className="h-64 md:h-80 bg-gradient-to-br from-[#3a3a3a] to-[#2a2a2a] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white/40 tracking-[0.3em] text-sm uppercase">
                      Friday
                    </p>
                    <p className="text-white text-7xl md:text-8xl font-light">
                      02
                    </p>
                    <p className="text-white/60 tracking-[0.2em] text-lg">
                      OCTOBER 2026
                    </p>
                  </div>
                </div>
                {/* Decorative rings */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-white/10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/10 rounded-full"></div>
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
                      <p className="text-white/70 text-lg">4:00 PM</p>
                      <p className="text-white/50 text-sm mt-1">
                        Please arrive 30 minutes early
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
                        Haiku Gardens
                      </p>
                      <p className="text-white/50 text-sm mt-1">
                        46-336 Haiku Rd, Kaneohe, HI 96744
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dress Code */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="text-center">
                    <p className="text-white/50 tracking-[0.2em] text-xs uppercase mb-2">
                      Dress Code
                    </p>
                    <p className="text-white text-xl font-light tracking-wide">
                      Formal Attire
                    </p>
                  </div>
                </div>

                {/* Map Button */}
                <div className="mt-8 text-center">
                  <a
                    href="https://www.google.com/maps/place/Haiku+Gardens/@21.4184,-157.8394,17z"
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
                "Two souls, one heart. We invite you to witness the beginning of our forever."
              </p>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default Ceremony;
