"use client";

import React from "react";
import { RevealWrapper } from "next-reveal";

function Theme() {
  const colors = [
    { name: "Black", hex: "#1a1a1a", textLight: true },
    { name: "White", hex: "#ffffff", textLight: false },
    { name: "Beige", hex: "#c8b89a", textLight: false },
    { name: "Gold Accessories", hex: "#d4af37", textLight: false },
  ];

  return (
    <section id="theme" className="w-screen">
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#252525] relative px-6 py-16 md:px-12 lg:px-20">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a1a1a] to-transparent"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section Header */}
          <RevealWrapper duration={1500} origin="top">
            <div className="text-center mb-16">
              <p className="text-[#d4af37]/60 tracking-[0.4em] text-xs uppercase mb-4">
                Wedding Aesthetic
              </p>
              <h1 className="font-script text-5xl md:text-6xl text-[#d4af37] mb-4">
                Our Theme
              </h1>
              <div className="w-24 h-[1px] bg-white/30 mx-auto"></div>
            </div>
          </RevealWrapper>

          {/* Color Palette */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden p-8 md:p-12">
              <h3 className="text-[#d4af37]/50 tracking-[0.2em] text-xs uppercase mb-8 text-center">
                Dress shade selected from the color palette
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {colors.map((color) => (
                  <div key={color.name} className="text-center">
                    <div
                      className="w-full aspect-square rounded-xl mb-3 border border-white/10 shadow-lg"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <p className="text-[#d4af37]/70 text-sm font-light">{color.name}</p>
                    <p className="text-[#d4af37]/40 text-xs mt-1">{color.hex}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* Dress Code */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden p-8 md:p-12">
              <h3 className="text-[#d4af37]/50 tracking-[0.2em] text-xs uppercase mb-6 text-center">
                Dress Code
              </h3>
              <div className="text-center mb-8">
                <p className="text-[#d4af37] text-2xl font-light tracking-wide">
                  Black, White & Beige — Gold Accessories
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                {/* For Him & For Her combined */}
                <div className="p-6 border border-white/10 rounded-xl">
                  <div className="mb-6">
                    <p className="text-[#d4af37]/60 tracking-[0.2em] text-xs uppercase mb-3">
                      For Him
                    </p>
                    <ul className="text-[#d4af37]/70 text-sm space-y-2 font-light">
                      <li>Suit or Tuxedo</li>
                      <li>Tie or Bow tie</li>
                    </ul>
                  </div>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-[#d4af37]/60 tracking-[0.2em] text-xs uppercase mb-3">
                      For Her
                    </p>
                    <ul className="text-[#d4af37]/70 text-sm space-y-2 font-light">
                      <li>Feel free to wear white</li>
                      <li>Elegant accessories</li>
                    </ul>
                  </div>
                </div>

                {/* Note */}
                <div className="text-left p-6 border border-[#d4af37]/30 bg-[#d4af37]/5 rounded-xl">
                  <p className="text-[#d4af37]/60 tracking-[0.2em] text-xs uppercase mb-4">
                    Note
                  </p>
                  <ul className="text-[#d4af37]/70 text-sm space-y-3 font-light">
                    <li>👞👡 Wear comfortable dress shoes for the garden wedding ceremony</li>
                    <li>🍷🎩 Feel free to wear semi-formal clothing to the reception</li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Theme Description */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden p-8 md:p-12">
              <h3 className="text-[#d4af37]/50 tracking-[0.2em] text-xs uppercase mb-6 text-center">
                The Vision
              </h3>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[#d4af37]/70 leading-relaxed font-light">
                  Our wedding celebrates the beauty of Hawaiian sunsets and tropical garden. We've chosen a palette of black reminiscent of strength, power and resilience. White represents joyful new beginnings. Finally, beige symbolizes calm, stability, and grounded simplicity. We invite you to embrace this elegant tropical atmosphere as we say "I do" in paradise.
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="mt-10 flex justify-center gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#3a3a3a] mx-auto mb-3 opacity-80 border border-white/10"></div>
                  <p className="text-[#d4af37]/60 text-xs tracking-widest uppercase">Resilience</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c8b89a] to-[#d4c5a9] mx-auto mb-3 opacity-80 border border-white/20"></div>
                  <p className="text-[#d4af37]/60 text-xs tracking-widest uppercase">Stability</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ffffff] to-[#c8b89a] mx-auto mb-3 opacity-80 border border-white/20"></div>
                  <p className="text-[#d4af37]/60 text-xs tracking-widest uppercase">Joy</p>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Additional Note */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-12 text-center">
              <p className="text-[#d4af37]/50 italic text-sm max-w-md mx-auto leading-relaxed">
                "Dress to celebrate love under the Hawaiian sky."
              </p>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default Theme;
