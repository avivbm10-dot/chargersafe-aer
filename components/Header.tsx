import React, { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 space-x-reverse cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg shadow-lg shadow-cyan-500/20">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tight text-white">
            Charger<span className="text-cyan-400">Safe</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 space-x-reverse items-center">
          <button onClick={() => scrollToSection('features')} className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm tracking-wide">יתרונות</button>
          <button onClick={() => scrollToSection('product-details')} className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm tracking-wide">איך זה עובד</button>
          <button onClick={() => scrollToSection('personal-match')} className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm tracking-wide">התאמה אישית</button>
          <button 
            onClick={() => scrollToSection('cta')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-cyan-500/20 transition-all transform hover:scale-105"
          >
            הזמן עכשיו
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 absolute w-full left-0 h-screen">
          <nav className="flex flex-col space-y-6 p-8 text-center text-lg">
            <button onClick={() => scrollToSection('features')} className="text-slate-300 hover:text-cyan-400">יתרונות</button>
            <button onClick={() => scrollToSection('product-details')} className="text-slate-300 hover:text-cyan-400">איך זה עובד</button>
            <button onClick={() => scrollToSection('personal-match')} className="text-slate-300 hover:text-cyan-400">התאמה אישית</button>
            <button onClick={() => scrollToSection('cta')} className="bg-cyan-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-cyan-500/20">
              הזמן עכשיו
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;