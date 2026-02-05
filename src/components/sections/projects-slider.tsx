"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Bangalore Metro",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f5702b0-00ea-450f-84bb-61992efa636a-patilgroup-com/assets/images/bangalore_20metro-2.png",
    link: "/projects/bangalore-metro",
  },
  {
    title: "Delhi Phase III",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f5702b0-00ea-450f-84bb-61992efa636a-patilgroup-com/assets/images/delhi_20metro-3.png",
    link: "/projects/delhi-phase-iii",
  },
  {
    title: "Nagpur Metro",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f5702b0-00ea-450f-84bb-61992efa636a-patilgroup-com/assets/images/nagpurmetrohero-4.png",
    link: "/projects/nagpur-metro",
  },
  {
    title: "Mumbai Line 7B",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f5702b0-00ea-450f-84bb-61992efa636a-patilgroup-com/assets/images/mumbai_20metro-5.png",
    link: "/projects/mumbai-line-7b",
  },
  {
    title: "Kolkata Stretch",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f5702b0-00ea-450f-84bb-61992efa636a-patilgroup-com/assets/images/kolkata_20metro-6.png",
    link: "/projects/kolkata-stretch",
  },
  {
    title: "Ahmedabad Phase II",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5f5702b0-00ea-450f-84bb-61992efa636a-patilgroup-com/assets/images/ahemdabad_20metro-7.png",
    link: "/projects/ahmedabad-phase-ii",
  },
];

const ProjectsSlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <h2 className="text-3xl md:text-[36px] font-bold text-[#111827] tracking-tight">
            Our Projects
          </h2>

            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous Project"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#F2913F] hover:border-[#F2913F] transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next Project"
                className="w-10 h-10 rounded-full bg-[#F2913F] text-white flex items-center justify-center hover:bg-[#d87d2f] transition-all duration-300 shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Slider Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] flex-shrink-0 group"
                style={{ scrollSnapAlign: "start" }}
              >
                <a href={project.link} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4 bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 280px, 320px"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[18px] font-semibold text-[#111827] leading-tight group-hover:text-[#F2913F] transition-colors duration-300">
                      {project.title}
                    </h3>
                  <p className="text-sm font-medium text-gray-500">
                    View Project
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default ProjectsSlider;