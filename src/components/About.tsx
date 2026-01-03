import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Radio, Zap, CircuitBoard, Target, Trophy } from 'lucide-react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Target, value: '6+', label: 'EVENTS', color: 'cyan' },
    { icon: Trophy, value: '50K+', label: 'PRIZES', color: 'yellow' },
    { icon: Zap, value: '500+', label: 'PARTICIPANTS', color: 'pink' },
    { icon: CircuitBoard, value: '1', label: 'EPIC DAY', color: 'green' },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-500/5 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="font-mono text-sm text-cyan-400">PLAYER SELECT</span>
            <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          <h2 className="font-pixel text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
            ABOUT THE TOURNAMENT
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative p-6 md:p-8 bg-gradient-to-br from-muted/80 to-muted/40 backdrop-blur-sm border border-primary/20">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-pink-400" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-pink-400" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

              <div className="space-y-4">
                <motion.p
                  className="font-mono text-sm md:text-base text-foreground/90 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-cyan-400 font-bold">{'>'}</span> The Department of ECE at 
                  <span className="text-yellow-400"> Sri Venkateswara College of Engineering </span> 
                  proudly presents its flagship <span className="text-pink-400">National Level Technical Symposium</span>.
                </motion.p>
                
                <motion.p
                  className="font-mono text-sm md:text-base text-foreground/90 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-cyan-400 font-bold">{'>'}</span> UPAGRAHA'26 is your arena to 
                  <span className="text-green-400"> battle</span>, <span className="text-yellow-400">innovate</span>, and 
                  <span className="text-pink-400"> conquer</span>. Exchange ideas, showcase talent, and compete 
                  against the best minds in electronics and communication.
                </motion.p>

                <motion.p
                  className="font-mono text-sm md:text-base text-foreground/90 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-cyan-400 font-bold">{'>'}</span> Are you ready to 
                  <span className="text-red-400 font-bold"> FIGHT</span>?
                </motion.p>
              </div>

              {/* Blinking cursor */}
              <motion.span
                className="inline-block w-3 h-5 bg-cyan-400 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-6 bg-muted/50 border border-primary/20 text-center group cursor-pointer overflow-hidden"
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: stat.color === 'cyan' ? 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)'
                      : stat.color === 'yellow' ? 'radial-gradient(circle, rgba(234,179,8,0.2) 0%, transparent 70%)'
                      : stat.color === 'pink' ? 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)'
                  }}
                />

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mb-3"
                >
                  <stat.icon className={`w-8 h-8 mx-auto ${
                    stat.color === 'cyan' ? 'text-cyan-400' 
                    : stat.color === 'yellow' ? 'text-yellow-400'
                    : stat.color === 'pink' ? 'text-pink-400'
                    : 'text-green-400'
                  }`} />
                </motion.div>
                
                <motion.p
                  className={`font-orbitron text-2xl md:text-3xl font-bold ${
                    stat.color === 'cyan' ? 'text-cyan-400' 
                    : stat.color === 'yellow' ? 'text-yellow-400'
                    : stat.color === 'pink' ? 'text-pink-400'
                    : 'text-green-400'
                  }`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.p>
                <p className="font-pixel text-[8px] text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Power Bar Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-4">
            <span className="font-pixel text-[10px] text-cyan-400">POWER</span>
            <div className="flex-1 h-4 bg-muted/50 border border-primary/30 p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-yellow-500 to-red-500"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 2, delay: 1, ease: "easeOut" }}
              />
            </div>
            <span className="font-pixel text-[10px] text-red-400">MAX</span>
          </div>
          <p className="font-mono text-xs text-center text-muted-foreground mt-4">
            {'>>> SPECIAL MOVE UNLOCKED: REGISTER NOW <<<'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
