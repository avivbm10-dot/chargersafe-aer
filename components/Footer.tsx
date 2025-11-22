import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020617] text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
              Charger<span className="text-cyan-500">Safe</span>
            </h3>
            <p className="mb-8 max-w-sm text-slate-400 leading-relaxed">
              הכבל האחרון שתצטרכו לקנות. פיתחנו את טכנולוגיית ה-Click-Lock כדי לספק לכם שקט נפשי וטעינה רציפה, בכל זמן ובכל מקום.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="bg-slate-900 p-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="bg-slate-900 p-3 rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-300"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="bg-slate-900 p-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">ניווט מהיר</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span>דף הבית</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span>יתרונות</a></li>
              <li><a href="#product-details" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span>מפרט טכני</a></li>
              <li><a href="#cta" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span>הזמנה</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">צור קשר</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-500" />
                <span className="hover:text-white transition-colors cursor-pointer">hello@chargersafe.co.il</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-500" />
                <span>050-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-500" />
                <span>רחוב הטכנולוגיה 5, תל אביב</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>&copy; 2024 ChargerSafe. כל הזכויות שמורות.</p>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0 justify-center md:justify-end opacity-30 hover:opacity-100 transition-opacity">
            <span>כבל טעינה</span> |
            <span>מטען לטלפון</span> |
            <span>טעינה מהירה</span> |
            <span>USB-C</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;