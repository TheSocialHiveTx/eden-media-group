
import React from 'react';
import { BRANDS } from '../constants';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

const Brands: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-cinzel text-white mb-6">Our Brands</h1>
          <p className="text-slate-400 text-lg font-light">A diverse directory of expressions, all connected by a single creative heartbeat.</p>
        </header>

        <div className="space-y-32">
          {BRANDS.map((brand, index) => (
            <div key={brand.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center`}>
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-slate-800 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-slate-900 rounded-3xl overflow-hidden aspect-video">
                    <img src={brand.image} alt={brand.name} className="w-full h-full object-cover opacity-80" />
                  </div>
                </div>
              </div>
              
              <div className="flex-1 space-y-8">
                <div>
                  <h2 className="text-4xl font-cinzel text-white mb-2">{brand.name}</h2>
                  <span className="text-blue-400 text-sm tracking-widest uppercase">{brand.tone}</span>
                </div>
                
                <p className="text-slate-400 text-lg font-light leading-relaxed italic">"{brand.mission}"</p>
                <p className="text-slate-300 leading-relaxed">{brand.description}</p>
                
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Core Values</p>
                  <div className="flex flex-wrap gap-4">
                    {brand.values.map(v => (
                      <div key={v} className="flex items-center space-x-2 text-slate-400 text-sm">
                        <CheckCircle2 size={16} className="text-blue-500" />
                        <span>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button className="flex items-center space-x-3 px-8 py-3 border border-slate-700 rounded-full text-white text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition-all group">
                    <span>Visit Official Website</span>
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
