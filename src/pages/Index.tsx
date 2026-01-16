import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import MenuHighlight from '../components/MenuHighlight';
import Atmosphere from '../components/Atmosphere';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#F9F8F6] selection:bg-[#1C1917] selection:text-[#F9F8F6]"
    >
      <Navigation />
      <main>
        <Hero />
        <MenuHighlight />
        <Atmosphere />
      </main>
      <Footer />
    </motion.div>
  );
}