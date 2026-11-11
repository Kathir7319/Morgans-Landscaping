import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin, CheckCircle2, Shield, ArrowUpRight, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/landscapingData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f291e] text-stone-300 pt-16 pb-12 border-t-4 border-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/60">
          
          {/* Company Info & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white text-xl shadow-md">
                🌿
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  {BUSINESS_INFO.fullName}
                </h3>
                <p className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                  Knightdale Rock & Yard Landscaping
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-md">
              Proudly serving homeowners across Knightdale, Wendell, Wendell Falls, and Eastern Wake County, NC. We turn bare builder-grade clay into durable, HOA-approved yards with farm-fresh sod, river rock borders, and custom drainage beds.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {BUSINESS_INFO.neighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-950/80 text-emerald-200 border border-emerald-800/60"
                >
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 font-display">
              Services & Specialties
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-200 font-medium">New Construction Sod Installation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-200 font-medium">Decorative River Rock Beds & Borders</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-200 font-medium">Low-Maintenance Mulch Design & Trench Edging</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-200 font-medium">Downspout Splash Pads & Dry Creek Beds</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-200 font-medium">Yard Grading & Red Clay Soil Preparation</span>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 font-display">
              Direct Contact & Hours
            </h4>

            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="group flex items-center gap-3 p-3 rounded-xl bg-emerald-950/70 border border-emerald-800/70 hover:border-emerald-500 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-stone-400 block font-semibold uppercase">Call or Text Direct</span>
                  <span className="text-base font-extrabold text-white">{BUSINESS_INFO.phone}</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 text-stone-300 p-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="text-stone-100 block">Operating Hours:</strong>
                  {BUSINESS_INFO.hours}
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-stone-300 p-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong className="text-stone-100 block">HOA Compliance Guaranteed:</strong>
                  Wake County HOA Architectural Guidelines
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {currentYear} {BUSINESS_INFO.fullName}. All rights reserved. Locally operated in Knightdale & Wendell, NC.
          </p>

          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-emerald-300 transition-colors">Home Packages</Link>
            <Link to="/quote-and-gallery#gallery" className="hover:text-emerald-300 transition-colors">Rock & Mulch Gallery</Link>
            <Link to="/quote-and-gallery#quote-scheduler" className="hover:text-emerald-300 transition-colors">Free Yard Measurement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
