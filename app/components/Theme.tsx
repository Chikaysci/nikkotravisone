"use client";

import React from "react";
import { RevealWrapper } from "next-reveal";

function Theme() {
  const colors = [
    { name: "Navy", hex: "#1e3a5f", textLight: true },
    { name: "Gold", hex: "#d4af37", textLight: false },
    { name: "Ivory", hex: "#fffff0", textLight: false },
    { name: "Blush", hex: "#de98ab", textLight: false },
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
              <p className="text-white/60 tracking-[0.4em] text-xs uppercase mb-4">
                Wedding Aesthetic
              </p>
              <h1 className="font-script text-5xl md:text-6xl text-white mb-4">
                Our Theme
              </h1>
              <div className="w-24 h-[1px] bg-white/30 mx-auto"></div>
            </div>
          </RevealWrapper>

          {/* Color Palette */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden p-8 md:p-12">
              <h3 className="text-white/50 tracking-[0.2em] text-xs uppercase mb-8 text-center">
                Color Palette
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {colors.map((color) => (
                  <div key={color.name} className="text-center">
                    <div
                      className="w-full aspect-square rounded-xl mb-3 border border-white/10 shadow-lg"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <p className="text-white/70 text-sm font-light">{color.name}</p>
                    <p className="text-white/40 text-xs mt-1">{color.hex}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* Dress Code */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden p-8 md:p-12">
              <h3 className="text-white/50 tracking-[0.2em] text-xs uppercase mb-6 text-center">
                Dress Code
              </h3>
              <div className="text-center mb-8">
                <p className="text-white text-2xl font-light tracking-wide">
                  Formal / Black Tie Optional
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-10">
                {/* For Him */}
                <div className="text-center p-6 border border-white/10 rounded-xl">
                  <p className="text-white/60 tracking-[0.2em] text-xs uppercase mb-4">
                    For Him
                  </p>
                  <ul className="text-white/70 text-sm space-y-2 font-light">
                    <li>Dark suit or tuxedo</li>
                    <li>Navy, charcoal, or black</li>
                    <li>Tie or bow tie</li>
                    <li>Dress shoes</li>
                  </ul>
                </div>

                {/* For Her */}
                <div className="text-center p-6 border border-white/10 rounded-xl">
                  <p className="text-white/60 tracking-[0.2em] text-xs uppercase mb-4">
                    For Her
                  </p>
                  <ul className="text-white/70 text-sm space-y-2 font-light">
                    <li>Floor-length gown or cocktail dress</li>
                    <li>Colors from our palette welcome</li>
                    <li>Please avoid white or ivory</li>
                    <li>Elegant accessories</li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Theme Description */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden p-8 md:p-12">
              <h3 className="text-white/50 tracking-[0.2em] text-xs uppercase mb-6 text-center">
                The Vision
              </h3>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-white/70 leading-relaxed font-light">
                  Our wedding celebrates the beauty of Hawaiian sunsets and ocean waves.
                  We've chosen a palette of deep navy blues reminiscent of the Pacific,
                  warm golds reflecting the island sun, and soft blush tones inspired by
                  tropical flowers. We invite you to embrace this elegant tropical atmosphere
                  as we say "I do" in paradise.
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="mt-10 flex justify-center gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#d4af37] mx-auto mb-3 opacity-60"></div>
                  <p className="text-white/40 text-xs">Elegance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#de98ab] mx-auto mb-3 opacity-60"></div>
                  <p className="text-white/40 text-xs">Romance</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#de98ab] to-[#fffff0] mx-auto mb-3 opacity-60"></div>
                  <p className="text-white/40 text-xs">Paradise</p>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Additional Note */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-12 text-center">
              <p className="text-white/50 italic text-sm max-w-md mx-auto leading-relaxed">
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
