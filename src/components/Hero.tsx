import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Countdown } from './Countdown';
import arcadeBg from '@/assets/arcade-bg.jpg';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${arcadeBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--neon-cyan) / 0.3) 1px, transparent 1px),
              linear-gradient(hsl(var(--neon-cyan) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Energy Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Energy Particles - Removed */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* VS Style Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block"
        >
          {/* Health Bar Style Header */}
          <div className="flex justify-between items-center mb-6 max-w-2xl mx-auto">
            <div className="flex-1">
              <div className="h-3 md:h-4 bg-gradient-to-r from-green-500 via-green-400 to-yellow-500 rounded-l relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <p className="font-pixel text-[8px] text-cyan-400 text-left mt-1">SVCE ECE</p>
            </div>
            <div className="px-4">
              <motion.span
                className="font-pixel text-lg md:text-2xl text-yellow-400"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                VS
              </motion.span>
            </div>
            <div className="flex-1">
              <div className="h-3 md:h-4 bg-gradient-to-l from-red-500 via-red-400 to-orange-500 rounded-r relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <p className="font-pixel text-[8px] text-pink-400 text-right mt-1">CHALLENGERS</p>
            </div>
          </div>

          {/* Title with Fighting Game Style */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="relative"
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 blur-3xl opacity-50"
              style={{
                background: 'linear-gradient(90deg, hsl(var(--neon-cyan)), hsl(var(--neon-magenta)), hsl(var(--neon-yellow)))',
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <h1 className="relative font-pixel text-4xl md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 drop-shadow-[0_0_30px_rgba(255,0,255,0.5)] tracking-wider">
              UPAGRAHA'26
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6"
          >
            <div className="inline-block border-2 border-yellow-400 px-4 py-2 bg-background/50 backdrop-blur-sm">
              <p className="font-pixel text-[10px] md:text-sm text-yellow-400 tracking-widest">
                NATIONAL LEVEL TECHNICAL SYMPOSIUM
              </p>
            </div>
          </motion.div>

          {/* College Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-4 space-y-1"
          >
            <p className="font-mono text-sm md:text-base text-cyan-300">
              Sri Venkateswara College of Engineering
            </p>
            <p className="font-mono text-xs md:text-sm text-pink-400">
              Department of Electronics & Communication Engineering
            </p>
          </motion.div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12"
        >
          <Countdown targetDate="2026-02-19T10:00:00" />
        </motion.div>

        {/* CTA Buttons - Arcade Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <motion.a
            href="https://forms.gle/zhyrtF73EjPUQSip7"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 font-pixel text-xs md:text-sm text-background overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <span className="relative flex items-center justify-center gap-2">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              1P START
            </span>
            {/* Pixel corners */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-300" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-300" />
          </motion.a>

          <motion.a
            href="#events"
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 font-pixel text-xs md:text-sm text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <span className="relative flex items-center justify-center gap-2">
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
              2P START
            </span>
            <div className="absolute top-0 right-0 w-2 h-2 bg-pink-300" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-pink-300" />
          </motion.a>
        </motion.div>

        {/* Insert Coin Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
          className="mt-8"
        >
          <p className="font-pixel text-xs text-yellow-400">
            {'>>> PRESS START <<<'}
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-cyan-400/60" />
      </motion.div>

      {/* Corner HUD Elements */}
      <div className="absolute top-20 left-4 md:left-8 text-left">
        <p className="font-pixel text-[8px] md:text-[10px] text-cyan-400">ROUND</p>
        <p className="font-pixel text-lg md:text-2xl text-yellow-400">01</p>
      </div>
      <div className="absolute top-20 right-4 md:right-8 text-right">
        <p className="font-pixel text-[8px] md:text-[10px] text-pink-400">TIME</p>
        <p className="font-pixel text-lg md:text-2xl text-yellow-400">99</p>
      </div>

      {/* Bottom Corner Decorations */}
      <div className="absolute bottom-4 left-4 w-20 h-20 border-l-2 border-b-2 border-cyan-500/30" />
      <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-pink-500/30" />
    </section>
  );
};
