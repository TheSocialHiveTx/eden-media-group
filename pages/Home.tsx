
import React from 'react';
import { Link } from 'react-router-dom';
import { BRANDS } from '../constants';
import BrandCard from '../components/BrandCard';
import { ArrowRight, Sparkles, Compass, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  const latestPosts = [
    { title: "The Art of Slow Growth", date: "Oct 12, 2024", excerpt: "Why we choose duration over trends in a fast-paced media landscape." },
    { title: "Roots and Wings", date: "Sep 28, 2024", excerpt: "How our foundation of faith empowers creative risk-taking." },
    { title: "Designing for Meaning", date: "Sep 05, 2024", excerpt: "A deep dive into the semiotics of the Eden Media ecosystem." }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-800/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur text-[10px] uppercase tracking-[0.3em] text-blue-400">
            <Sparkles size={12} />
            <span>A Creative Sanctuary</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-cinzel text-white mb-8 leading-tight tracking-tight glow-text">
            Where Passion <br /> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-slate-400">Purpose</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
            A creative ecosystem for brands that inspire, challenge, and connect. Rooted in intentional storytelling and timeless values.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/brands" className="w-full sm:w-auto px-12 py-5 bg-white text-slate-950 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-blue-400 transition-all flex items-center justify-center group shadow-2xl shadow-blue-500/10">
              Explore Our Brands
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
            <Link to="/philosophy" className="w-full sm:w-auto px-12 py-5 border border-slate-700 text-white rounded-full text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition-all">
              Our Mission
            </Link>
          </div>
        </div>

        {/* Cinematic Visual Element */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
            <div className="w-[1px] h-20 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0" />
            <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-4">Scroll to explore</span>
        </div>
      </section>

      {/* Mid Section - Who We Are */}
      <section className="py-40 px-6 bg-[#01040a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.5em] text-blue-500 mb-8">The Eden Core</h2>
          <h3 className="text-4xl md:text-5xl font-cinzel text-white mb-10 tracking-wide">Intentional Storytelling</h3>
          <p className="text-xl text-slate-400 font-light leading-relaxed mb-16">
            Eden Media Group was born from a simple yet powerful idea: creativity should be more than an aesthetic exercise. It should be a tool for impact, a reflection of truth, and a bridge to human connection.
          </p>
          <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-auto" />
        </div>
      </section>

      {/* Brand Preview Grid */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 space-y-6 md:space-y-0">
            <div>
              <h2 className="text-5xl font-cinzel text-white mb-4">Our Ecosystem</h2>
              <p className="text-slate-400 max-w-lg text-lg">Each brand within our group is a unique expression of our core values, crafted with precision and soul.</p>
            </div>
            <Link to="/brands" className="px-6 py-3 border border-slate-800 rounded-full text-slate-300 uppercase tracking-widest text-[10px] flex items-center hover:bg-slate-900 transition-all">
              View All Directory <ArrowRight className="ml-2" size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {BRANDS.map(brand => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Belief Statement */}
      <section className="py-40 relative px-6 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <blockquote className="text-4xl md:text-6xl font-cinzel italic text-slate-200 leading-tight mb-10">
            “Media should do more than look good—it should mean something.”
          </blockquote>
          <p className="text-slate-500 uppercase tracking-[0.4em] text-[10px]">The Eden Philosophy</p>
        </div>
      </section>

      {/* Journal Preview Section */}
      <section className="py-40 px-6 bg-[#01040a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-[0.5em] text-blue-500 mb-6">Journal</h2>
            <h3 className="text-4xl font-cinzel text-white tracking-widest uppercase">The Eden Dispatch</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {latestPosts.map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="mb-6 overflow-hidden rounded-2xl aspect-[4/3] bg-slate-900 border border-slate-800">
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
                    <BookOpen className="text-slate-700 group-hover:text-blue-500 transition-colors" size={48} />
                  </div>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">{post.date}</p>
                <h4 className="text-xl font-cinzel text-white mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-xs uppercase tracking-widest text-blue-500 group-hover:underline">Read Article</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto rounded-[3rem] border border-slate-800 p-12 md:p-24 text-center relative overflow-hidden group bg-gradient-to-br from-slate-900/50 to-transparent">
          <div className="absolute top-0 right-0 p-12 text-blue-500/5 group-hover:text-blue-500/10 transition-all duration-1000 rotate-12 group-hover:rotate-0">
            <Compass size={240} />
          </div>
          <h2 className="text-4xl md:text-6xl font-cinzel text-white mb-8">Partner With Eden</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Whether you're a creator, a brand, or a ministry, let's explore how intentional creativity can elevate your message and deepen your impact.
          </p>
          <Link to="/contact" className="inline-block px-14 py-6 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-full text-xs uppercase tracking-[0.3em] font-bold shadow-2xl shadow-blue-900/40 hover:scale-105 transition-all">
            Initiate Collaboration
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
