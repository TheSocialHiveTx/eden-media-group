
import React from 'react';
import { Link } from 'react-router-dom';
import { BRANDS, NAV_ITEMS } from '../constants';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#01040a] pt-20 pb-10 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-cinzel font-bold text-white">E</div>
                <span className="font-cinzel text-lg tracking-widest text-white uppercase">Eden Media</span>
             </Link>
             <p className="text-slate-500 text-sm leading-relaxed mb-8">
               A creative sanctuary for brands built on passion, purpose, and timeless truth.
             </p>
             <div className="flex items-center space-x-4">
                <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Instagram size={18} /></a>
                <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Twitter size={18} /></a>
                <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors"><Mail size={18} /></a>
             </div>
          </div>
          
          <div>
            <h4 className="text-white font-cinzel text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-slate-500 hover:text-blue-400 text-sm transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-cinzel text-sm uppercase tracking-widest mb-6">Our Brands</h4>
            <ul className="space-y-4">
              {BRANDS.map(brand => (
                <li key={brand.id}>
                  <a href={brand.externalLink} className="text-slate-500 hover:text-blue-400 text-sm transition-colors">{brand.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-cinzel text-sm uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-slate-500 text-xs mb-4">Join "The Eden Dispatch" for quarterly insights on creativity and intention.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="flex-1 bg-slate-900 border border-slate-800 rounded-l-lg px-4 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg text-[10px] uppercase tracking-widest font-bold hover:bg-blue-500 transition-colors">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Eden Media Group. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-blue-400">Privacy Policy</a>
             <a href="#" className="hover:text-blue-400">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
