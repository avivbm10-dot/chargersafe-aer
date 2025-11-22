import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import PersonalPitch from './components/PersonalPitch';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import StripCTA from './components/StripCTA';
import { Truck, AlertTriangle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        
        {/* Urgency Strip */}
        <StripCTA 
          variant="primary" 
          text="מלאי מוגבל: נותרו פחות מ-50 יחידות במחיר השקה" 
          subText="אל תפספסו את ההזדמנות"
          icon={<AlertTriangle className="w-5 h-5" />}
        />

        <Features />
        
        {/* Value Strip */}
        <StripCTA 
          variant="secondary" 
          text="משלוח מהיר חינם בהזמנת 2 כבלים ומעלה" 
          subText="מגיע ארוז בקופסת מתנה"
          icon={<Truck className="w-5 h-5" />}
        />

        <ProductShowcase />
        <Testimonials />
        
        {/* Gemini Integration for personalized UX */}
        <PersonalPitch />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;