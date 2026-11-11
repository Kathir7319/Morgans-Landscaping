import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, Check, ArrowRight, ShieldCheck, Sparkles, Sun, Droplets, Info } from 'lucide-react';
import { SOD_VARIETIES, BUSINESS_INFO } from '../data/landscapingData';

export default function InteractiveSodCalculator() {
  const [squareFeet, setSquareFeet] = useState(2000);
  const [selectedGrassId, setSelectedGrassId] = useState("bermuda");
  const [includeRiverRock, setIncludeRiverRock] = useState(true);
  const [includeMulchEdging, setIncludeMulchEdging] = useState(false);
  const navigate = useNavigate();

  const selectedGrass = SOD_VARIETIES.find(g => g.id === selectedGrassId) || SOD_VARIETIES[0];

  // Calculate base sod installation range
  const minSodPrice = Math.round(squareFeet * selectedGrass.pricePerSqFtMin);
  const maxSodPrice = Math.round(squareFeet * selectedGrass.pricePerSqFtMax);

  // Add-ons
  const riverRockMin = includeRiverRock ? 450 : 0;
  const riverRockMax = includeRiverRock ? 850 : 0;

  const mulchMin = includeMulchEdging ? 280 : 0;
  const mulchMax = includeMulchEdging ? 450 : 0;

  const totalMin = minSodPrice + riverRockMin + mulchMin;
  const totalMax = maxSodPrice + riverRockMax + mulchMax;

  const handleApplyToQuote = () => {
    // Navigate to quote scheduler with pre-filled intent
    const query = new URLSearchParams({
      sqft: squareFeet.toString(),
      grass: selectedGrass.name,
      rock: includeRiverRock ? 'yes' : 'no',
      mulch: includeMulchEdging ? 'yes' : 'no'
    }).toString();

    navigate(`/quote-and-gallery?${query}#quote-scheduler`);
  };

  return (
    <div id="calculator" className="bg-gradient-to-br from-[#0f291e] to-[#14532d] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-emerald-700/50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-carolina-clay/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-2xl mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Cost Estimator</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
          Estimate Your Yard Transformation in Seconds
        </h3>
        <p className="text-emerald-100/90 text-sm sm:text-base mt-2">
          Transparent pricing for Knightdale & Wendell homeowners. Includes farm-fresh sod delivery, soil rototilling, grading, and professional installation.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Inputs Column */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Grass Variety Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
              1. Select Your Grass Variety
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SOD_VARIETIES.map((grass) => {
                const isSelected = selectedGrassId === grass.id;
                return (
                  <button
                    key={grass.id}
                    type="button"
                    onClick={() => setSelectedGrassId(grass.id)}
                    className={`text-left p-3.5 rounded-2xl border transition-all duration-200 relative ${
                      isSelected
                        ? 'bg-white text-stone-900 border-white shadow-lg ring-2 ring-emerald-400'
                        : 'bg-emerald-950/60 text-emerald-100 border-emerald-800/80 hover:bg-emerald-900/60'
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute top-2.5 right-2.5 w-5 h-5 bg-emerald-700 text-white rounded-full flex items-center justify-center text-[10px]">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                    <div className="font-bold text-sm sm:text-base mb-1">{grass.name}</div>
                    <div className={`text-xs font-medium ${isSelected ? 'text-emerald-700' : 'text-emerald-300'}`}>
                      ${grass.pricePerSqFtMin.toFixed(2)} – ${grass.pricePerSqFtMax.toFixed(2)} / sq ft
                    </div>
                    <div className={`text-[11px] mt-2 line-clamp-2 ${isSelected ? 'text-stone-600' : 'text-stone-300'}`}>
                      {grass.sunFit}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Yard Size / Square Footage Slider */}
          <div className="bg-emerald-950/70 p-5 rounded-2xl border border-emerald-800/80">
            <div className="flex justify-between items-center mb-3">
              <label htmlFor="yard-sqft-slider" className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                2. Approximate Yard Size
              </label>
              <div className="text-right">
                <span className="text-2xl font-black text-white font-display">
                  {squareFeet.toLocaleString()}
                </span>
                <span className="text-xs text-emerald-300 ml-1 font-semibold">sq. ft.</span>
              </div>
            </div>

            {/* Slider */}
            <input
              id="yard-sqft-slider"
              type="range"
              min="500"
              max="6000"
              step="100"
              value={squareFeet}
              onChange={(e) => setSquareFeet(Number(e.target.value))}
              aria-label="Yard Size in Square Feet"
              className="w-full h-3 bg-emerald-900 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none"
            />

            {/* Quick preset buttons */}
            <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-emerald-900">
              <span className="text-xs text-emerald-400 self-center font-medium mr-1">Quick Select:</span>
              {[
                { label: "Townhome (1,200 sq ft)", val: 1200 },
                { label: "Subdivision Backyard (2,000 sq ft)", val: 2000 },
                { label: "Corner Lot (3,500 sq ft)", val: 3500 },
                { label: "Full Yard (5,000 sq ft)", val: 5000 },
              ].map(preset => (
                <button
                  key={preset.val}
                  type="button"
                  onClick={() => setSquareFeet(preset.val)}
                  className={`text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                    squareFeet === preset.val
                      ? 'bg-emerald-400 text-stone-900 font-bold border-emerald-300'
                      : 'bg-emerald-900/60 text-emerald-200 border-emerald-800 hover:bg-emerald-800'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Popular Add-ons */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2.5">
              3. Select Optional Bed & Rock Upgrades
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                  includeRiverRock
                    ? 'bg-emerald-900/80 border-emerald-400'
                    : 'bg-emerald-950/40 border-emerald-800/80 opacity-80'
                }`}
              >
                <input
                  type="checkbox"
                  checked={includeRiverRock}
                  onChange={(e) => setIncludeRiverRock(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 rounded bg-emerald-950 border-emerald-700"
                />
                <div className="text-xs">
                  <span className="font-bold text-white block">Decorative River Rock Beds (+ $450 – $850)</span>
                  <span className="text-emerald-200/80 block mt-0.5">Smooth 1"–3" stone around foundation & AC units. Eliminates annual mulching.</span>
                </div>
              </label>

              <label
                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                  includeMulchEdging
                    ? 'bg-emerald-900/80 border-emerald-400'
                    : 'bg-emerald-950/40 border-emerald-800/80 opacity-80'
                }`}
              >
                <input
                  type="checkbox"
                  checked={includeMulchEdging}
                  onChange={(e) => setIncludeMulchEdging(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 rounded bg-emerald-950 border-emerald-700"
                />
                <div className="text-xs">
                  <span className="font-bold text-white block">Hardwood Mulch Edging (+ $280 – $450)</span>
                  <span className="text-emerald-200/80 block mt-0.5">Triple-shredded brown/black mulch with deep spade-cut trench borders.</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Output Estimate Card */}
        <div className="lg:col-span-5 bg-white text-stone-900 rounded-2xl p-6 sm:p-7 shadow-2xl border-2 border-emerald-400 relative">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block">
                Estimated Turnkey Price Range
              </span>
              <span className="text-xs text-stone-500">
                {selectedGrass.name} • {squareFeet.toLocaleString()} sq. ft.
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
              No Hidden Fees
            </span>
          </div>

          {/* Big Price Display */}
          <div className="my-6 text-center">
            <div className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight font-display">
              ${totalMin.toLocaleString()} – ${totalMax.toLocaleString()}
            </div>
            <p className="text-xs text-stone-500 mt-1">
              Includes farm-fresh sod delivery, soil rototilling, grading & labor.
            </p>
          </div>

          {/* Breakdown checklist */}
          <div className="space-y-2 py-4 border-t border-b border-stone-100 text-xs text-stone-700">
            <div className="flex justify-between items-center py-1">
              <span className="font-medium flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                {selectedGrass.name} Installed:
              </span>
              <span className="font-bold">${minSodPrice.toLocaleString()} – ${maxSodPrice.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center py-1">
              <span className="font-medium flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                Soil Grading & Red Clay Prep:
              </span>
              <span className="font-bold text-emerald-700">INCLUDED</span>
            </div>

            {includeRiverRock && (
              <div className="flex justify-between items-center py-1">
                <span className="font-medium flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  River Rock Bed Upgrades:
                </span>
                <span className="font-bold">${riverRockMin} – ${riverRockMax}</span>
              </div>
            )}

            {includeMulchEdging && (
              <div className="flex justify-between items-center py-1">
                <span className="font-medium flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Hardwood Mulch Borders:
                </span>
                <span className="font-bold">${mulchMin} – ${mulchMax}</span>
              </div>
            )}

            <div className="flex justify-between items-center py-1 text-emerald-800 font-semibold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                HOA Architectural Compliance:
              </span>
              <span>GUARANTEED</span>
            </div>
          </div>

          {/* Action Button to Free Quote */}
          <div className="mt-6 space-y-2.5">
            <button
              onClick={handleApplyToQuote}
              type="button"
              className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-emerald-700 to-[#14532d] hover:from-emerald-800 hover:to-[#0f291e] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              <span>Lock In This Price at Free Measurement</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="block text-center text-xs font-bold text-stone-600 hover:text-emerald-800 transition-colors py-1"
            >
              Prefer to call? Speak with an installer: <span className="text-emerald-700 underline">{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <p className="text-[11px] text-stone-500 mt-4 text-center leading-tight">
            *Final quote provided after free digital wheel on-site measurement. No obligation.
          </p>
        </div>

      </div>
    </div>
  );
}
