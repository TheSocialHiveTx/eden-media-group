
import React, { useState } from 'react';
import { Mail, MessageCircle, Share2, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-cinzel text-white mb-8">Collaborate</h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
              We are always looking for partners who share our commitment to intentional creativity.
            </p>

            <div className="space-y-12">
              <div className="group">
                <h3 className="text-blue-400 text-xs uppercase tracking-widest mb-4">Who We Collaborate With</h3>
                <p className="text-slate-300">Creators, brands, ministries, and visionaries who believe media should have depth.</p>
              </div>

              <div className="group">
                <h3 className="text-blue-400 text-xs uppercase tracking-widest mb-4">What We're Open To</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-400 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span>Brand Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span>Storytelling Projects</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span>Media Strategy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span>Art Collective Drops</span>
                  </li>
                </ul>
              </div>

              <div className="pt-10 space-y-4">
                <div className="flex items-center space-x-4 text-slate-400 hover:text-white transition-colors cursor-pointer">
                  <Mail size={20} />
                  <span>hello@edenmediagroup.com</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-400 hover:text-white transition-colors cursor-pointer">
                  <Share2 size={20} />
                  <span>@edenmediagroup</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-400 hover:text-white transition-colors cursor-pointer">
                  <MapPin size={20} />
                  <span>Based in the Global Digital Ecosystem</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-3xl border border-slate-800 p-8 md:p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in-95 duration-500">
                <div className="w-16 h-16 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center mb-6">
                  <MessageCircle size={32} />
                </div>
                <h2 className="text-2xl font-cinzel text-white mb-4">Inquiry Received</h2>
                <p className="text-slate-400 leading-relaxed max-w-xs">
                  Thank you for reaching out. An Eden strategist will review your inquiry with intention.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-400 text-xs uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-500 ml-1">Full Name</label>
                  <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-3 text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-500 ml-1">Email Address</label>
                  <input required type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-3 text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-500 ml-1">Inquiry Type</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-3 text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none">
                    <option>General Collaboration</option>
                    <option>Brand Partnership</option>
                    <option>Ministry Inquiry</option>
                    <option>Creative Collective</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-500 ml-1">Message</label>
                  <textarea required rows={5} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-3 text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="Tell us about your vision..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-white text-slate-950 rounded-xl text-xs uppercase tracking-[0.3em] font-bold hover:bg-blue-400 transition-all shadow-lg shadow-blue-900/10">
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
