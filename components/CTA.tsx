import React from 'react';
import { CheckCircle, ShoppingCart } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white text-center relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-300 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-300 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold mb-6 animate-pulse">
          מבצע השקה לזמן מוגבל
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">
          להפסיק לקנות. להתחיל להטעין.
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-blue-50 font-medium leading-relaxed">
          הצטרפו למהפכת ה-ChargerSafe ותהנו מראש שקט, סוללה מלאה וחיסכון ענק בכסף.
        </p>
        
        <div className="flex flex-col items-center mb-12">
          <button className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-50 px-12 py-6 rounded-2xl font-black text-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3">
            <ShoppingCart className="w-6 h-6" />
            <span>רכשו עכשיו - 89 ₪ בלבד</span>
          </button>
          <span className="text-sm mt-4 text-white/80 font-medium">משלוח חינם בקנייה מעל 150 ₪</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 text-sm sm:text-base font-semibold bg-white/10 backdrop-blur-sm inline-flex p-6 rounded-2xl border border-white/10">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span>אחריות מלאה לשנה</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span>תשלום מאובטח SSL</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span>30 ימי ניסיון ללא סיכון</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;