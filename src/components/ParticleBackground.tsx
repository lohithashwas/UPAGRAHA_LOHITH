import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Particles */}
      {/* Floating Particles - Removed */}

      {/* Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M 0 50 L 30 50 L 40 40 L 60 40 L 70 50 L 100 50"
              stroke="hsl(var(--neon-cyan))"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M 50 0 L 50 30 L 40 40 L 40 60 L 50 70 L 50 100"
              stroke="hsl(var(--neon-magenta))"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="40" cy="40" r="3" fill="hsl(var(--neon-cyan))" />
            <circle cx="60" cy="40" r="2" fill="hsl(var(--neon-yellow))" />
            <circle cx="50" cy="70" r="2" fill="hsl(var(--neon-magenta))" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Moving Grid Lines */}
      <motion.div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--neon-cyan) / 0.1) 1px, transparent 1px),
            linear-gradient(hsl(var(--neon-cyan) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};
