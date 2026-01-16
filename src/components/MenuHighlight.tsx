import { motion } from 'framer-motion';

const items = [
  {
    title: "The Lavender Latte",
    desc: "House-made lavender syrup, double shot espresso, oat milk, dried petals.",
    price: "$6.50",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop"
  },
  {
    title: "Pain au Chocolat",
    desc: "Imported French butter, 70% dark valrhona chocolate, flaky layers.",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2626&auto=format&fit=crop"
  }
];

export default function MenuHighlight() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F9F8F6] text-[#1C1917]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-[#1C1917]/10 pb-8"
        >
          <h2 className="text-5xl md:text-7xl max-w-xl leading-none">
            Curated <br/> <span className="italic text-4xl md:text-6xl text-[#D4AF37]">Selections</span>
          </h2>
          <p className="mt-6 md:mt-0 max-w-sm text-sm md:text-base opacity-70 leading-relaxed">
            Every morning, our pastry chefs bake with precision and passion. 
            Experience the authentic taste of Paris in the heart of Boston.
          </p>
        </motion.div>

        <div className="space-y-32">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 aspect-[4/5] overflow-hidden bg-gray-200"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </motion.div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 1 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="flex items-baseline justify-between border-b border-[#1C1917] pb-4 mb-6">
                    <h3 className="text-3xl md:text-4xl font-serif">{item.title}</h3>
                    <span className="text-xl font-mono">{item.price}</span>
                  </div>
                  <p className="text-lg opacity-70 font-light leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                  <button className="mt-8 text-xs uppercase tracking-widest border border-[#1C1917] px-6 py-3 hover:bg-[#1C1917] hover:text-[#F9F8F6] transition-colors duration-300">
                    Order Now
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}