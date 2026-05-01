import React, { useState, useEffect } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  // Simulate loading progress from 0 to 100
  useEffect(() => {
    const duration = 2500; // Total loading time in milliseconds
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const currentProgress = Math.min(Math.round(progress), 100);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1A3D1A] overflow-hidden">
      
      {/* Background Soft Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#B8960C] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      {/* Animated Icon Section */}
      <div className="relative flex items-center justify-center mb-10">
        {/* Outer Spinning Dashed Ring */}
        <svg className="absolute w-28 h-28 animate-[spin_4s_linear_infinite] text-[#B8960C]/30" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
        </svg>
        
        {/* Inner Reverse Spinning Ring */}
        <svg className="absolute w-24 h-24 animate-[spin_5s_linear_infinite_reverse] text-[#B8960C]/40" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" strokeDasharray="20 10 5 10" />
        </svg>

        {/* Premium Tea Leaf Icon */}
        <div className="text-[#B8960C] z-10 animate-pulse drop-shadow-[0_0_15px_rgba(184,150,12,0.6)]">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.04 3.19C21.04 3.19 14.88 1.95 8.12 8.71C1.36 15.47 2.96 20.81 2.96 20.81C2.96 20.81 8.3 22.41 15.06 15.65C21.82 8.89 21.04 3.19 21.04 3.19ZM11.14 16.51L6.19 21.46L4.78 20.05L9.73 15.1C9.73 15.1 8.01 13.56 8.08 11.39L12.44 15.75C10.27 15.82 11.14 16.51 11.14 16.51Z"/>
          </svg>
        </div>
      </div>

      {/* Main Text Content */}
      <h1 className="text-[#F9F6F0] font-serif text-3xl md:text-4xl font-bold tracking-wide mb-3 drop-shadow-lg text-center px-4">
        The Ceylon Tea Experience
      </h1>
      <p className="text-[#B8960C] font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-12 animate-pulse text-center">
        Brewing Excellence...
      </p>

      {/* Progress Bar Section */}
      <div className="w-64 md:w-80 flex flex-col items-center">
        {/* Loading Bar Track */}
        <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative backdrop-blur-sm">
          {/* Animated Loading Fill */}
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#B8960C] to-[#FFE066] rounded-full transition-all ease-out"
            style={{ width: `${currentProgress}%`, transitionDuration: '100ms' }}
          >
            {/* Glowing tip at the end of the bar */}
            <div className="absolute top-0 right-0 h-full w-4 bg-white/60 blur-[2px]"></div>
          </div>
        </div>

        {/* Percentage Counter */}
        <span className="text-[#F9F6F0]/80 font-sans text-xs font-bold tracking-widest mt-4">
          {currentProgress}%
        </span>
      </div>

      {/* Animated Bottom Dots */}
      <div className="absolute bottom-12 flex gap-3">
        <span 
          className="w-2 h-2 rounded-full bg-[#B8960C] opacity-80" 
          style={{ animation: 'bounce 1.5s infinite ease-in-out', animationDelay: '0s' }}
        ></span>
        <span 
          className="w-2 h-2 rounded-full bg-[#B8960C] opacity-80" 
          style={{ animation: 'bounce 1.5s infinite ease-in-out', animationDelay: '0.2s' }}
        ></span>
        <span 
          className="w-2 h-2 rounded-full bg-[#B8960C] opacity-80" 
          style={{ animation: 'bounce 1.5s infinite ease-in-out', animationDelay: '0.4s' }}
        ></span>
      </div>

    </div>
  );
}