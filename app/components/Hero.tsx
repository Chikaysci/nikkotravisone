"use client";

import React from "react";
import useSound from "use-sound";

function Hero({
  setCurrentOverflow,
}: {
  setCurrentOverflow: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [play] = useSound("/audio/backsound.mp3", {
    volume: 0.25,
  });

  const handleNavClick = (sectionId: string) => {
    setCurrentOverflow("auto");
    play();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const navItems = [
    { label: "Ceremony", id: "ceremony" },
    { label: "Reception", id: "reception" },
    { label: "Theme", id: "theme" },
    { label: "Gallery", id: "gallery" },
    { label: "RSVP", id: "rsvp" },
  ];

  return (
    <section id="hero" className="relative min-h-screen w-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-screen h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero/background.jpg')" }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen w-screen flex">
        {/* Left Side Navigation */}
        <div className="flex flex-col justify-center pl-6 sm:pl-10 md:pl-16 py-8">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="group relative text-left px-6 py-3 text-white font-light tracking-[0.25em] text-sm sm:text-base uppercase transition-all duration-300 hover:tracking-[0.35em]"
              >
                {/* Button background */}
                <span className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40"></span>

                {/* Button text */}
                <span className="relative z-10">{item.label}</span>

                {/* Hover accent line */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-2"></span>
              </button>
            ))}
          </nav>
        </div>

        {/* Center/Right Content - Names */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xs sm:text-sm tracking-[0.4em] font-light mb-4 opacity-80">
              THE WEDDING OF
            </p>
            <h1 className="font-script text-4xl sm:text-5xl md:text-6xl mb-2">
              Nikko & Travis
            </h1>
            <p className="text-xs sm:text-sm tracking-[0.3em] font-light opacity-80">
              OCTOBER 02, 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
