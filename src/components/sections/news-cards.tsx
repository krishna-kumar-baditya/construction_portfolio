"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const newsItems = [
  {
    category: "Delivered at scale",
    title: "Sleepers supplied for new Pune Metro Corridor",
    link: "/news"
  },
  {
    category: "Built for long life",
    title: "Partnered on Mumbai-Ahmedabad bullet train trial track",
    link: "/news"
  },
  {
    category: "Approved across systems",
    title: "Recognized by RDSO for product innovation",
    link: "/news"
  }
];

const NewsCards = () => {
  return (
    <section className="bg-[#F5F4F1] py-8 sm:py-10 md:py-12 will-change-transform">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 transform animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-forwards"
              style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}
            >
                <div className="mb-4 animate-in fade-in slide-in-from-bottom-4 duration-600 delay-300 fill-mode-forwards" style={{ opacity: 0 }}>
                  <span className="text-[#F2913F] font-semibold text-base sm:text-lg">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-[#111827] font-medium text-sm sm:text-base mb-6 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-600 delay-500 fill-mode-forwards" style={{ opacity: 0 }}>
                  {item.title}
                </h3>
                
                <a 
                  href={item.link} 
                  className="group inline-flex items-center text-[#F2913F] hover:text-[#d87d2f] font-medium text-sm sm:text-base transition-all duration-600 animate-in fade-in slide-in-from-bottom-4 delay-700 fill-mode-forwards"
                  style={{ opacity: 0 }}
                >
                  <span className="relative">
                    Read More
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F2913F] transition-all duration-300 ease-out group-hover:w-full"></span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCards;