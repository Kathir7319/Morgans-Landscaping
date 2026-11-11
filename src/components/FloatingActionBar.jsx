import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Calendar, ChevronUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/landscapingData';

export default function FloatingActionBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Floating Bottom Bar */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 bg-stone-900/95 backdrop-blur-md text-white p-2 rounded-2xl shadow-2xl border border-stone-700/60 flex items-center justify-between gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow"
        >
          <Phone className="w-4 h-4" />
          <span>Call (919) 437-1132</span>
        </a>

        <a
          href={`sms:${BUSINESS_INFO.phoneRaw}`}
          className="flex items-center justify-center p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600"
          title="Text Us"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        <Link
          to="/quote-and-gallery#quote-scheduler"
          className="flex-1 flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-white text-stone-900 hover:bg-stone-100 font-bold text-xs shadow"
        >
          <Calendar className="w-4 h-4 text-emerald-700" />
          <span>Free Quote</span>
        </Link>
      </div>

      {/* Desktop Floating Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="hidden sm:flex fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-stone-900/90 text-white hover:bg-emerald-800 transition-all shadow-xl items-center justify-center border border-stone-700 hover:scale-105 active:scale-95"
          aria-label="Scroll back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
