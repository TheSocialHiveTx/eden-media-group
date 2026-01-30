
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, BRANDS } from '../constants';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#020617]/90 backdrop-blur-md py-4 border-b border-slate-800' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-slate-800 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/20 transition-all">
             <span className="font-cinzel font-bold text-white text-xl">E</span>
          </div>
          <span className="font-cinzel text-xl tracking-widest text-white uppercase">EDEN <span className="text-slate-500 font-light">MEDIA</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.path} className="relative group" ref={item.label === 'Our Brands' ? dropdownRef : null}>
              {item.label === 'Our Brands' ? (
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`text-[11px] uppercase tracking-[0.2em] transition-colors flex items-center space-x-1 hover:text-blue-400 ${
                    location.pathname.startsWith('/brands') ? 'text-blue-400' : 'text-slate-300'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown size={12} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link 
                  to={item.path}
                  className={`text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-blue-400 ${
                    location.pathname === item.path ? 'text-blue-400' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {/* Brands Dropdown */}
              {item.label === 'Our Brands' && dropdownOpen && (
                <div className="absolute top-full left-0 mt-4 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
                    <Link 
                      to="/brands" 
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-3 text-[10px] uppercase tracking-widest text-slate-500 hover:text-white border-b border-slate-800 mb-1"
                    >
                      All Brands Directory
                    </Link>
                    {BRANDS.map(brand => (
                      <Link 
                        key={brand.id}
                        to={`/brands/${brand.id}`}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-3 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-blue-400 transition-colors"
                      >
                        {brand.name}
                        <span className="block text-[10px] text-slate-500 mt-0.5">{brand.tone.split(',')[0]}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className="px-6 py-2.5 bg-white text-slate-950 hover:bg-blue-400 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all">
            Join Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#020617] border-b border-slate-800 animate-in fade-in slide-in-from-top-4">
          <div className="p-6 flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <React.Fragment key={item.path}>
                <Link 
                  to={item.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-cinzel tracking-widest text-slate-300 hover:text-blue-400 flex justify-between items-center"
                >
                  {item.label}
                  <ChevronRight size={16} />
                </Link>
                {item.label === 'Our Brands' && (
                  <div className="pl-6 space-y-3 border-l border-slate-800">
                    {BRANDS.map(brand => (
                      <Link 
                        key={brand.id}
                        to={`/brands/${brand.id}`}
                        onClick={() => setIsOpen(false)}
                        className="block text-slate-500 hover:text-blue-400 text-sm"
                      >
                        {brand.name}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
