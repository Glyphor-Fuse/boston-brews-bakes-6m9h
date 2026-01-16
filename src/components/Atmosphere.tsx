import { motion } from 'framer-motion';

export default function Atmosphere() {
  return (
    <section className="relative py-32 bg-[#1C1917] text-[#F9F8F6] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        {/* Grain overlay or texture could go here */}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="space-y-8"
             >
               <span className="text-[#D4AF37] uppercase tracking-widest text-xs">The Atmosphere</span>
               <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                 A Sanctuary <br /> in the City
               </h2>
               <p className="text-white/60 leading-relaxed font-light text-lg">
                 Located on the historic streets of Beacon Hill, L'Atelier offers a respite from the bustle. 
                 Designed with minimalist warmth, our space encourages conversation, creativity, and pause.
               </p>
               <ul className="space-y-4 pt-4 border-t border-white/10">
                 {['Free Wi-Fi', 'Outdoor Seating', 'Pet Friendly'].map((feature) => (
                   <li key={feature} className="flex items-center gap-4 text-sm uppercase tracking-wider opacity-80">
                     <span className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                     {feature}
                   </li>
                 ))}
               </ul>
             </motion.div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2 grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ y: 0 }}
              whileInView={{ y: -40 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="mt-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop" 
                alt="Interior detail" 
                className="w-full aspect-[3/4] object-cover rounded-sm opacity-90"
              />
            </motion.div>
            <motion.div 
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop" 
                alt="Barista at work" 
                className="w-full aspect-[3/4] object-cover rounded-sm opacity-90"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}