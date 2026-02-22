"use client";

import React, { useState } from "react";
import { RevealWrapper } from "next-reveal";
import { IoSend } from "react-icons/io5";
import { FaCheck, FaHeart } from "react-icons/fa";

function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: "1",
    dietaryRestrictions: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="rsvp" className="w-screen">
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] relative px-6 py-16 md:px-12 lg:px-20">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a1a1a] to-transparent"></div>

        <div className="max-w-2xl mx-auto relative z-10">
          {/* Section Header */}
          <RevealWrapper duration={1500} origin="top">
            <div className="text-center mb-12">
              <p className="text-[#d4af37]/60 tracking-[0.4em] text-xs uppercase mb-4">
                We Hope You Can Make It
              </p>
              <h1 className="font-script text-5xl md:text-6xl text-[#d4af37] mb-4">
                RSVP
              </h1>
              <div className="w-24 h-[1px] bg-white/30 mx-auto mb-6"></div>
              <p className="text-[#d4af37]/50 text-sm max-w-md mx-auto">
                Please respond by July 1st, 2026
              </p>
            </div>
          </RevealWrapper>

          {/* RSVP Form or Success Message */}
          <RevealWrapper duration={1500} origin="bottom">
            {isSubmitted ? (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <FaCheck className="text-green-400 text-3xl" />
                </div>
                <h2 className="text-[#d4af37] text-2xl font-light mb-4">
                  Thank You!
                </h2>
                <p className="text-[#d4af37]/70 leading-relaxed">
                  Your response has been received. We can't wait to celebrate with you!
                </p>
                <div className="mt-8 flex justify-center">
                  <FaHeart className="text-red-400/60 text-2xl animate-pulse" />
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
              >
                {/* Name */}
                <div className="mb-6">
                  <label className="block text-[#d4af37]/60 text-xs tracking-wider uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-[#d4af37] placeholder-[#d4af37]/30 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block text-[#d4af37]/60 text-xs tracking-wider uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-[#d4af37] placeholder-[#d4af37]/30 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Attendance */}
                <div className="mb-6">
                  <label className="block text-[#d4af37]/60 text-xs tracking-wider uppercase mb-2">
                    Will You Attend? *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label
                      className={`flex items-center justify-center gap-2 px-4 py-3 border rounded-lg cursor-pointer transition-all ${
                        formData.attendance === "yes"
                          ? "bg-white/20 border-white/40 text-[#d4af37]"
                          : "bg-white/5 border-white/20 text-[#d4af37]/60 hover:border-white/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value="yes"
                        checked={formData.attendance === "yes"}
                        onChange={handleChange}
                        className="hidden"
                        required
                      />
                      <span>Joyfully Accept</span>
                    </label>
                    <label
                      className={`flex items-center justify-center gap-2 px-4 py-3 border rounded-lg cursor-pointer transition-all ${
                        formData.attendance === "no"
                          ? "bg-white/20 border-white/40 text-[#d4af37]"
                          : "bg-white/5 border-white/20 text-[#d4af37]/60 hover:border-white/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value="no"
                        checked={formData.attendance === "no"}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span>Regretfully Decline</span>
                    </label>
                  </div>
                </div>

                {/* Number of People Attending - always visible */}
                <div className="mb-6">
                  <label className="block text-[#d4af37]/60 text-xs tracking-wider uppercase mb-2">
                    # of People Attending
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-[#d4af37] focus:outline-none focus:border-white/40 transition-colors"
                  >
                    <option value="1" className="bg-[#2d2d2d]">1 Person</option>
                    <option value="2" className="bg-[#2d2d2d]">2 People</option>
                    <option value="3" className="bg-[#2d2d2d]">3 People</option>
                    <option value="4" className="bg-[#2d2d2d]">4 People</option>
                  </select>
                </div>

                {/* Dietary Restrictions - only if attending */}
                {formData.attendance === "yes" && (
                  <div className="mb-6">
                    <label className="block text-[#d4af37]/60 text-xs tracking-wider uppercase mb-2">
                      Dietary Restrictions
                    </label>
                    <input
                      type="text"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-[#d4af37] placeholder-[#d4af37]/30 focus:outline-none focus:border-white/40 transition-colors"
                      placeholder="Vegetarian, vegan, allergies, etc."
                    />
                  </div>
                )}

                {/* Message from the Couple - shown when declining */}
                {formData.attendance === "no" && (
                  <div className="mb-6 bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-xl p-6">
                    <p className="text-[#d4af37]/60 text-xs tracking-wider uppercase mb-3">Message from the Couple</p>
                    <p className="text-[#d4af37]/70 text-sm font-light leading-relaxed italic">
                      "To those who can't celebrate with us in person, we'll miss you dearly and appreciate your love and support. If you would still like to send a gift, we've created a registry to make it simple and convenient."
                    </p>
                  </div>
                )}

                {/* Message for the Couple */}
                <div className="mb-8">
                  <label className="block text-[#d4af37]/60 text-xs tracking-wider uppercase mb-2">
                    Message for the Couple
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-[#d4af37] placeholder-[#d4af37]/30 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    placeholder="Share your wishes or any questions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 rounded-full text-[#d4af37] tracking-wider uppercase hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <IoSend />
                      <span>Send RSVP</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </RevealWrapper>

          {/* Contact Info */}
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-12 text-center">
              <p className="text-[#d4af37]/40 text-xs tracking-wider uppercase mb-2">
                Questions?
              </p>
              <p className="text-[#d4af37]/60 text-sm">
                Contact us at{" "}
                <a
                  href="mailto:nikkoandtravis@wedding.com"
                  className="text-[#d4af37]/80 underline underline-offset-2 hover:text-[#d4af37] transition-colors"
                >
                  nikkoandtravis@wedding.com
                </a>
              </p>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default RSVP;
