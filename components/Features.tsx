import React from 'react';
import { Lock, Zap, RefreshCw, Smartphone, Anchor, Shield } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: '1',
    title: 'מנגנון Click-Lock™',
    description: 'חיבור מכני מדויק הננעל בראש המטען עם צליל "קליק" משביע רצון. ביטחון מלא, אפס ניתוקים.',
    icon: <Lock className="w-7 h-7 text-cyan-400" />
  },
  {
    id: '2',
    title: 'Turbo Charge 3.0',
    description: 'שבב חכם לניהול זרם המאפשר טעינה במהירות מקסימלית תוך שמירה על בריאות הסוללה.',
    icon: <Zap className="w-7 h-7 text-yellow-400" />
  },
  {
    id: '3',
    title: 'סיבי ניילון בליסטי',
    description: 'מבנה קלוע בצפיפות גבוהה המחוזק בקוולאר, עמיד בפני 50,000 כיפופים ומשיכות אגרסיביות.',
    icon: <Shield className="w-7 h-7 text-purple-400" />
  },
  {
    id: '4',
    title: 'Universal Core',
    description: 'תאימות מלאה לכל הפרוטוקולים: iPhone (Lightning/USB-C), Android וטאבלטים.',
    icon: <Smartphone className="w-7 h-7 text-pink-400" />
  },
  {
    id: '5',
    title: 'שחרור בטיחותי',
    description: 'כפתור שחרור ארגונומי המונע שחיקה של שקע הטעינה במכשיר. ניתוק חלק ביד אחת.',
    icon: <RefreshCw className="w-7 h-7 text-green-400" />
  },
  {
    id: '6',
    title: 'גמישות 360°',
    description: 'מבנה צוואר גמיש במיוחד המבטל את הצורך "למצוא את הזווית". הטעינה עובדת תמיד.',
    icon: <Anchor className="w-7 h-7 text-blue-400" />
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-900/10 to-transparent opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            הנדסת אנוש <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">מתקדמת</span>
          </h2>
          <p className="text-xl text-slate-400 font-light">
            לקחנו את כל הבעיות של הכבלים הרגילים ופתרנו אותן אחת אחת בעזרת הנדסה חכמה.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="group relative bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.2)] hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-cyan-500/30 group-hover:scale-110 transition-all duration-300 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;