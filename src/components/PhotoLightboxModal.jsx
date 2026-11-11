import React from 'react';
import { X, MapPin, CheckCircle, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/landscapingData';

export default function PhotoLightboxModal({ item, onClose, onSelectForQuote }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-900/80 text-white hover:bg-stone-900 flex items-center justify-center transition-colors shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Image View */}
        <div className="md:w-3/5 bg-stone-950 flex items-center justify-center overflow-hidden relative min-h-[260px] sm:min-h-[360px]">
          <img
            src={item.image}
            onError={(e) => {
              e.currentTarget.src = item.fallbackImage || "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1000&q=80";
            }}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{item.neighborhood}</span>
          </div>
        </div>

        {/* Info Column */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                {item.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 font-display">
                {item.title}
              </h3>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed">
              {item.description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                Project Highlights:
              </span>
              <div className="space-y-1.5">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-stone-200 space-y-2.5">
            <button
              onClick={() => {
                onSelectForQuote(item);
                onClose();
              }}
              className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-700 to-[#14532d] hover:from-emerald-800 hover:to-[#0f291e] shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Get a Quote for this Style</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-stone-700 bg-stone-100 hover:bg-stone-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>Ask About This Job: (919) 437-1132</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
