"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import FloatingQuoteButton from "@/components/ui/floating-quote-button";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[103px]">
        {/* Hero */}
        <section className="bg-black py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black text-white mb-6"
              >
                GET IN <span className="text-[#F2913F]">TOUCH</span>
              </motion.h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or need expert consulting? We're here to help you build the future.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Contact Information</h2>
                  <div className="space-y-10">
                    <div className="flex gap-6">
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#F2913F] flex-shrink-0">
                        <MapPin size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Our Office</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                          RADHA KRISHNA PALLY, BENACHITY, DURGAPUR,<br />
                          West Bengal, India — 713213
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#F2913F] flex-shrink-0">
                        <Phone size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Phone</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                          +91 7001998007 (General)<br />
                          {/* +91 7001998007 (Inquiries) */}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#F2913F] flex-shrink-0">
                        <Mail size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Email</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                          evergreen_construction@rediffmail.com<br />
                          {/* evergreen_construction@rediffmail.com */}
                        </p>
                      </div>
                    </div>
                  </div>


                {/* Map */}
                <div className="mt-16 rounded-[40px] overflow-hidden shadow-2xl h-[400px] border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.654876!2d87.3123456!3d23.5432109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f771234567890!2sDurgapur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100"
              >
                  {status === "success" ? (
                    <div className="text-center py-20">
                      <CheckCircle2 className="w-20 h-20 text-[#F2913F] mx-auto mb-6" />
                      <h3 className="text-3xl font-black mb-4">Message Sent!</h3>
                      <p className="text-gray-600 mb-8">
                        Thank you for reaching out. One of our specialists will contact you within 24 hours.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="text-[#F2913F] font-bold hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Full Name</label>
                          <input
                            type="text"
                            required
                            className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-[#F2913F] transition-all shadow-sm"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Email Address</label>
                          <input
                            type="email"
                            required
                            className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-[#F2913F] transition-all shadow-sm"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Subject</label>
                        <select className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-[#F2913F] transition-all shadow-sm">
                          <option>Request a Quote</option>
                          <option>Technical Consultation</option>
                          <option>Project Inquiry</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Message</label>
                        <textarea
                          rows={6}
                          required
                          className="w-full px-6 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-[#F2913F] transition-all shadow-sm resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-black text-white py-6 rounded-2xl font-black text-xl hover:bg-[#F2913F] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl disabled:opacity-50 group"
                      >
                        {status === "loading" ? "Sending..." : "Send Message"}
                        <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </form>
                  )}

              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
}
