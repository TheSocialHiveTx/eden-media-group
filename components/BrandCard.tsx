
import React from 'react';
import { Brand } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface BrandCardProps {
  brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-900/50 transition-all duration-500">
      <div className="aspect-[16/10] overflow-hidden">
        <img 
          src={brand.image} 
          alt={brand.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-cinzel text-xl text-white tracking-wide">{brand.name}</h3>
          <span className="text-[10px] uppercase tracking-tighter text-blue-400 border border-blue-400/30 px-2 py-0.5 rounded">
            {brand.tone.split(',')[0]}
          </span>
        </div>
        <p className="text-slate-400 text-sm mb-6 line-clamp-2 italic leading-relaxed">
          "{brand.mission}"
        </p>
        <div className="flex items-center space-x-4">
          <button className="flex-1 px-4 py-2 bg-slate-800 text-white text-xs uppercase tracking-widest rounded hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2">
            <span>Explore</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
