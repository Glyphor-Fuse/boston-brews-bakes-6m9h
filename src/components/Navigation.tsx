import { motion } from 'framer-motion';
import { Menu, ShoppingBag } from 'lucide-react';

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-[#F9F8F6]"
    >
      <div className="flex items-center gap-4">
        <button className="hover:opacity-70 transition-opacity">
          <Menu className="w-6 h-6" />
        </button>
        <span className="hidden md:block text-sm tracking-widest uppercase font-medium">Menu</span>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <a href="/" className="text-2xl md:text-3xl font-serif tracking-tight font-bold">
          L'ATELIER
        </a>
      </div>

      <div className="flex items-center gap-6">
        <span className="hidden md:block text-sm tracking-widest uppercase font-medium">Reserve</span>
        <button className="hover:opacity-70 transition-opacity">
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>
    </motion.nav>
  );
}