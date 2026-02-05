"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import FloatingQuoteButton from "@/components/ui/floating-quote-button";
import { supabase } from "@/lib/supabase";
import { Upload, CheckCircle2, AlertCircle, Users, HardHat } from "lucide-react";

export default function RecruitmentPage() {
  const [formData, setFormData] = useState({
    type: "worker",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      let file_url = "";
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('recruitment-files')
          .upload(fileName, file);

        if (uploadError) throw uploadError;
        file_url = uploadData.path;
      }

      const { error } = await supabase.from("recruitment_applications").insert([
        { ...formData, file_url }
      ]);

      if (error) throw error;
      setStatus("success");
      setFormData({ type: "worker", name: "", email: "", phone: "", message: "" });
      setFile(null);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[103px]">
        {/* Hero */}
        <section className="bg-black py-24 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black text-white mb-6"
              >
                JOIN OUR <span className="text-[#F2913F]">TEAM</span>
              </motion.h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Whether you're a skilled engineer or a trusted subcontractor, EVERGREEN offers unparalleled opportunities for growth and collaboration.
            </p>
          </div>
        </section>

        {/* Recruitment Info */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Work With the Best</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-[#F2913F]">
                      <HardHat size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">For Skilled Engineers</h3>
                      <p className="text-gray-600">
                        We are always looking for talented civil and mechanical engineers who are passionate about innovation and sustainable infrastructure.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-[#F2913F]">
                      <Users size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">For Sub-contractors</h3>
                      <p className="text-gray-600">
                        EVERGREEN works with a network of trusted partners. If your company shares our commitment to quality and integrity, we want to hear from you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gray-50 rounded-3xl border-l-8 border-[#F2913F]">

                <p className="text-lg italic text-gray-700">
                  "At Evergreen, we believe our people and partners are our greatest assets. We provide a collaborative environment where technical excellence is celebrated."
                </p>
                <p className="mt-4 font-bold">— HR Department, Evergreen Management Consultants LLP</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100"
            >
                {status === "success" ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-20 h-20 text-[#F2913F] mx-auto mb-6" />

                  <h3 className="text-3xl font-bold mb-4">Application Received!</h3>
                  <p className="text-gray-600 mb-8">
                    Thank you for your interest in EVERGREEN. Our team will review your submission and get back to you soon.
                  </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-[#F2913F] font-bold hover:underline"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: "worker" })}
                        className={`py-4 rounded-2xl font-bold transition-all ${
                          formData.type === "worker"
                            ? "bg-black text-white shadow-lg"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                      >
                        I'm an Individual
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: "partner" })}
                        className={`py-4 rounded-2xl font-bold transition-all ${
                          formData.type === "partner"
                            ? "bg-black text-white shadow-lg"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                      >
                        We're a Partner
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                        Full Name / Company Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#F2913F] transition-all"
                        placeholder="Enter name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#F2913F] transition-all"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#F2913F] transition-all"
                          placeholder="+91 ..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                        Tell us about yourself / your company
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#F2913F] transition-all resize-none"
                        placeholder="Your message..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                        Upload CV / Company Profile
                      </label>
                      <div className="relative group">
                        <input
                          type="file"
                          onChange={(e) => setFile(e.target.files?.[0] || null)}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="w-full px-6 py-8 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center group-hover:border-[#F2913F] transition-all bg-gray-50">
                          <Upload className="text-gray-400 group-hover:text-[#F2913F] mb-2" />
                          <span className="text-gray-500 font-medium">
                            {file ? file.name : "Click to upload file (PDF, DOCX)"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-500 font-bold bg-red-50 p-4 rounded-xl">
                        <AlertCircle size={20} />
                        <span>Something went wrong. Please try again.</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-[#F2913F] text-white py-5 rounded-2xl font-black text-lg hover:bg-[#d87d2f] transition-all duration-300 shadow-xl disabled:opacity-50"
                    >
                      {status === "loading" ? "Submitting..." : "Submit Application"}
                    </button>

                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
}
