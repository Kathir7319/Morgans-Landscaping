import React, { useState } from 'react';
import { MapPin, Shield, CheckCircle2, ChevronRight, FileCheck } from 'lucide-react';
import { NEIGHBORHOOD_GUIDES } from '../data/landscapingData';

export default function NeighborhoodBadges() {
  const [activeTab, setActiveTab] = useState(0);
  const current = NEIGHBORHOOD_GUIDES[activeTab];

  return (
    <div className="bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>Local Eastern Wake County Expertise</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
          Subdivision Landscape & HOA Guides
        </h3>
        <p className="text-stone-600 text-sm sm:text-base mt-2">
          We install weekly in these master-planned neighborhoods. Select yours to see soil characteristics, grass recommendations, and HOA compliance advice.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {NEIGHBORHOOD_GUIDES.map((sub, idx) => (
          <button
            key={sub.name}
            type="button"
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === idx
                ? 'bg-emerald-800 text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <MapPin className={`w-4 h-4 ${activeTab === idx ? 'text-emerald-300' : 'text-emerald-700'}`} />
            <span>{sub.name}</span>
          </button>
        ))}
      </div>

      {/* Details Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-lg font-display">
              <span>{current.name} (ZIP {current.zip})</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                Active Service Zone
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 uppercase block mb-1">Soil & Lot Conditions:</span>
                <p className="text-stone-600 leading-relaxed">{current.lotCharacteristics}</p>
              </div>

              <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 uppercase block mb-1">Recommended Turf:</span>
                <p className="text-stone-600 leading-relaxed">{current.recommendedGrass}</p>
              </div>
            </div>

            <div className="bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-200 text-xs flex items-start gap-2.5">
              <FileCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-950 font-bold">HOA Deadline & Compliance Tip:</strong>
                <p className="text-emerald-800 mt-0.5">{current.hoaDeadlineTip}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#0f291e] text-white p-5 rounded-xl space-y-3 text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
              Most Popular Solution Here:
            </span>
            <div className="text-base font-extrabold leading-snug">
              {current.popularPackage}
            </div>
            <p className="text-xs text-stone-300">
              Includes guaranteed HOA approval documentation, site measurements, and prompt installation.
            </p>
            <a
              href="#calculator"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white pt-1 transition-colors"
            >
              <span>Calculate your cost for {current.name}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
