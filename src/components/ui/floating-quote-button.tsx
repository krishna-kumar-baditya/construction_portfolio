"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingQuoteButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
          <motion.a
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            href="/contact"
            className="fixed bottom-8 right-8 z-[9999] bg-[#F2913F] text-white p-4 rounded-full shadow-2xl hover:bg-[#d87d2f] transition-colors group flex items-center gap-2"
          >
          <MessageSquare size={24} />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold">
            Request a Quote
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
