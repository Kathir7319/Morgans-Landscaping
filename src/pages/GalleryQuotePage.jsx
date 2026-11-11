import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Phone, Calendar, Clock, MapPin, CheckCircle, 
  Filter, Sparkles, AlertCircle, ArrowRight, ShieldCheck,
  Send, Layers, Sprout, Check, HelpCircle
} from 'lucide-react';
import { BUSINESS_INFO, GALLERY_ITEMS } from '../data/landscapingData';
import PhotoLightboxModal from '../components/PhotoLightboxModal';

export default function GalleryQuotePage() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    addressOrSubdivision: '',
    services: {
      newConstructionPackage: false,
      sodInstallation: false,
      riverRockBeds: false,
      mulchInstallation: false,
      drainageFix: false
    },
    yardScope: 'Backyard Only',
    preferredDate: '',
    timeWindow: 'Morning (8 AM – 12 PM)',
    projectNotes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Parse query parameters if redirected from calculator
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const grass = params.get('grass');
    const rock = params.get('rock');
    const mulch = params.get('mulch');
    const sqft = params.get('sqft');

    if (grass || rock || mulch || sqft) {
      setFormData(prev => ({
        ...prev,
        services: {
          ...prev.services,
          sodInstallation: true,
          riverRockBeds: rock === 'yes',
          mulchInstallation: mulch === 'yes'
        },
        projectNotes: `Calculator Pre-Estimate: ~${sqft || '2,000'} sq ft of ${grass || 'Bermuda'} sod${rock === 'yes' ? ' + River Rock Beds' : ''}${mulch === 'yes' ? ' + Mulch Borders' : ''}.`
      }));
    }

    // Handle hash scroll
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);

  // Filter gallery items
  const filteredItems = activeCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Projects (10)' },
    { id: 'rock-borders', label: '1. River Rock & Stone' },
    { id: 'drainage', label: '2. Drainage & Dry Creeks' },
    { id: 'mulch', label: '3. Hardwood & Bark Mulch' },
    { id: 'full-makeover', label: '4. Full Yard Makeovers' },
  ];

  const handleServiceCheckbox = (serviceKey) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [serviceKey]: !prev.services[serviceKey]
      }
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Please enter your name";
    if (!formData.phone.trim()) errors.phone = "Please enter your phone number";
    if (!formData.email.trim()) errors.email = "Please enter your email address";
    if (!formData.addressOrSubdivision.trim()) errors.addressOrSubdivision = "Please enter your street address or subdivision (e.g. Wendell Falls)";
    
    // Check if at least one service is selected
    const hasService = Object.values(formData.services).some(Boolean);
    if (!hasService) errors.services = "Please select at least one service needed";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }

      // Scroll to confirmation notice
      const el = document.getElementById('quote-scheduler');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. PAGE HEADER & INTRO */}
      <section className="pt-8 sm:pt-12 bg-gradient-to-b from-stone-100 to-transparent pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Wake County Project Portfolio & Free Scheduling</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight font-display leading-tight">
            Decorative Rock Beds, River Rock & Low-Maintenance Mulch Designs
          </h1>

          <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Upgrade your curb appeal with permanent stone borders, clean mulch beds, and fresh turf built to handle North Carolina weather.
          </p>

          {/* Quick Contact Line */}
          <div className="mt-6 inline-flex items-center gap-2 p-3 sm:px-6 rounded-2xl bg-white shadow-md border border-stone-200 text-xs sm:text-sm font-semibold text-stone-800">
            <span>Prefer to talk directly?</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-emerald-800 font-extrabold hover:underline flex items-center gap-1"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Call or text (919) 437-1132 for fast scheduling.</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. DECORATIVE ROCK & MULCH DESIGN SHOWCASE (Gallery Categories) */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Gallery Intro Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
                Real Yard Transformations in Knightdale & Wendell
              </h2>
              <p className="text-stone-600 text-sm mt-1 leading-relaxed">
                Explore our most popular yard transformations in Knightdale and Wendell. Every rock and mulch bed includes thorough weeding, deep edge trenching, and commercial-grade landscape fabric to keep weeds out.
              </p>
            </div>

            <a
              href="#quote-scheduler"
              className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-800 text-white font-bold text-xs shadow hover:bg-emerald-900 transition-colors shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Quote for These Styles</span>
            </a>
          </div>

          {/* 4 Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-stone-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container with zoom effect */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Neighborhood badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-bold text-stone-900 flex items-center gap-1 shadow-sm">
                    <MapPin className="w-3 h-3 text-emerald-700" />
                    <span>{item.neighborhood}</span>
                  </div>

                  {/* Category tag */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 block">
                      {item.categoryLabel}
                    </span>
                    <h3 className="text-base font-bold line-clamp-1 group-hover:text-emerald-200 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Bar */}
              <div className="px-5 py-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-emerald-950">
                <span>View Full Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <PhotoLightboxModal
          item={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onSelectForQuote={(item) => {
            setFormData(prev => ({
              ...prev,
              projectNotes: `${prev.projectNotes ? prev.projectNotes + '\n' : ''}Interested in style from: ${item.title} (${item.neighborhood}).`
            }));
            const el = document.getElementById('quote-scheduler');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      )}

      {/* 3. FREE MEASUREMENT & QUOTE SCHEDULER */}
      <section id="quote-scheduler" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-600 shadow-2xl relative overflow-hidden">
          
          {/* Decorative Corner Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Guaranteed Free & Written In 24 Hours</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 font-display tracking-tight">
            Schedule Your Free On-Site Yard Measurement & Quote
          </h2>

          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            Tell us a little about your yard below. We will come out to measure your exact square footage, walk the property with you, and provide a clear, no-obligation quote.
          </p>

          {/* Quick neighborhood prefill chips */}
          <div className="mt-4 pt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-stone-700">Quick Select Your Neighborhood:</span>
            {BUSINESS_INFO.neighborhoods.slice(0, 4).map((sub) => (
              <button
                key={sub}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, addressOrSubdivision: sub }))}
                className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-emerald-100 hover:text-emerald-900 text-stone-700 font-semibold border border-stone-200 transition-colors"
              >
                + {sub}
              </button>
            ))}
          </div>

          {/* Form Confirmation Notice */}
          {formSubmitted ? (
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-emerald-50 border-2 border-emerald-500 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-black text-emerald-950 font-display">
                    Measurement Request Confirmed!
                  </h3>
                  
                  {/* Exact Confirmation Message Required By Prompt */}
                  <p className="text-sm sm:text-base text-emerald-900 leading-relaxed font-medium bg-white/70 p-4 rounded-xl border border-emerald-200">
                    "Thank you! We've received your measurement request for Morgans Landscaping. We will text or call you from (919) 437-1132 shortly to confirm your appointment time."
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-emerald-800 font-semibold">
                    <div>
                      <span className="text-stone-500 block">Contact Name:</span>
                      {formData.fullName}
                    </div>
                    <div>
                      <span className="text-stone-500 block">Phone:</span>
                      {formData.phone}
                    </div>
                    <div>
                      <span className="text-stone-500 block">Property / Subdivision:</span>
                      {formData.addressOrSubdivision}
                    </div>
                    <div>
                      <span className="text-stone-500 block">Time Window:</span>
                      {formData.timeWindow}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-900 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call (919) 437-1132 Now</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-stone-600 hover:text-stone-900 underline"
                    >
                      Submit another request or edit details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              
              {/* Row 1: Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., John & Emily Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full p-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                      formErrors.fullName ? 'border-red-400 focus:ring-red-300' : 'border-stone-300 focus:ring-emerald-500'
                    }`}
                  />
                  {formErrors.fullName && (
                    <span className="text-xs text-red-600 mt-1 block">{formErrors.fullName}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Phone Number (Call or Text) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g., (919) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full p-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                      formErrors.phone ? 'border-red-400 focus:ring-red-300' : 'border-stone-300 focus:ring-emerald-500'
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="text-xs text-red-600 mt-1 block">{formErrors.phone}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Property Address/Subdivision */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g., name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full p-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                      formErrors.email ? 'border-red-400 focus:ring-red-300' : 'border-stone-300 focus:ring-emerald-500'
                    }`}
                  />
                  {formErrors.email && (
                    <span className="text-xs text-red-600 mt-1 block">{formErrors.email}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Property Address or Subdivision *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Wendell Falls, Knightdale Station, or Street Address"
                    value={formData.addressOrSubdivision}
                    onChange={(e) => setFormData({ ...formData, addressOrSubdivision: e.target.value })}
                    className={`w-full p-3 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                      formErrors.addressOrSubdivision ? 'border-red-400 focus:ring-red-300' : 'border-stone-300 focus:ring-emerald-500'
                    }`}
                  />
                  {formErrors.addressOrSubdivision && (
                    <span className="text-xs text-red-600 mt-1 block">{formErrors.addressOrSubdivision}</span>
                  )}
                </div>
              </div>

              {/* Services Needed Checkboxes */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2.5">
                  Services Needed (Check all that apply) *
                </label>
                {formErrors.services && (
                  <span className="text-xs text-red-600 mb-2 block">{formErrors.services}</span>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { key: 'newConstructionPackage', label: 'New Construction Homeowner Package' },
                    { key: 'sodInstallation', label: 'Sod Installation (Bermuda / Zoysia / Fescue)' },
                    { key: 'riverRockBeds', label: 'Decorative River Rock Beds' },
                    { key: 'mulchInstallation', label: 'Mulch Installation & Bed Edging' },
                    { key: 'drainageFix', label: 'Drainage / Grading Fix' },
                  ].map((srv) => (
                    <label
                      key={srv.key}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs sm:text-sm font-semibold cursor-pointer transition-colors ${
                        formData.services[srv.key]
                          ? 'bg-emerald-50 text-emerald-950 border-emerald-400 shadow-sm'
                          : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.services[srv.key]}
                        onChange={() => handleServiceCheckbox(srv.key)}
                        className="w-4 h-4 rounded text-emerald-700 focus:ring-emerald-500"
                      />
                      <span>{srv.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 3: Estimated Yard Size & Preferred Time Window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Estimated Yard Size / Scope
                  </label>
                  <select
                    value={formData.yardScope}
                    onChange={(e) => setFormData({ ...formData, yardScope: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Front Yard Only">Front Yard Only</option>
                    <option value="Backyard Only">Backyard Only</option>
                    <option value="Full Property (Front & Back)">Full Property (Front & Back)</option>
                    <option value="Just Landscape Beds / Rock Borders">Just Landscape Beds / Rock Borders</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Preferred Time Window for Free Measurement
                  </label>
                  <select
                    value={formData.timeWindow}
                    onChange={(e) => setFormData({ ...formData, timeWindow: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Morning (8 AM – 12 PM)">Morning (8 AM – 12 PM)</option>
                    <option value="Afternoon (12 PM – 4 PM)">Afternoon (12 PM – 4 PM)</option>
                    <option value="Evening (4 PM – 6 PM)">Evening (4 PM – 6 PM)</option>
                  </select>
                </div>
              </div>

              {/* Project Notes or HOA Deadline (Optional) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Project Notes or HOA Deadline (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us if you recently closed on your home, have pets, or have an upcoming HOA deadline."
                  value={formData.projectNotes}
                  onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                  className="w-full p-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Form Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-emerald-700 to-[#14532d] hover:from-emerald-800 hover:to-[#0f291e] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Submitting Your Measurement Request...</span>
                ) : (
                  <>
                    <Calendar className="w-5 h-5 text-emerald-300" />
                    <span>Request My Free Yard Measurement</span>
                  </>
                )}
              </button>

              <div className="text-center text-xs text-stone-500 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero spam guarantee. We only contact you to schedule your requested measurement.</span>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}
