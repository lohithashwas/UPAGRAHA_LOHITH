import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Tv, Disc3, Satellite, Cpu, Antenna, Waves } from 'lucide-react';

interface IntroScreenProps {
  onComplete: () => void;
}

// Retro ECE Device Component
const ECEDevice = ({
  icon: Icon,
  label,
  delay,
  color
}: {
  icon: React.ElementType;
  label: string;
  delay: number;
  color: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, rotate: -180 }}
    animate={{
      opacity: [0, 1, 1, 0],
      scale: [0, 1.2, 1, 0.8],
      rotate: [-180, 0, 0, 180],
      y: [50, 0, 0, -50]
    }}
    transition={{
      duration: 2,
      delay,
      times: [0, 0.3, 0.7, 1]
    }}
    className="flex flex-col items-center gap-2"
  >
    <motion.div
      className={`p-4 md:p-6 border-2 ${color} bg-black/50 relative overflow-hidden`}
      animate={{
        boxShadow: [
          `0 0 10px currentColor`,
          `0 0 30px currentColor`,
          `0 0 10px currentColor`
        ]
      }}
      transition={{ duration: 0.5, repeat: Infinity }}
    >
      {/* Scanlines on device */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none" />
      <Icon className={`w-8 h-8 md:w-12 md:h-12 ${color.replace('border-', 'text-')}`} />
    </motion.div>
    <motion.p
      className={`font-pixel text-[8px] md:text-[10px] ${color.replace('border-', 'text-')}`}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 0.3, repeat: Infinity }}
    >
      {label}
    </motion.p>
  </motion.div>
);

