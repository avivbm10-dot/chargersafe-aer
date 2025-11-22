import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'דניאל כהן',
    role: 'גיימר וסטרימר',
    content: 'סוף סוף כבל שלא מתנתק לי באמצע משחק! המנגנון קליק פשוט גאוני, והכבל מרגיש סופר איכותי. שווה כל שקל.',
    rating: 5
  },
  {
    id: '2',
    name: 'שירה לוי',
    role: 'סטודנטית להנדסה',
    content: 'הייתי מחליפה כבל כל חודשיים בגלל שהוא היה נקרע בחיבור. ChargerSafe אצלי כבר חצי שנה ונראה כמו חדש. חובה לסטודנטים.',
    rating: 5
  },
  {
    id: '3',
    name: 'יוסי אבני',
    role: 'נהג משאית',
    content: 'בדרכים הטלפון תמיד היה נופל והטעינה הייתה מפסיקה. הנעילה המכנית פתרה לי את הבעיה לגמרי. מוצר חובה לרכב.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            אלפי לקוחות כבר <span className="text-cyan-400">התקדמו</span>
          </h2>
          <p className="text-slate-400 text-lg">הצטרפו לקהילה שכבר שכחה מה זה כבל קרוע</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all hover:-translate-y-1 relative group">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-slate-700 group-hover:text-cyan-500/20 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">"{t.content}"</p>
              
              <div className="flex items-center gap-4 border-t border-slate-800 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-sm text-cyan-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;