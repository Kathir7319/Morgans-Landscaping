import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, Shield, ChevronRight, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/landscapingData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Subdivision Packages", href: "/#subdivision-packages" },
    { label: "Sod Pricing Guide", href: "/#sod-pricing-guide" },
    { label: "Rock & Mulch Gallery", href: "/quote-and-gallery#gallery" },
    { label: "Free Quote", href: "/quote-and-gallery#quote-scheduler" }
  ];

  return (
    <>
      {/* Top Banner Notice for Wendell / Knightdale Homeowners */}
      <aside aria-label="Announcement" className="bg-[#0f291e] text-emerald-100 text-xs sm:text-sm py-2 px-4 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              New Closings
            </span>
            <span>Now Scheduling Spring & Summer Yard Measurements in <strong>Wendell Falls & Knightdale</strong></span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-stone-300">
            <span>Hours: Mon–Sat 7am–6pm</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">HOA Architectural Compliant</span>
          </div>
        </div>
      </aside>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200/80' 
          : 'bg-[#FAF9F5]/95 backdrop-blur-sm py-4 border-b border-stone-200/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-800 to-[#0f291e] flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform">
                <span className="text-xl">🌿</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 font-display flex items-center gap-1.5 leading-tight">
                  Morgans Landscaping
                </span>
                <span className="text-xs sm:text-xs font-semibold text-emerald-700 tracking-wide uppercase">
                  Knightdale Rock & Yard
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = (link.href === '/' && location.pathname === '/') || 
                                 (link.href.startsWith('/quote-and-gallery') && location.pathname === '/quote-and-gallery');
                
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                      isActive 
                        ? 'text-emerald-800 bg-emerald-50' 
                        : 'text-stone-700 hover:text-emerald-800 hover:bg-stone-100/70'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Header Action Buttons (CTA) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-bold text-stone-800 hover:text-emerald-800 rounded-lg hover:bg-stone-100 transition-colors"
                title="Call Morgans Landscaping"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[10px] uppercase font-bold text-stone-500 block">Call / Text Now</span>
                  <span className="text-sm font-extrabold text-stone-900">{BUSINESS_INFO.phone}</span>
                </div>
              </a>

              <Link
                to="/quote-and-gallery#quote-scheduler"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-700 to-[#14532d] hover:from-emerald-800 hover:to-[#0f291e] shadow-md shadow-emerald-900/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4 text-emerald-200" />
                <span>Get a Free Yard Quote</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="p-2 rounded-lg bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors"
                aria-label="Call Now"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="sm:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-semibold text-stone-800 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-50 text-emerald-900 font-bold border border-emerald-200"
              >
                <Phone className="w-5 h-5 text-emerald-700" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <Link
                to="/quote-and-gallery#quote-scheduler"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-[#14532d] text-white font-bold shadow-md"
              >
                <Calendar className="w-5 h-5 text-emerald-200" />
                <span>Get a Free Yard Quote</span>
              </Link>
            </div>

            <div className="text-center pt-2 text-xs text-stone-500 flex items-center justify-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>HOA-Compliant Designs • Local Knightdale & Wendell Crew</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
