import React from 'react';
import { ArrowLeft, Clock, Truck } from 'lucide-react';

interface StripCTAProps {
  variant: 'primary' | 'secondary';
  text: string;
  subText?: string;
  icon?: React.ReactNode;
}

const StripCTA: React.FC<StripCTAProps> = ({ variant, text, subText, icon }) => {
  const scrollToCTA = () => {
    const element = document.getElementById('cta');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const bgClass = variant === 'primary' 
    ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500' 
    : 'bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400';

  return (
    <div 
      onClick={scrollToCTA}
      className={`${bgClass} py-3 relative overflow-hidden cursor-pointer group shadow-lg z-20`}
    >
      <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
      
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-white font-bold tracking-wide uppercase text-sm sm:text-base">
        <div className="flex items-center gap-2 animate-pulse">
          {icon || <Clock className="w-5 h-5" />}
          <span>{text}</span>
        </div>
        {subText && <span className="hidden sm:inline text-white/90">| {subText}</span>}
        <div className="flex items-center gap-1 group-hover:translate-x-[-4px] transition-transform bg-black/20 px-3 py-1 rounded-full text-xs">
          הזמן עכשיו <ArrowLeft className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

export default StripCTA;