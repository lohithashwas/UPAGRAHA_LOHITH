import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-cyan-500/20 bg-gradient-to-b from-background to-muted/20">
      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6,182,212,0.03) 2px, rgba(6,182,212,0.03) 4px)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <img src={logo} alt="UPAGRAHA'26 Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
            <div>
              {/* Text removed */}
              <p className="font-mono text-[10px] text-muted-foreground">
                Department of ECE, SVCE
              </p>
            </div>
          </motion.div>



          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center md:text-right"
          >
            <p className="font-mono text-[10px] text-muted-foreground">
              © 2026 UPAGRAHA. ALL RIGHTS RESERVED.
            </p>
          </motion.div>
        </div>

        {/* Game Over Message */}
        <motion.div
          className="flex justify-center mt-6 pt-4 border-t border-muted/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-0.5 bg-cyan-400" />
            <motion.span
              className="font-pixel text-[8px] text-yellow-400"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              GAME NEVER ENDS • CONTINUE? 9
            </motion.span>
            <span className="w-6 h-0.5 bg-pink-400" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
