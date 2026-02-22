"use client";

import { useEffect, useState } from "react";
import Countdown from "./components/Countdown";
import ArRum from "./components/ArRum";
import Hero from "./components/Hero";
import Ceremony from "./components/Ceremony";
import Profile from "./components/Profile";
import WeddingEvents from "./components/WeddingEvents";
import Reception from "./components/Reception";
import Theme from "./components/Theme";
import Gallery from "./components/Gallery";
import Gifts from "./components/Gifts";
import Travel from "./components/Travel";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import { RevealWrapper } from "next-reveal";

export default function Home() {
  const [currentOverflow, setCurrentOverflow] = useState("hidden");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflowY = currentOverflow;
  }, [currentOverflow]);

  return (
    <main className="w-screen">
      <RevealWrapper duration={1500}>
        <Hero setCurrentOverflow={setCurrentOverflow} />
      </RevealWrapper>
      {/* Content sections */}
      <Ceremony />
      <Reception />
      <Theme />
      <Gallery />
      <Gifts />
      <Travel />
      <RSVP />
      {/*
      <div className="max-w-[28.125rem] mx-auto">
        <Countdown />
        <ArRum />
        <Profile />
        <WeddingEvents />
        <Footer />
      </div>
      */}
    </main>
  );
}
