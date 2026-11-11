import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Calendar, Check, ArrowRight, ShieldCheck, 
  MapPin, Star, Award, Sparkles, ChevronDown, CheckCircle2,
  Sprout, Layers, Home, AlertCircle
} from 'lucide-react';
import { BUSINESS_INFO, SOD_VARIETIES, PACKAGE_FEATURES, REVIEWS, FAQS } from '../data/landscapingData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import InteractiveSodCalculator from '../components/InteractiveSodCalculator';
import NeighborhoodBadges from '../components/NeighborhoodBadges';

export default function HomePage() {
  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION (Above the Fold) */}
      <section className="relative pt-6 sm:pt-12 overflow-hidden">
        {/* Background ambient accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-100/50 via-emerald-50/20 to-transparent pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Serving Knightdale & Wendell, NC</span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight font-display leading-[1.12]">
                Turn Your New Construction Dirt Lot Into a <span className="text-emerald-800 underline decoration-emerald-400 decoration-wavy decoration-2">Lush, Move-In Ready</span> Yard.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Fast, reliable sod installation, decorative river rock beds, and low-maintenance mulch designs tailored for new homeowners in Knightdale and Wendell, NC.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  to="/quote-and-gallery#quote-scheduler"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-emerald-700 to-[#14532d] hover:from-emerald-800 hover:to-[#0f291e] shadow-lg shadow-emerald-900/25 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5 text-emerald-300" />
                  <span>Schedule Your Free Yard Measurement</span>
                </Link>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-extrabold text-stone-800 bg-white hover:bg-stone-50 border-2 border-stone-300 hover:border-emerald-700 shadow-sm transition-all"
                >
                  <Phone className="w-5 h-5 text-emerald-700" />
                  <span>Call or Text {BUSINESS_INFO.phone}</span>
                </a>
              </div>

              {/* Trust Strip */}
              <div className="pt-4 border-t border-stone-200/90 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-stone-700">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</div>
                  <span>HOA-Compliant Designs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</div>
                  <span>Local Knightdale & Wendell Crew</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</div>
                  <span>Fast Turnaround After Closing</span>
                </div>
              </div>

            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 aspect-[4/3] sm:aspect-[4/3] lg:aspect-[1/1]">
                <img
                  src="/images/hero-yard.jpg"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85";
                  }}
                  alt="Lush green lawn with decorative river rock foundation bed"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />

                {/* Floating highlight badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-stone-200 text-stone-900 max-w-[200px]">
                  <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs font-bold leading-tight">
                    "Zero mess, ready for dogs next day."
                  </div>
                  <div className="text-[10px] text-stone-500 font-medium mt-0.5">
                    Sarah & Mark T., Wendell Falls
                  </div>
                </div>

                {/* Bottom Card text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400 block mb-1">
                    Featured Transformation
                  </span>
                  <div className="text-lg font-bold font-display">
                    Bermuda Sod + River Rock Foundation Perimeter
                  </div>
                  <p className="text-xs text-stone-300 mt-1">
                    Wendell Falls, NC • Finished in 24 hours
                  </p>
                </div>
              </div>

              {/* Decorative Pill Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#0f291e] text-white p-3.5 rounded-2xl shadow-xl border border-emerald-600/40 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-xl">
                  🚜
                </div>
                <div>
                  <div className="text-xs font-extrabold text-emerald-300 uppercase">Farm-Fresh Daily</div>
                  <div className="text-sm font-bold">Cut Morning of Install</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Before & After Transformation Slider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BeforeAfterSlider />
      </section>

      {/* 2. NEW CONSTRUCTION HOMEOWNER PACKAGE (Wendell Falls & Knightdale Subdivisions) */}
      <section id="subdivision-packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xl relative overflow-hidden">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300 mb-3">
              <Home className="w-3.5 h-3.5 text-emerald-700" />
              <span>Tailored for Wake County Developments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
              Just Closed on Your Home in Wendell Falls or Knightdale? We Handle the Whole Yard.
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
              Builders often leave new buyers with bare red clay, patchy builder-grade grass, and strict HOA landscaping deadlines. Our <strong>New Construction Homeowner Package</strong> gives you instant curb appeal and a backyard ready for kids, pets, and weekend cookouts—without the stress of doing it yourself.
            </p>
          </div>

          {/* 4 Feature Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* 1. Complete Backyard Sod Transformation */}
            <div className="group bg-[#FAF9F5] p-6 sm:p-8 rounded-2xl border border-stone-200 hover:border-emerald-600 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform">
                <Sprout className="w-6 h-6 text-emerald-300" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block mb-1">
                Farm-Cut Turf in 1-2 Days
              </span>
              <h3 className="text-xl font-bold text-stone-900 font-display mb-2">
                Complete Backyard Sod Transformation
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Full soil preparation, grading adjustments, and fresh farm-cut Bermuda, Zoysia, or Tall Fescue sod installed to eliminate mud and erosion.
              </p>
              <div className="mt-4 pt-4 border-t border-stone-200/60 flex items-center gap-2 text-xs font-bold text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Eliminates Carolina red clay tracking inside</span>
              </div>
            </div>

            {/* 2. Custom Foundation & Bed Edging */}
            <div className="group bg-[#FAF9F5] p-6 sm:p-8 rounded-2xl border border-stone-200 hover:border-emerald-600 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-stone-800 text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform">
                <Layers className="w-6 h-6 text-stone-300" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block mb-1">
                Permanent Clean Borders
              </span>
              <h3 className="text-xl font-bold text-stone-900 font-display mb-2">
                Custom Foundation & Bed Edging
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Clean, crisp bed borders around your front porch, patio, and fence line filled with decorative river rock or double-shredded hardwood mulch.
              </p>
              <div className="mt-4 pt-4 border-t border-stone-200/60 flex items-center gap-2 text-xs font-bold text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Commercial puncture-resistant weed fabric</span>
              </div>
            </div>

            {/* 3. Drainage & Downspout Rock Solutions */}
            <div className="group bg-[#FAF9F5] p-6 sm:p-8 rounded-2xl border border-stone-200 hover:border-emerald-600 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-800 text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 text-blue-300" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 block mb-1">
                Foundation Stormwater Protection
              </span>
              <h3 className="text-xl font-bold text-stone-900 font-display mb-2">
                Drainage & Downspout Rock Solutions
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Decorative river rock splash pads and dry creek beds that protect your new foundation from heavy North Carolina rainstorms.
              </p>
              <div className="mt-4 pt-4 border-t border-stone-200/60 flex items-center gap-2 text-xs font-bold text-blue-900">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Prevents crawlspace dampness & trench erosion</span>
              </div>
            </div>

            {/* 4. HOA-Ready Curb Appeal */}
            <div className="group bg-[#FAF9F5] p-6 sm:p-8 rounded-2xl border border-stone-200 hover:border-emerald-600 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-800 text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6 text-amber-300" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 block mb-1">
                Zero Architectural Hassle
              </span>
              <h3 className="text-xl font-bold text-stone-900 font-display mb-2">
                HOA-Ready Curb Appeal
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Neat, clean layouts designed to meet neighborhood architectural guidelines in Wendell Falls, Knightdale Station, Harper's Landing, and surrounding communities.
              </p>
              <div className="mt-4 pt-4 border-t border-stone-200/60 flex items-center gap-2 text-xs font-bold text-amber-900">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>100% compliant with Wake County subdivision rules</span>
              </div>
            </div>

          </div>

          {/* Section CTA */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-emerald-900 to-[#0f291e] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-lg font-bold font-display">Ready for a move-in ready yard?</div>
              <p className="text-xs sm:text-sm text-emerald-200">
                Book an on-site measurement and get an exact, written quote in 24 hours.
              </p>
            </div>

            <Link
              to="/quote-and-gallery#quote-scheduler"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold text-stone-900 bg-white hover:bg-emerald-50 shadow-md transition-all shrink-0"
            >
              <span>Claim Your New Homeowner Package Estimate →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Interactive Sod Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveSodCalculator />
      </section>

      {/* 3. SOD INSTALLATION PRICING GUIDE (Bermuda, Zoysia & Fescue) */}
      <section id="sod-pricing-guide" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl">
          
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300 mb-3">
              <Sprout className="w-3.5 h-3.5 text-emerald-700" />
              <span>Budget with Confidence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-display">
              Transparent Sod Installation Pricing Guide for Eastern Wake County
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Every yard is different, so we price clearly by square footage, soil prep needs, and grass variety. Below are typical installed price ranges (including farm-fresh sod, delivery, ground prep, and professional installation) to help you budget with confidence.
            </p>
          </div>

          {/* Pricing Comparison Table (Desktop & Mobile Responsive) */}
          <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
            <table className="w-full text-left text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-stone-900 text-white text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-5">Grass Variety</th>
                  <th className="py-4 px-5">Best Sun & Yard Fit</th>
                  <th className="py-4 px-5">Key Benefits</th>
                  <th className="py-4 px-5 bg-emerald-800 text-white">Estimated Installed Range*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                {SOD_VARIETIES.map((variety, idx) => (
                  <tr key={variety.name} className={`hover:bg-stone-50 transition-colors ${idx % 2 === 1 ? 'bg-stone-50/50' : ''}`}>
                    <td className="py-5 px-5 align-top">
                      <div className="font-extrabold text-stone-900 text-base">{variety.name}</div>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 mt-1">
                        {variety.badge}
                      </span>
                    </td>

                    <td className="py-5 px-5 align-top text-stone-600">
                      <strong className="text-stone-900 block font-semibold">{variety.sunFit}</strong>
                      <span className="text-xs text-stone-500 block mt-1">{variety.yardFit}</span>
                    </td>

                    <td className="py-5 px-5 align-top text-stone-600 text-xs leading-relaxed">
                      {variety.keyBenefits}
                    </td>

                    <td className="py-5 px-5 align-top bg-emerald-50/60 font-semibold text-emerald-950">
                      <div className="text-base font-black text-emerald-900">
                        ${variety.pricePerSqFtMin.toFixed(2)} – ${variety.pricePerSqFtMax.toFixed(2)} <span className="text-xs font-medium text-stone-500">/ sq. ft.</span>
                      </div>
                      <div className="text-xs text-stone-600 mt-1 font-medium">
                        Typical 2,000 sq. ft. backyard: <strong className="text-stone-900">{variety.typical2kRange}</strong>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Note */}
          <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>*Note:</strong> Final quotes depend on exact square footage, existing brush/rock removal, and topsoil grading needs. Minimum project sizes apply. Request a free on-site measurement for an exact, locked-in price.
            </p>
          </div>

        </div>
      </section>

      {/* Neighborhood Subdivisions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NeighborhoodBadges />
      </section>

      {/* 4. LOCAL CUSTOMER REVIEWS (Knightdale & Wendell Neighbors) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Real Neighbor Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display">
            Trusted by Homeowners Across Knightdale & Wendell
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Read what your neighbors in Wendell Falls, Knightdale, and surrounding subdivisions have to say about our fast service and fair pricing.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-stone-700">5.0 Star Verified</span>
                </div>

                {/* Quote */}
                <p className="text-stone-700 text-sm leading-relaxed italic mb-4">
                  "{review.quote}"
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-4 border-t border-stone-100">
                <div className="font-extrabold text-stone-900 text-sm">
                  {review.author}
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-700 font-semibold mt-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>{review.location}</span>
                </div>
                <div className="text-[11px] text-stone-500 mt-1 font-medium">
                  Project: {review.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
              Frequently Asked Questions by New Homebuyers
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Everything you need to know about installing sod and river rock in Wake County.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <details
                key={index}
                className="group bg-white p-5 rounded-2xl border border-stone-200 shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer"
              >
                <summary className="flex items-center justify-between font-bold text-stone-900 text-sm sm:text-base">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-emerald-700 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed pt-2 border-t border-stone-100">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0f291e] to-[#14532d] text-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
              Free On-Site Yard Walkthrough
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
              Get Your Yard Move-In Ready This Week
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base">
              No pressure, no hidden fees. We measure your exact square footage, inspect your soil grading, and provide a transparent written estimate.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <Link
                to="/quote-and-gallery#quote-scheduler"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-stone-900 font-extrabold text-sm bg-white hover:bg-emerald-50 shadow-lg transition-all"
              >
                Schedule Your Free Yard Measurement →
              </Link>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-extrabold text-sm bg-emerald-800/80 hover:bg-emerald-800 border border-emerald-600 transition-all"
              >
                Call Direct: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
