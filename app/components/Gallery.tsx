"use client";

import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RevealWrapper } from "next-reveal";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: "/images/gallery/gallery1.png", alt: "Gallery 1" },
    { src: "/images/gallery/gallery2.png", alt: "Gallery 2" },
    { src: "/images/gallery/gallery3.png", alt: "Gallery 3" },
    { src: "/images/gallery/gallery4.png", alt: "Gallery 4" },
    { src: "/images/gallery/gallery5.png", alt: "Gallery 5" },
    { src: "/images/gallery/gallery6.png", alt: "Gallery 6" },
    { src: "/images/gallery/gallery7.png", alt: "Gallery 7" },
    { src: "/images/gallery/gallery8.png", alt: "Gallery 8" },
    { src: "/images/gallery/gallery9.png", alt: "Gallery 9" },
    { src: "/images/gallery/gallery10.png", alt: "Gallery 10" },
    { src: "/images/gallery/gallery11.png", alt: "Gallery 11" },
    { src: "/images/gallery/gallery12.png", alt: "Gallery 12" },
  ];

  return (
    <section id="gallery" className="w-screen">
      <div className="min-h-screen bg-gradient-to-b from-[#252525] to-[#1a1a1a] relative px-6 py-16 md:px-12 lg:px-20">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#252525] to-transparent"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section Header */}
          <RevealWrapper duration={1500} origin="top">
            <div className="text-center mb-16">
              <p className="text-[#d4af37]/60 tracking-[0.4em] text-xs uppercase mb-4">
                Our Moments
              </p>
              <h1 className="font-script text-5xl md:text-6xl text-[#d4af37] mb-4">
                Gallery
              </h1>
              <div className="w-24 h-[1px] bg-white/30 mx-auto mb-3"></div>
              <p className="text-[#d4af37]/40 text-xs tracking-widest italic">
                Courtesy of Griffith Tabugoc
              </p>
            </div>
          </RevealWrapper>

          {/* Quote Section */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="text-center mb-12 max-w-xl mx-auto">
              <FaQuoteRight className="text-[#d4af37]/20 text-3xl mx-auto mb-4" />
              <p className="text-[#d4af37]/70 italic font-light leading-relaxed">
                "From the moment I first saw you, I knew I was finally home.
                All I want is to make your dreams come true and share our journey together."
              </p>
            </div>
          </RevealWrapper>

          {/* Photo Grid */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 md:grid-rows-[repeat(auto,minmax(0,1fr))]" style={{ gridAutoRows: "200px" }}>
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm tracking-wider">
                      View
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </RevealWrapper>

          {/* Additional Note */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-12 text-center">
              <p className="text-[#d4af37]/50 italic text-sm max-w-md mx-auto leading-relaxed">
                "Every love story is beautiful, but ours is our favorite."
              </p>
            </div>
          </RevealWrapper>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-[#d4af37]/80 hover:text-[#d4af37] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <IoClose className="text-3xl" />
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
