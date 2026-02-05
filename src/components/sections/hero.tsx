"use client";

import React, { useEffect, useState, useRef } from 'react';

const Counter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function: easeOutExpo
      const easing = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      const currentCount = Math.floor(easing * end);
      
      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover pointer-events-none"
            >
              <source src="/videos/hero-background.mp4" type="video/mp4" />
              <source src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/video-1767032139684.mp4" type="video/mp4" />
            </video>
          {/* Dark Overlay - bg-black/60 as per design instructions */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Main Headline */}
              <h1 className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10">
                <span className="text-white text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight uppercase leading-none mb-2">
                  INFRASTRUCTURE
                </span>
                  <span className="text-[#F2913F] text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight uppercase leading-none mb-2">
                    MANAGEMENT
                  </span>
                <span className="text-white text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight uppercase leading-none">
                  CONSULTANTS
                </span>
              </h1>

            {/* Animated Statistics */}
            <div className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-24 mb-10 sm:mb-12 max-w-4xl mx-auto w-full">
                <div className="flex flex-col items-center">
                  <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tabular-nums">
                    {isVisible && <Counter end={25} suffix="+" />}
                  </div>
                  <div className="text-[#F2913F] text-sm sm:text-base md:text-lg font-medium uppercase tracking-wider">
                    years of expertise
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tabular-nums">
                    {isVisible && <Counter end={500} suffix="+" />}
                  </div>
                  <div className="text-[#F2913F] text-sm sm:text-base md:text-lg font-medium uppercase tracking-wider">
                    projects delivered
                  </div>
                </div>

            </div>

            {/* Tagline */}
            <div className="text-lg sm:text-2xl md:text-3xl font-semibold leading-tight">
              <span className="text-[#F2913F]">Strategizing the future</span>{" "}
              <span className="text-white">of sustainable infrastructure.</span>
            </div>
          </div>
        </div>

      {/* Scroll Indicator (Optional but adds to UX) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#F2913F] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;