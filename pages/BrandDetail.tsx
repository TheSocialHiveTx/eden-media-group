
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BRANDS } from '../constants';
import { ArrowLeft, ExternalLink, Shield, Sparkles, Zap } from 'lucide-react';

const BrandDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const brand = BRANDS.find(b => b.id === id);

  if (!brand) return <Navigate to="/brands" />;

  return (
    <div className="pt-32 pb-20">
      {/* Header Banner */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img src={brand.image} alt={brand.name} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-20">
          <div className="max-w-7xl mx-auto">
            <Link to="/brands" className="inline-flex items-center text-slate-500 hover:text-white transition-colors mb-8 text-xs uppercase tracking-widest">
              <ArrowLeft size={14} className="mr-2" />
              Back to Directory
            </Link>
            <h1 className="text-5xl md:text-8xl font-cinzel text-white mb-4 tracking-tighter">{brand.name}</h1>
            <p className="text-xl md:text-2xl text-blue-400 font-cinzel tracking-widest uppercase">{brand.tone}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-sm uppercase tracking-[0.4em] text-slate-500 mb-8 border-l-2 border-blue-600 pl-4">The Mission</h2>
              <p className="text-2xl md:text-4xl font-light text-slate-200 leading-tight italic">
                "{brand.mission}"
              </p>
            </section>

            <section className="bg-slate-900/30 p-8 md:p-12 rounded-3xl border border-slate-800">
              <h2 className="text-sm uppercase tracking-[0.4em] text-slate-500 mb-8">Brand Story</h2>
              <p className="text-lg text-slate-300 leading-loose">
                {brand.description}
                <br /><br />
                As part of the Eden Media Group, {brand.name} adheres to our core philosophy of intentional storytelling. We believe that creative expression is a vehicle for truth, and {brand.name} is our specialized lens for exploring that truth through the theme of {brand.tone.split(',')[0].toLowerCase()}.
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 sticky top-32">
              <h3 className="text-white font-cinzel text-lg mb-6 tracking-widest uppercase">Ecosystem DNA</h3>
              <div className="space-y-6">
                {brand.values.map((value, i) => (
                  <div key={value} className="flex items-start space-x-4">
                    <div className="mt-1 text-blue-500">
                      {i === 0 ? <Shield size={18} /> : i === 1 ? <Sparkles size={18} /> : <Zap size={18} />}
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold uppercase tracking-wider mb-1">{value}</p>
                      <p className="text-slate-500 text-xs">Upholding the standard of excellence across the Eden network.</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-slate-800">
                <button className="w-full py-4 bg-white text-slate-950 rounded-xl text-xs uppercase tracking-[0.2em] font-bold hover:bg-blue-400 transition-all flex items-center justify-center space-x-2">
                  <span>Visit {brand.name}</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetail;
