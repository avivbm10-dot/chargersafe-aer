import React from 'react';
import { ShieldCheck, BatteryCharging, ArrowLeft, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCTA = () => {
    const element = document.getElementById('cta');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 text-white pt-24 pb-12 overflow-hidden">
      {/* Tech Background Grid & Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 text-center lg:text-right">
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-slate-900/50 border border-cyan-500/30 backdrop-blur-sm rounded-full px-4 py-1.5 text-cyan-300 text-sm font-medium shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="tracking-wide">הטכנולוגיה החדשה כבר כאן</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            הסוף לכבלים <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-blue-500 to-purple-600">
              שנקרעים
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            הכירו את <strong className="text-white font-bold">ChargerSafe</strong>. הונדס מחדש עם מנגנון נעיצה מכני, סיבי ניילון מחוזקים וטכנולוגיית טעינה אדפטיבית. זה לא סתם כבל, זה שדרוג לחיים.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={scrollToCTA} className="group relative bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative">הזמן את ChargerSafe</span>
              <ArrowLeft className="w-5 h-5 relative group-hover:-translate-x-1 transition-transform" />
            </button>
            <a href="#product-details" className="px-8 py-4 rounded-xl font-bold text-lg text-white border border-white/10 hover:bg-white/5 hover:border-white/30 transition-all flex items-center justify-center">
              איך זה עובד?
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-slate-500 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-500" />
              <span>MIL-STD Durability</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>PD 3.0 Fast Charge</span>
            </div>
          </div>
        </div>

        <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
          {/* Custom Graphic Composition matching user request */}
          <div className="relative w-full max-w-md aspect-[3/4] lg:aspect-auto lg:h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950 group hover:border-cyan-500/50 transition-all duration-500">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0f172a] to-[#020617] z-0"></div>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            {/* Text Graphic */}
            <div className="absolute top-16 left-0 right-0 text-center z-20 flex flex-col items-center pointer-events-none">
                <h2 className="text-5xl md:text-6xl font-bold text-slate-200 tracking-tight mb-2 drop-shadow-lg">ChargerSafe</h2>
                <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">CLICK-LOCK</h2>
            </div>

            {/* Cable Image Composition */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pt-24">
               <img 
                  src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1000&auto=format&fit=crop"
                  alt="ChargerSafe Cable"
                  className="w-[130%] h-full object-cover mix-blend-lighten opacity-90 hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
            </div>

            {/* Arrow Graphic */}
            <div className="absolute bottom-32 left-8 z-30 opacity-90 animate-pulse">
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transform -rotate-12">
                    <path d="M25 80 Q 50 20 85 30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" markerEnd="url(#arrowhead)" />
                    <defs>
                      <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="currentColor" />
                      </marker>
                    </defs>
                </svg>
            </div>

             {/* Floating Info Badges */}
             <div className="absolute top-6 right-6 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/50 flex items-center gap-2 z-30 shadow-xl">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-mono text-xs text-slate-300">מנגנון נעילה פעיל</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
