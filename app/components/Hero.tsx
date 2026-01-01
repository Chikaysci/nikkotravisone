"use client";

import React from "react";
import { RxEnvelopeOpen } from "react-icons/rx";
import useSound from "use-sound";
import { RevealWrapper } from "next-reveal";

function Hero({
  setCurrentOverflow,
}: {
  setCurrentOverflow: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [play] = useSound("/audio/backsound.mp3", {
    volume: 0.25,
  });

  return (
    <section id="hero">
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        {/* Save the Date Card */}
        <div className="bg-[#4a4a4a] border border-[#8a8a7a]/40 p-6 sm:p-8 max-w-[360px] w-full">
          <div className="border border-[#8a8a7a]/30 p-6 sm:p-8">
            <div className="flex">
              {/* Left side - Date numbers */}
              <div className="flex flex-col justify-center pr-4 sm:pr-6">
                <span className="text-[#3a3a3a] text-7xl sm:text-8xl font-bold leading-[0.85]">10</span>
                <span className="text-[#3a3a3a] text-7xl sm:text-8xl font-bold leading-[0.85]">02</span>
                <span className="text-[#3a3a3a] text-7xl sm:text-8xl font-bold leading-[0.85]">26</span>
              </div>

              {/* Right side - Text content */}
              <div className="flex flex-col justify-center text-white pl-2 sm:pl-4">
                <div className="mb-4">
                  <p className="text-lg sm:text-xl tracking-[0.3em] font-light">SAVE</p>
                  <p className="font-script text-xl sm:text-2xl -mt-1">the</p>
                  <p className="text-lg sm:text-xl tracking-[0.3em] font-light -mt-1">DATE</p>
                </div>

                <p className="font-script text-sm sm:text-base mb-3">for the wedding of</p>

                <div className="mb-4">
                  <p className="text-lg sm:text-xl tracking-[0.2em] font-light">NIKKO</p>
                  <p className="font-script text-xl sm:text-2xl -mt-1">and</p>
                  <p className="text-lg sm:text-xl tracking-[0.2em] font-light -mt-1">TRAVIS</p>
                </div>

                <div className="mb-4">
                  <p className="text-[10px] sm:text-xs tracking-[0.2em] font-light">OCTOBER 02, 2026</p>
                  <p className="text-[10px] sm:text-xs tracking-[0.2em] font-light">HONOLULU, HAWAII</p>
                </div>

                <p className="font-script text-sm sm:text-base">invitation to follow</p>
              </div>
            </div>

            {/* Open invitation button */}
            <RevealWrapper duration={4000} origin="bottom">
              <a
                href="#countdown"
                onClick={() => {
                  setCurrentOverflow("auto");
                  play();
                }}
                className="font-bold text-xs bg-[#ffffff20] border border-[#8a8a7a]/50 rounded flex items-center justify-center gap-2 px-4 py-2 mt-6 hover:scale-95 ease-linear duration-200 text-white/90 mx-auto w-fit"
              >
                <RxEnvelopeOpen />
                <span>Open Invitation</span>
              </a>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
