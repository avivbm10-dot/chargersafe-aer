import React, { useRef, useState } from 'react';
import { Play, Pause, Zap } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="product-details" className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-cyan-500/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Video Section - "The Marked Part" */}
          <div className="lg:w-1/2 order-2 lg:order-1 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-900/20 group border border-slate-700 bg-slate-950 hover:border-cyan-500/50 transition-colors duration-500">
               
               {/* Video Player */}
               <video 
                 ref={videoRef}
                 autoPlay 
                 loop 
                 muted 
                 playsInline
                 className="w-full h-[400px] lg:h-[500px] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100 transition-transform"
                 poster="https://images.unsplash.com/photo-1610604636714-d88411a9517c?q=80&w=1000&auto=format&fit=crop"
               >
                 {/* Using a stock video representing charging/tech connectivity */}
                 <source src="https://assets.mixkit.co/videos/preview/mixkit-smartphone-charging-at-night-4561-large.mp4" type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
               
               {/* Dark Gradient Overlay for Text Readability */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>

               {/* Interactive Overlay UI */}
               <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <p className="text-green-400 font-mono text-xs font-bold tracking-widest uppercase">Turbo Active</p>
                      </div>
                      <p className="text-white text-2xl font-bold tracking-tight drop-shadow-md">טעינה רציפה ויציבה</p>
                  </div>
                  
                  <button 
                    onClick={togglePlay}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full hover:bg-cyan-500 hover:text-slate-900 hover:border-cyan-500 transition-all transform hover:scale-110 text-white group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </button>
               </div>

               {/* Tech Specs Floating Badge */}
               <div className="absolute top-6 right-6 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-slate-700/50 flex flex-col gap-1 transform group-hover:translate-y-1 transition-transform">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Zap className="w-4 h-4 fill-current" />
                    <span className="text-xs font-bold font-mono">PD 3.0 / 120W</span>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="lg:w-1/2 space-y-8 order-1 lg:order-2">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold tracking-widest uppercase mb-2 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
              מפרט טכני
            </div>
            <h2 className="text-4xl font-black text-white leading-tight">
              עיצוב שחושב עליך, <br/>
              <span className="text-slate-400">עד הפרט האחרון</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              ה-ChargerSafe לא רק חזק, הוא חכם. מנגנון ה-Click-Lock עוצב ארגונומית למניעת ניתוקים אקראיים בתיק או בכיס, תוך שהוא מאפשר שחרור מיידי בלחיצה רכה אחת.
            </p>
            
            <div className="space-y-5">
              {[
                "ציפוי ניילון בליסטי כפול (Double-Braided)",
                "ראשי אלומיניום תעופתי (Aerospace Grade)",
                "תמיכה בהעברת נתונים 480Mbps",
                "אורך 1.8 מטר לשימוש נוח במיטה או ברכב"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-800 group">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] group-hover:scale-150 transition-transform"></div>
                  <span className="text-slate-200 font-medium group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;