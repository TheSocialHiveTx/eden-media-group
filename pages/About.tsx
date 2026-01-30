
import React from 'react';
import { Leaf, Heart, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-cinzel text-white mb-8">Founding Vision</h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-3xl">
            Eden Media Group was founded on the belief that we are called to be stewards of creativity. In a world saturated with ephemeral content, we choose to build for depth and duration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-center space-x-4 mb-4">
                <Leaf className="text-blue-500" />
                <h2 className="text-2xl font-cinzel text-white">Why "Eden"?</h2>
              </div>
              <p className="text-slate-400 leading-relaxed font-light">
                Eden represents the original creative spark—a place of growth, intention, and flourishing. We view every brand we launch as a seed planted in a curated garden, destined to grow and provide value to the world.
              </p>
            </div>
            
            <div className="group">
              <div className="flex items-center space-x-4 mb-4">
                <Heart className="text-blue-500" />
                <h2 className="text-2xl font-cinzel text-white">Rooted in Faith</h2>
              </div>
              <p className="text-slate-400 leading-relaxed font-light">
                Our creative foundation is rooted in faith. This doesn't mean everything we do is a sermon; it means everything we do is done with integrity, excellence, and a commitment to truth that transcends trends.
              </p>
            </div>
          </div>
          
          <div className="relative aspect-square">
            <div className="absolute inset-0 border border-slate-800 rounded-3xl rotate-3 scale-95" />
            <img 
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1000" 
              alt="Hands cultivating plant" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-800 pt-20">
          <div className="p-8 bg-slate-900/30 rounded-2xl border border-slate-800">
             <div className="text-blue-400 mb-6"><Lightbulb size={32} /></div>
             <h3 className="text-xl font-cinzel text-white mb-4">Truth & Beauty</h3>
             <p className="text-slate-400 text-sm font-light">We believe that truth and beauty are inseparable. Great art should reflect the complexity of the human experience while pointing toward hope.</p>
          </div>
          <div className="p-8 bg-slate-900/30 rounded-2xl border border-slate-800">
             <div className="text-blue-400 mb-6"><Users size={32} /></div>
             <h3 className="text-xl font-cinzel text-white mb-4">Commitment to Impact</h3>
             <p className="text-slate-400 text-sm font-light">Success at Eden isn't just measured in metrics. It's measured in the lives touched, the stories told, and the lasting meaning our brands provide.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
