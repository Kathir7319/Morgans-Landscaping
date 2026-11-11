import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Calendar, Menu, X, Shield, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/landscapingData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      if (location.pathname === '/') {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/#${sectionId}`);
      }
      return;
    }

    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (location.pathname === path) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(href);
      }
      return;
    }

    navigate(href);
  };

  return (
    <>
      {/* Top Banner Notice for Wendell / Knightdale Homeowners */}
      <aside aria-label="Announcement" className="bg-[#0b241a] text-emerald-100 text-xs py-2 px-3 sm:px-4 border-b border-emerald-900/60 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/25 text-emerald-300 border border-emerald-400/30 whitespace-nowrap">
              New Closings
            </span>
            <span className="text-[11px] sm:text-xs">
              Now Scheduling Spring & Summer Yard Measurements in <strong>Wendell Falls & Knightdale</strong>
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] sm:text-xs font-medium text-stone-300 whitespace-nowrap">
            <span>Hours: Mon–Sat 7am–6pm</span>
            <span className="hidden md:inline text-emerald-700">•</span>
            <span className="hidden md:inline text-emerald-300 font-semibold">HOA Architectural Compliant</span>
          </div>
        </div>
      </aside>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-stone-200/90' 
          : 'bg-[#FAF9F5]/95 backdrop-blur-md py-3 sm:py-4 border-b border-stone-200/70'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 lg:gap-4">
            
            {/* Logo / Brand Name */}
            <Link 
              to="/" 
              onClick={(e) => handleNavClick(e, '/')}
              className="group flex items-center gap-2.5 sm:gap-3 flex-shrink-0"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-800 to-[#0f291e] flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform flex-shrink-0">
                <span className="text-xl">🌿</span>
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="text-base sm:text-lg lg:text-xl font-black tracking-tight text-stone-900 font-display flex items-center gap-1.5 leading-tight">
                  Morgans Landscaping
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-emerald-700 tracking-wider uppercase">
                  Knightdale Rock & Yard
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 flex-shrink-0">
              {navLinks.map((link) => {
                const isActive = (link.href === '/' && location.pathname === '/') || 
                                 (link.href.startsWith('/quote-and-gallery') && location.pathname === '/quote-and-gallery');
                
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-2.5 xl:px-3.5 py-1.5 rounded-lg text-xs xl:text-sm font-bold whitespace-nowrap transition-colors duration-150 flex-shrink-0 ${
                      isActive 
                        ? 'text-emerald-800 bg-emerald-100/70' 
                        : 'text-stone-700 hover:text-emerald-800 hover:bg-stone-100/80'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Header Action Buttons (CTA) */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              {/* Phone CTA */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex-shrink-0 inline-flex items-center gap-2 px-2.5 xl:px-3 py-1.5 rounded-xl hover:bg-stone-100/80 transition-colors whitespace-nowrap"
                title="Call Morgans Landscaping"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-4 h-4 text-emerald-800" />
                </div>
                <div className="text-left leading-tight whitespace-nowrap">
                  <span className="text-[10px] uppercase font-bold text-stone-500 block tracking-wider">
                    Call / Text Now
                  </span>
                  <span className="text-xs xl:text-sm font-black text-stone-900 tracking-tight whitespace-nowrap tabular-nums">
                    {BUSINESS_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Free Quote CTA */}
              <button
                type="button"
                onClick={(e) => handleNavClick(e, '/quote-and-gallery#quote-scheduler')}
                className="flex-shrink-0 inline-flex items-center gap-2 px-3.5 xl:px-4 py-2 sm:py-2.5 rounded-xl text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-emerald-700 to-[#14532d] hover:from-emerald-800 hover:to-[#0f291e] shadow-md shadow-emerald-900/15 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-emerald-200 flex-shrink-0" />
                <span className="whitespace-nowrap">Get a Free Yard Quote</span>
              </button>
            </div>

            {/* Mobile Menu & Phone Button */}
            <div className="flex sm:hidden items-center gap-1.5 flex-shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="p-2 rounded-xl bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-stone-700 hover:bg-stone-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-xl text-sm font-bold text-stone-800 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-50 text-emerald-900 font-bold text-sm border border-emerald-200"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={(e) => handleNavClick(e, '/quote-and-gallery#quote-scheduler')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-[#14532d] text-white font-bold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4 text-emerald-200" />
                <span>Get a Free Yard Quote</span>
              </button>
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
