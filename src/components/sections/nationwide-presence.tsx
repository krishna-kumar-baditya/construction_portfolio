import React from 'react';
import ClientSlides from './clinets_swiper';

/**
 * NationwidePresence Component
 * 
 * A pixel-perfect clone of the "Nationwide Presence" section.
 * Features:
 * - Gray gradient background
 * - Centered orange and white text
 * - Decorative horizontal line with a color gradient
 * - Typography matched to the design system (Inter/Sans-serif)
 */
const NationwidePresence: React.FC = () => {
  return (
    <section 
      className="relative w-full h-160 py-20 px-4 sm:py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden"
      style={{
        // A radial or linear gradient as seen in the screenshots
        background: 'linear-gradient(135deg, #7A7A7A 0%, #5C5C5C 50%, #7A7A7A 100%)',
      }}
    >
        <div className="max-w-[1440px] mx-auto text-center z-10 ">
          {/* Main Heading */}
          <h2 className="text-[#F2913F] text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Our Clients.
          </h2>
  
          {/* Decorative Gradient Line */}
          <div className="w-48 sm:w-64 h-1 mx-auto mb-10 rounded-full" style={{
            background: 'linear-gradient(to right, #F2913F, #F2913F, #1E3A8A)'
          }}></div>

        {/* Subheading */}
        {/* <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-6 opacity-90 tracking-wide">
          From city metros to national corridors
        </h3> */}

        {/* ✅ Imported Client Swiper */}
        <div className="mb-12">
          <ClientSlides />
        </div>


        
      </div>

      {/* Subtle Background Pattern/Texture if needed based on screenshots */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)'
        }}
      ></div>
    </section>
  );
};

export default NationwidePresence;