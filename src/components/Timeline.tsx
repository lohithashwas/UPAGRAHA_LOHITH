import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Rocket, Users, Trophy, Flag, Zap } from 'lucide-react';

const timelineEvents = [
  {
    date: 'FEB 6',
    title: 'DATE REVEAL',
    description: 'Official announcement',
    icon: Flag,
    status: 'completed',
    color: 'cyan',
  },
  {
    date: 'FEB 8',
    title: 'REGISTRATION OPENS',
    description: 'Start registering',
    icon: Rocket,
    status: 'completed',
    color: 'green',
  },
  {
    date: 'FEB 17',
    title: 'REGISTRATION CLOSES',
    description: 'Last date to register',
    icon: Users,
    status: 'upcoming',
    color: 'yellow',
  },
  {
    date: 'FEB 19',
    title: 'BATTLE DAY',
    description: 'The tournament begins!',
    icon: Trophy,
    status: 'upcoming',
    color: 'red',
  },
];

export const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="font-mono text-sm text-yellow-400">MISSION BRIEFING</span>
            <Zap className="w-5 h-5 text-yellow-400" />
          </div>
          <h2 className="font-pixel text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
            TIMELINE
          </h2>
        </motion.div>

        {/* Timeline - Horizontal on desktop, vertical on mobile */}
        <div className="max-w-4xl mx-auto">
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-4"
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 ${event.status === 'completed'
                    ? 'border-green-400 bg-green-400/20'
                    : 'border-gray-600 bg-muted/50'
                  }`}>
                  <event.icon className={`w-5 h-5 ${event.status === 'completed' ? 'text-green-400' : 'text-gray-400'
                    }`} />
                </div>

                {/* Content */}
                <div className="flex-1 pb-6 border-l-2 border-dashed border-gray-700 pl-4 -ml-2">
                  <span className={`font-orbitron text-sm font-bold ${event.color === 'cyan' ? 'text-cyan-400'
                      : event.color === 'green' ? 'text-green-400'
                        : event.color === 'yellow' ? 'text-yellow-400'
                          : 'text-red-400'
                    }`}>
                    {event.date}
                  </span>
                  <h3 className="font-pixel text-xs text-foreground mt-1">{event.title}</h3>
                  <p className="font-mono text-xs text-muted-foreground mt-1">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Progress Bar */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800 -translate-y-1/2">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-green-500 to-yellow-500"
                initial={{ width: 0 }}
                animate={isInView ? { width: '50%' } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>

            {/* Events */}
            <div className="relative flex justify-between">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className={`relative flex flex-col items-center ${index % 2 === 0 ? 'mt-0' : 'mt-32'
                    }`}
                  style={{ width: '22%' }}
                >
                  {/* Connector Line */}
                  <div className={`absolute ${index % 2 === 0 ? 'bottom-0 h-8' : 'top-0 h-8'
                    } w-px bg-gray-600`} />

                  {/* Node */}
                  <motion.div
                    className={`relative z-10 w-14 h-14 flex items-center justify-center border-2 ${event.status === 'completed'
                        ? 'border-green-400 bg-green-400/20'
                        : 'border-gray-600 bg-muted/80'
                      }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <event.icon className={`w-6 h-6 ${event.status === 'completed' ? 'text-green-400' : 'text-gray-400'
                      }`} />

                    {/* Pulse effect for completed */}
                    {event.status === 'completed' && (
                      <motion.div
                        className="absolute inset-0 border-2 border-green-400"
                        animate={{ opacity: [0.5, 0, 0.5], scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  {/* Content */}
                  <div className={`text-center ${index % 2 === 0 ? 'order-first mb-4' : 'mt-4'}`}>
                    <span className={`font-orbitron text-lg font-bold ${event.color === 'cyan' ? 'text-cyan-400'
                        : event.color === 'green' ? 'text-green-400'
                          : event.color === 'yellow' ? 'text-yellow-400'
                            : 'text-red-400'
                      }`}>
                      {event.date}
                    </span>
                    <h3 className="font-pixel text-[10px] text-foreground mt-2">{event.title}</h3>
                    <p className="font-mono text-xs text-muted-foreground mt-1">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-md mx-auto mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 border border-green-400/50 bg-green-400/10">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="font-pixel text-xs text-green-400">50% MISSION COMPLETE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
