import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Check, AlertTriangle, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging && e.type !== 'touchmove') return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging && e.type !== 'mousemove') return;
    handleMove(e.clientX);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-200/90 relative overflow-hidden">
      {/* Background soft decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header with Title and context */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Yard Transformation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
            Drag to Reveal the Transformation
          </h3>
          <p className="text-stone-600 text-sm sm:text-base mt-1 max-w-xl">
            See how we take new construction builder red clay in Wendell Falls & Knightdale and turn it into a lush, erosion-free lawn with decorative river rock.
          </p>
        </div>

        {/* Quick Position Controls */}
        <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-xl self-start md:self-auto border border-stone-200">
          <button
            onClick={() => setSliderPosition(10)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              sliderPosition <= 20 ? 'bg-amber-700 text-white shadow-sm' : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            Bare Clay
          </button>
          <button
            onClick={() => setSliderPosition(50)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              sliderPosition > 35 && sliderPosition < 65 ? 'bg-emerald-800 text-white shadow-sm' : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            50/50 Split
          </button>
          <button
            onClick={() => setSliderPosition(90)}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              sliderPosition >= 80 ? 'bg-emerald-700 text-white shadow-sm' : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            Lush Yard
          </button>
        </div>
      </div>

      {/* Main Draggable Comparison Stage */}
      <div
        ref={containerRef}
        className="relative h-72 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-inner border border-stone-300"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* Layer 1: AFTER Image (Underneath) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1592417817098-8f3d6910609b?auto=format&fit=crop&w=1400&q=85"
            alt="Lush green Bermuda sod yard with river rock border"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* After Floating Tag */}
          <div className="absolute top-4 right-4 z-10 bg-emerald-900/90 text-white px-3.5 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-lg backdrop-blur-sm border border-emerald-400/40">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>AFTER: Farm-Cut Sod & River Rock</span>
          </div>

          {/* After Highlights Note */}
          <div className="absolute bottom-4 right-4 z-10 bg-stone-900/85 text-stone-100 p-3 rounded-xl max-w-xs text-xs backdrop-blur-md hidden sm:block border border-white/10">
            <span className="font-bold text-emerald-400 block mb-0.5">Move-In Ready Yard:</span>
            No mud on pet paws, instant curb appeal, deep rock borders along foundation, and 100% HOA compliance.
          </div>
        </div>

        {/* Layer 2: BEFORE Image (Clipped by slider position) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* Note: width must match full container so image doesn't squish */}
          <div className="relative h-full w-[200%] sm:w-[150%] md:w-[120%] lg:w-full">
            <img
              src="https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1400&q=85"
              alt="Bare builder red clay dirt lot with mud and washouts"
              className="w-full h-full object-cover filter contrast-125 sepia-[0.35] brightness-90"
              loading="lazy"
            />
            {/* Before Floating Tag */}
            <div className="absolute top-4 left-4 z-10 bg-amber-950/90 text-amber-200 px-3.5 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-lg backdrop-blur-sm border border-amber-600/50">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>BEFORE: Builder Red Clay & Mud</span>
            </div>

            {/* Before Highlight Note */}
            <div className="absolute bottom-4 left-4 z-10 bg-amber-950/90 text-amber-100 p-3 rounded-xl max-w-xs text-xs backdrop-blur-md hidden sm:block border border-amber-700/50">
              <span className="font-bold text-amber-400 block mb-0.5">Builder Handover Dirt Lot:</span>
              Patchy straw, red clay washouts during thunderstorms, mud tracking inside the house, and HOA warning letters.
            </div>
          </div>
        </div>

        {/* Draggable Divider Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-2xl"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-2xl flex items-center justify-center text-stone-800 border-2 border-emerald-600 slider-handle hover:scale-110 active:scale-95 transition-transform">
            <ArrowLeftRight className="w-5 h-5 text-emerald-800" />
          </div>
        </div>
      </div>

      {/* Helpful Hint beneath the slider */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
        <span className="flex items-center gap-1.5">
          <ArrowLeftRight className="w-3.5 h-3.5 text-stone-400" />
          <span>Click & drag the slider across the image to inspect the grading and turf edge detail</span>
        </span>
        <span className="font-semibold text-emerald-700">
          Typical transformation time: 1 to 2 days after closing
        </span>
      </div>
    </div>
  );
}
