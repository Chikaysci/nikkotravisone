"use client";

import React from "react";
import { RevealWrapper } from "next-reveal";
import { FaGift } from "react-icons/fa";

function Gifts() {
  return (
    <section id="gifts" className="w-screen">
      <div className="min-h-[60vh] bg-gradient-to-b from-[#252525] to-[#1a1a1a] relative px-6 py-16 md:px-12 lg:px-20 flex items-center">
        <div className="max-w-3xl mx-auto relative z-10 w-full">
          {/* Section Header */}
          <RevealWrapper duration={1500} origin="top">
            <div className="text-center mb-12">
              <p className="text-[#d4af37]/60 tracking-[0.4em] text-xs uppercase mb-4">
                Registry
              </p>
              <h1 className="font-script text-5xl md:text-6xl text-[#d4af37] mb-4">
                Gifts
              </h1>
              <div className="w-24 h-[1px] bg-[#d4af37]/30 mx-auto"></div>
            </div>
          </RevealWrapper>

          {/* Content Card */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center">
              <FaGift className="text-[#d4af37]/30 text-5xl mx-auto mb-6" />
              <p className="text-[#d4af37]/70 leading-relaxed font-light text-base md:text-lg max-w-2xl mx-auto">
                Your presence at our wedding is truly the greatest gift we could ask for, so please don't feel any obligation to give us anything more. However, if you would like to celebrate with a gift, we've created a registry to make it simple and convenient.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default Gifts;
