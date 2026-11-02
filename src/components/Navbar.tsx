import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active state
      const sections = ['home', 'about', 'services', 'why-us', 'process', 'estimator', 'leadership', 'roadmap', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Cost Estimator', href: '#estimator', id: 'estimator' },
    { name: 'Leadership', href: '#leadership', id: 'leadership' },
    { name: 'Roadmap', href: '#roadmap', id: 'roadmap' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#0B1C33] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#F28C28]" />
              {COMPANY_INFO.location}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#F28C28]" />
              {COMPANY_INFO.operatingHours}
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-[#F28C28] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F28C28]" />
              <span className="font-medium text-white">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-[#F28C28] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-200'
            : 'bg-white/98 backdrop-blur-sm py-4 border-b border-slate-100 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="focus:outline-none focus:ring-2 focus:ring-[#F28C28] rounded-lg">
            <Logo size="md" />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#102B4E] bg-blue-50/80 font-bold'
                      : 'text-[#252B35] hover:text-[#245B91] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F28C28] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenQuoteModal) {
                  e.preventDefault();
                  onOpenQuoteModal();
                }
              }}
              className="inline-flex items-center gap-2 bg-[#F28C28] hover:bg-[#d9771e] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Get a Business Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-2 text-[#102B4E] bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              aria-label="Call Shresth Warehouse"
            >
              <Phone className="w-5 h-5 text-[#F28C28]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#102B4E] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top duration-200">
            <div className="px-4 pt-3 pb-6 space-y-1">
              <div className="bg-slate-50 p-3 rounded-lg mb-3 text-xs text-slate-600 flex flex-col gap-1.5 border border-slate-200">
                <div className="flex items-center gap-2 font-medium text-[#102B4E]">
                  <MapPin className="w-3.5 h-3.5 text-[#F28C28]" />
                  <span>{COMPANY_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F28C28]" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:underline">{COMPANY_INFO.phone}</a>
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-[#102B4E] bg-blue-50 font-bold border-l-4 border-[#F28C28]'
                      : 'text-[#252B35] hover:bg-slate-50 hover:text-[#245B91]'
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3">
                <a
                  href="#contact"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenQuoteModal) onOpenQuoteModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#F28C28] hover:bg-[#d9771e] text-white font-bold py-3 px-4 rounded-lg shadow"
                >
                  <span>Get a Business Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
