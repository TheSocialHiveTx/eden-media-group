
import React from 'react';

const Philosophy: React.FC = () => {
  const sections = [
    {
      title: "Creativity with Intention",
      content: "We reject the idea of 'art for art's sake' as a hollow pursuit. For us, creativity is a responsibility. Every pixel, word, and frame is evaluated against its capacity to contribute positively to the human story.",
      image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Truth-Centered Storytelling",
      content: "Narrative is the most powerful tool ever invented. We use it to explore deep truths about our existence, our relationships, and our faith. We believe authentic stories bridge the gap between hearts and minds.",
      image: "https://images.unsplash.com/photo-1491841651911-c44c30c34548?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Art as a Tool for Impact",
      content: "Aesthetics are the gateway, but impact is the destination. We strive to create work that prompts reflection, inspires action, and leaves a legacy of meaning in the lives of our audience.",
      image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="flex flex-col bg-slate-950">
      {sections.map((section, idx) => (
        <section key={idx} className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={section.image} alt={section.title} className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
          </div>
          
          <div className="relative z-10 max-w-4xl px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-cinzel text-white mb-8 tracking-widest uppercase">{section.title}</h2>
            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed italic">
              {section.content}
            </p>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-10 h-10 border border-slate-800 rounded-full flex items-center justify-center animate-bounce">
            <div className="w-1 h-1 bg-slate-500 rounded-full" />
          </div>
        </section>
      ))}
      
      <section className="py-40 px-6 text-center">
        <h3 className="text-2xl font-cinzel text-slate-500 mb-4 uppercase tracking-[0.5em]">The Eternal Foundation</h3>
        <p className="text-slate-400 max-w-2xl mx-auto leading-loose italic">
          “For we are His workmanship, created to do good works, which were prepared in advance for us to do.”
        </p>
      </section>
    </div>
  );
};

export default Philosophy;