// Floating Background Particles
const FloatingParticle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
    initial={{
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 20,
      opacity: 0
    }}
    animate={{
      y: -20,
      opacity: [0, 1, 1, 0]
    }}
    transition={{
      duration: 4 + Math.random() * 2,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

export const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [phase, setPhase] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  const handleSkip = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const skipTimer = setTimeout(() => setShowSkip(true), 500);

    const phases = [
      setTimeout(() => setPhase(1), 1000),      // ECE Devices appear
      setTimeout(() => setPhase(2), 4000),      // Satellite transmission
      setTimeout(() => setPhase(3), 6500),      // UPAGRAHA title
      setTimeout(() => { setPhase(4); setIsInteractive(true); }, 8000),  // Interactive coin insert
      setTimeout(() => onComplete(), 12000),    // Auto-complete after 12s
    ];

    return () => {
      clearTimeout(skipTimer);
      phases.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background Grid */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px']
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.3} />
      ))}

      {/* CRT Screen Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.2)_2px,rgba(0,0,0,0.2)_4px)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-5xl aspect-video mx-4">
        {/* Outer CRT Frame */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-xl p-2 md:p-4 shadow-2xl border-4 border-gray-600">
          {/* Screen Bezel */}
          <div className="absolute inset-2 md:inset-4 bg-gradient-to-b from-gray-900 via-black to-gray-950 rounded-lg p-2 md:p-4">
            {/* CRT Screen */}
            <div className="relative w-full h-full bg-gradient-to-b from-[#0a1628] via-[#0d1a30] to-[#050a14] rounded overflow-hidden border-2 border-cyan-900/50">
              {/* Scanlines */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.02)_2px,rgba(0,255,255,0.02)_4px)] pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
                <AnimatePresence mode="wait">

                  {/* Phase 0: Boot Sequence with ECE theme */}
                  {phase === 0 && (
                    <motion.div
                      key="boot"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center"
                    >
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        <Cpu className="w-12 h-12 md:w-16 md:h-16 mx-auto text-cyan-400 mb-4" />
                      </motion.div>
                      <p className="font-pixel text-[10px] md:text-sm text-cyan-400">
                        ECE SYSTEMS INITIALIZING...
                      </p>
                      <div className="flex gap-1 mt-4 justify-center">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-4 md:w-3 md:h-6 bg-cyan-500"
                            initial={{ scaleY: 0.3 }}
                            animate={{ scaleY: [0.3, 1, 0.3] }}
                            transition={{ duration: 0.3, delay: i * 0.08, repeat: Infinity }}
                          />
                        ))}
                      </div>
                      <p className="font-mono text-[8px] text-green-400 mt-4">
                        LOADING PERIPHERALS...
                      </p>
                    </motion.div>
                  )}

                  {/* Phase 1: ECE Devices Showcase */}
                  {phase === 1 && (
                    <motion.div
                      key="devices"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -50 }}
                      className="text-center w-full"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-pixel text-xs md:text-sm text-yellow-400 mb-8"
                      >
                        RETRO TECH MUSEUM
                      </motion.p>

                      <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
                        <ECEDevice icon={Tv} label="CRT TV" delay={0} color="border-cyan-400" />
                        <ECEDevice icon={Radio} label="RADIO" delay={0.3} color="border-pink-400" />
                        <ECEDevice icon={Disc3} label="DVD" delay={0.6} color="border-yellow-400" />
                        <ECEDevice icon={Satellite} label="SATELLITE" delay={0.9} color="border-green-400" />
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-8"
                      >
                        <p className="font-mono text-[10px] md:text-xs text-gray-400">
                          {'>'} Connecting to broadcast signal...
                        </p>
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Phase 2: Satellite Transmission */}
                  {phase === 2 && (
                    <motion.div
                      key="transmission"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center w-full"
                    >
                      <motion.div
                        className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-8"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        {/* Satellite */}
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <Satellite className="w-16 h-16 md:w-24 md:h-24 text-cyan-400" />
                        </motion.div>

                        {/* Orbit rings */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                            style={{
                              transform: `scale(${1 + i * 0.3})`,
                            }}
                            animate={{
                              opacity: [0.3, 0.8, 0.3],
                              borderColor: ['rgba(0,255,255,0.2)', 'rgba(0,255,255,0.6)', 'rgba(0,255,255,0.2)']
                            }}
                            transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                          />
                        ))}
                      </motion.div>

                      {/* Transmission waves */}
                      <motion.div className="flex justify-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              scaleY: [0.5, 1.5, 0.5],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ duration: 0.4, delay: i * 0.1, repeat: Infinity }}
                          >
                            <Waves className="w-4 h-4 md:w-6 md:h-6 text-green-400" />
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.p
                        className="font-pixel text-sm md:text-xl text-green-400"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        SIGNAL ACQUIRED
                      </motion.p>
                      <p className="font-mono text-[10px] text-cyan-300 mt-2">
                        Frequency: 1420.405 MHz | ECE Band
                      </p>
                    </motion.div>
                  )}

                  {/* Phase 3: UPAGRAHA Title Reveal */}
                  {phase === 3 && (
                    <motion.div
                      key="title"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", damping: 10, duration: 0.8 }}
                      >
                        <h1 className="font-pixel text-3xl md:text-6xl bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                          UPAGRAHA'26
                        </h1>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-4"
                      >
                        <p className="font-mono text-[10px] md:text-sm text-cyan-300">
                          DEPARTMENT OF ELECTRONICS & COMMUNICATION
                        </p>
                        <p className="font-pixel text-[8px] md:text-xs text-yellow-400 mt-2">
                          SRI VENKATESWARA COLLEGE OF ENGINEERING
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-64 mx-auto mt-6"
                      />
                    </motion.div>
                  )}

                  {/* Phase 4: Interactive Coin Insert */}
                  {phase === 4 && (
                    <motion.div
                      key="interactive"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center"
                    >
                      <motion.p
                        className="font-pixel text-xl md:text-4xl text-yellow-400"
                        animate={{
                          textShadow: ['0 0 10px rgba(255,255,0,0.5)', '0 0 30px rgba(255,255,0,0.8)', '0 0 10px rgba(255,255,0,0.5)']
                        }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        INSERT COIN
                      </motion.p>

                      <motion.button
                        onClick={handleSkip}
                        className="mt-8 relative cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9, y: 10 }}
                      >
                        <motion.div
                          className="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 border-4 border-yellow-600 flex items-center justify-center shadow-2xl"
                          animate={{
                            y: [0, -15, 0],
                            rotateY: [0, 180, 360]
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <span className="font-pixel text-yellow-900 text-2xl md:text-4xl">$</span>
                        </motion.div>
                        <motion.p
                          className="font-pixel text-[10px] md:text-xs text-cyan-400 mt-4"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        >
                          CLICK TO START
                        </motion.p>
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Screen Glare */}
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white/3 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-6 items-center">
          {/* Antenna */}
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Antenna className="w-6 h-6 md:w-8 md:h-8 text-gray-500" />
          </motion.div>

          {/* Arcade Buttons */}
          <motion.button
            className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-b from-red-400 to-red-600 border-4 border-red-300 shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(239,68,68,0.5)' }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSkip}
          />
          <motion.button
            className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-b from-green-400 to-green-600 border-4 border-green-300 shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(34,197,94,0.5)' }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSkip}
          />

          {/* Speaker grille */}
          <div className="w-12 h-8 md:w-16 md:h-10 bg-gray-800 rounded grid grid-cols-6 gap-0.5 p-1">
            {[...Array(18)].map((_, i) => (
              <div key={i} className="bg-gray-700 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Skip Button - Always visible */}
      <AnimatePresence>
        {showSkip && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onClick={handleSkip}
            className="absolute bottom-4 right-4 md:bottom-8 md:right-8 font-pixel text-[10px] md:text-xs text-yellow-400 border-2 border-yellow-400/50 px-4 py-2 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 backdrop-blur-sm bg-black/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SKIP INTRO ▶
          </motion.button>
        )}
      </AnimatePresence>

      {/* Corner Info */}
      <div className="absolute top-4 left-4 text-cyan-400 font-pixel text-[8px] md:text-[10px]">
        <p>SVCE ECE</p>
        <p className="text-pink-400">UPAGRAHA'26</p>
      </div>
      <div className="absolute top-4 right-4 text-right font-mono text-[8px] md:text-[10px]">
        <p className="text-green-400">SIGNAL: STRONG</p>
        <motion.p
          className="text-yellow-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ● LIVE
        </motion.p>
      </div>
    </motion.div>
  );
};
