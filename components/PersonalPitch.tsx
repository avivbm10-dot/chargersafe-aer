import React, { useState } from 'react';
import { generatePersonalizedPitch } from '../services/geminiService';
import { Sparkles, Send, Bot, User } from 'lucide-react';

const PersonalPitch: React.FC = () => {
  const [input, setInput] = useState('');
  const [pitch, setPitch] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setPitch(null);
    const result = await generatePersonalizedPitch(input);
    setPitch(result);
    setLoading(false);
  };

  return (
    <section id="personal-match" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-purple-600/20 rounded-2xl mb-6 border border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.2)]">
              <Bot className="w-8 h-8 text-purple-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ה-AI שלנו יסביר לך למה זה מתאים
            </h2>
            <p className="text-slate-400 text-lg">
              ספר לנו מי אתה (למשל: "גיימר שמשחק במיטה", "נהג מונית", "חייל קרבי"), 
              והבינה המלאכותית תנתח את ההתאמה עבורך.
            </p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-2 md:p-4 shadow-2xl">
            {/* Chat Interface */}
            <div className="space-y-4 mb-4 max-h-[400px] overflow-y-auto px-2">
              {/* AI Greeting */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 border border-slate-700">
                  <p className="text-slate-200">שלום! אני הבוט של ChargerSafe. ספר לי מה אתה עושה, ואגיד לך איך הכבל שלנו ישדרג לך את החיים.</p>
                </div>
              </div>

              {/* User Input Display if exists */}
              {pitch && (
                <div className="flex gap-4 flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="bg-cyan-900/30 rounded-2xl rounded-tr-none p-4 border border-cyan-500/30">
                    <p className="text-white">{input}</p>
                  </div>
                </div>
              )}

              {/* AI Response */}
              {loading && (
                 <div className="flex gap-4 animate-pulse">
                   <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                     <Bot className="w-6 h-6 text-white" />
                   </div>
                   <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 border border-slate-700 w-48 h-16"></div>
                 </div>
              )}

              {pitch && !loading && (
                <div className="flex gap-4 animate-fade-in-up">
                   <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                     <Sparkles className="w-5 h-5 text-white" />
                   </div>
                   <div className="bg-gradient-to-br from-purple-900/40 to-slate-800 rounded-2xl rounded-tl-none p-5 border border-purple-500/40 shadow-lg">
                     <p className="text-white text-lg leading-relaxed font-medium">
                       {pitch}
                     </p>
                   </div>
                 </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="relative mt-4">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="לדוגמה: אני סטודנטית שלומדת שעות בספרייה..."
                  className="w-full bg-slate-950 border border-slate-700 text-white pr-6 pl-14 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all shadow-inner text-lg placeholder-slate-600"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="absolute left-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-slate-700 disabled:to-slate-800 disabled:text-slate-500 text-white p-3 rounded-lg transition-all shadow-lg"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalPitch;