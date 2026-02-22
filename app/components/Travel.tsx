"use client";

import React from "react";
import { RevealWrapper } from "next-reveal";
import { FaPlane, FaCar, FaBed, FaShip, FaExternalLinkAlt } from "react-icons/fa";

function Travel() {
  const hotels = [
    {
      name: "Hyatt Centric Waikiki Beach",
      url: "https://ckbqz04.na1.hubspotlinks.com/Ctc/5A+113/ckBqz04/VVWJs-4Zkq21N4SJ7lJhbRdQW4dVnpw5G86HYN6Q02qY5nXHCW50kH_H6lZ3phW34_qZs6ZG8pTW7zbGr-3dsJmpW4kNs-s6FG-zmW8GwCC_8Xs04fW6shKXw6Tl2VfW2gD0KV5SJHNGW3ndcGX944yYGW8K8l-d7dnp-WW43vZPB7jPcHzW63ytJX1N6dB1V69RTj8Xr8tLW4sQMXb77GrvsVs1R0P5mwdx6W4ycvvc9fMk5SW8_NKqF3TVKrZVJ71Z41YdqCPN1_x2PrP7NS1W6wWr_M5PpGVLW7l22lJ8PCmslW5ZfKX47jhfKwW1H1mW87wx-LlN5SSvg8x893QV6KQlV6GW4-rW9fBMrV6y07PSVRks6S23xg4HW3dQqjJ4NHBpsW2GN4tF35Y8QsW8k9Qh96r-TnLN4tgKtnpdnRPW5q5Ff96QhGFcW2Vk7Jr6PHK4KW6C4cVh27blPQf2mc2L604",
    },
    {
      name: "Wayfinder Waikiki Hotel",
      url: "https://be.synxis.com/?_hsenc=p2ANqtz-8wSmrVv5_lWj38LjZSOMILIHH-p8wjCD9EeugNbEry8-ZGD5jSrBVHOyuKYsqZKYMs0JmoeD0yHvoC5AjDkXtmU5vJfA&_hsmi=321159320&adult=1&arrive=2026-02-21&chain=21123&child=0&currency=USD&depart=2026-02-22&hotel=44886&level=hotel&locale=en-US&productcurrency=USD&promo=WEDHI&rooms=1&utm_campaign=Promos&utm_content=321159320&utm_medium=email&utm_source=hs_automation",
    },
    {
      name: "Embassy Suites by Hilton Waikiki Beach Walk",
      url: "https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=HNLESES&arrivalDate=2026-02-21&departureDate=2026-02-22&room1NumAdults=1&utm_campaign=Promos&utm_medium=email&_hsenc=p2ANqtz-9mX1IX10yqRM6Wa5n44kISbjiaT0VbxAgU8Wwe9fNu5rSRsjur0-lblCxeohZo-tH809bU5qm8DWWpVka06WL5Xf-NMA&_hsmi=321159320&utm_content=321159320&utm_source=hs_automation",
    },
  ];

  return (
    <section id="travel" className="w-screen">
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#252525] relative px-6 py-16 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto relative z-10">

          {/* Section Header */}
          <RevealWrapper duration={1500} origin="top">
            <div className="text-center mb-16">
              <p className="text-[#d4af37]/60 tracking-[0.4em] text-xs uppercase mb-4">
                Getting Here & Around
              </p>
              <h1 className="font-script text-5xl md:text-6xl text-[#d4af37] mb-4">
                Travel
              </h1>
              <div className="w-24 h-[1px] bg-[#d4af37]/30 mx-auto"></div>
            </div>
          </RevealWrapper>

          <div className="flex flex-col gap-6">

            {/* Airport */}
            <RevealWrapper duration={1500} origin="bottom">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <FaPlane className="text-[#d4af37]/70 text-xl" />
                </div>
                <div>
                  <h3 className="text-[#d4af37] font-semibold tracking-wider text-sm uppercase mb-2">Airport</h3>
                  <p className="text-[#d4af37]/70 font-light leading-relaxed">
                    <span className="text-[#d4af37]/90 font-medium">Daniel K. Inouye International Airport (HNL)</span> — Hawaii's main airport located in Honolulu on the island of O'ahu.
                  </p>
                </div>
              </div>
            </RevealWrapper>

            {/* Getting There */}
            <RevealWrapper duration={1500} origin="bottom">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <FaCar className="text-[#d4af37]/70 text-xl" />
                </div>
                <div>
                  <h3 className="text-[#d4af37] font-semibold tracking-wider text-sm uppercase mb-2">Getting There</h3>
                  <p className="text-[#d4af37]/70 font-light leading-relaxed">
                    The ceremony location is <span className="text-[#d4af37]/90 font-medium">30 minutes northeast of Waikiki Beach</span>.
                  </p>
                </div>
              </div>
            </RevealWrapper>

            {/* Accommodations */}
            <RevealWrapper duration={1500} origin="bottom">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <FaBed className="text-[#d4af37]/70 text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#d4af37] font-semibold tracking-wider text-sm uppercase mb-2">Waikiki Beach Resorts</h3>
                  <p className="text-[#d4af37]/70 font-light leading-relaxed mb-5">
                    There are many Resorts and Hotels to choose from. We have discounts to a few local accommodations. Just click the discount links below.
                  </p>
                  <div className="flex flex-col gap-3">
                    {hotels.map((hotel) => (
                      <a
                        key={hotel.name}
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#d4af37]/80 text-sm font-light border border-[#d4af37]/20 rounded-lg px-4 py-3 hover:bg-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="text-xs flex-shrink-0" />
                        {hotel.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </RevealWrapper>

            {/* Luau */}
            <RevealWrapper duration={1500} origin="bottom">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <FaShip className="text-[#d4af37]/70 text-xl" />
                </div>
                <div>
                  <h3 className="text-[#d4af37] font-semibold tracking-wider text-sm uppercase mb-2">Luau Experience</h3>
                  <p className="text-[#d4af37]/70 font-light leading-relaxed mb-4">
                    You are welcome to join the couple for a Luau experience the next day —{" "}
                    <span className="text-[#d4af37]/90 font-medium">Saturday at 4:30 PM</span> at{" "}
                    <span className="text-[#d4af37]/90 font-medium">Ka Moana Luau</span>.
                  </p>
                  <a
                    href="https://www.moanaluau.com/?gad_source=1&gad_campaignid=21496903425&gbraid=0AAAAADFLGVN0nIcnzwEUkWUdfbO8Zvih5&gclid=CjwKCAiAzOXMBhASEiwAe14SadSsopP8prB-afaarVmoD9Vhb7rOV8X2jq5dSlpy1vXQK-IXrfv4EhoCCGgQAvD_BwE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#d4af37]/80 text-sm font-light border border-[#d4af37]/20 rounded-lg px-4 py-3 hover:bg-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Ka Moana Luau
                  </a>
                </div>
              </div>
            </RevealWrapper>

            {/* Other Activities */}
            <RevealWrapper duration={1500} origin="bottom">
              <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-2xl p-6 md:p-8 text-center">
                <p className="text-[#d4af37]/60 text-sm font-light mb-4 tracking-wider uppercase">Looking for more things to do?</p>
                <a
                  href="https://www.viator.com/Oahu-tourism/d672-r16234073291-s110445371?gclsrc=aw.ds&&m=63845&supag=80085747805&supca=7851312219&supsc=aud-435409373039:kwd-298357396713&supai=692007798235&supap=&supdv=c&supnt=nt:g&suplp=9012252&supli=&supti=aud-435409373039:kwd-298357396713&tsem=true&supci=aud-435409373039:kwd-298357396713&supap1=&supap2=&synthetic_keyword=honolulu%20activities&suppmas=&gad_source=1&gad_campaignid=7851312219&gbraid=0AAAAAD-gbd45tmjAibntenyx_mw4-82Oc&gclid=CjwKCAiAzOXMBhASEiwAe14SaWJCHKRluAuja206HdTAjpXR38kYEzFYQZJ8ikZf2n7IEHVCI9p9vhoC3NkQAvD_BwE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 border border-[#d4af37]/40 rounded-full text-[#d4af37]/80 text-sm tracking-wider uppercase hover:bg-[#d4af37]/10 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Explore Oahu Activities
                </a>
              </div>
            </RevealWrapper>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Travel;
