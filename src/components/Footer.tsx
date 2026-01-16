import { Instagram, Facebook, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#F9F8F6] pt-24 pb-12 px-6 md:px-12 border-t border-[#1C1917]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        
        <div className="md:w-1/3">
          <h2 className="text-4xl font-serif mb-8">L'ATELIER</h2>
          <p className="text-sm uppercase tracking-widest opacity-50 mb-8">Boston, MA</p>
          <div className="flex gap-4">
            <a href="#" className="p-3 border border-[#1C1917]/20 rounded-full hover:bg-[#1C1917] hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 border border-[#1C1917]/20 rounded-full hover:bg-[#1C1917] hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="md:w-1/3 space-y-8">
          <div className="flex gap-4 items-start">
            <MapPin className="w-6 h-6 mt-1 opacity-50" />
            <div>
              <h4 className="font-serif text-lg mb-2">Visit Us</h4>
              <p className="opacity-70 leading-relaxed">
                123 Newbury Street<br />
                Boston, MA 02116
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <Clock className="w-6 h-6 mt-1 opacity-50" />
            <div>
              <h4 className="font-serif text-lg mb-2">Hours</h4>
              <p className="opacity-70 leading-relaxed">
                Mon - Fri: 7am - 7pm<br />
                Sat - Sun: 8am - 6pm
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 flex flex-col justify-end items-start md:items-end">
          <a href="mailto:hello@latelier-boston.com" className="text-xl md:text-2xl hover:italic transition-all">
            hello@latelier-boston.com
          </a>
          <p className="mt-8 text-xs opacity-40">
            © 2024 L'Atelier Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}