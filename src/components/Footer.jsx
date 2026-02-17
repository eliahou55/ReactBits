import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 glass mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Cree avec <Heart size={16} className="text-red-500 animate-pulse" /> par{' '}
            <span className="text-gradient font-semibold">Eliahou Benamou</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Â© {new Date().getFullYear()} Tous droits reserves
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
