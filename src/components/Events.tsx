import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Gamepad2, FileText, Megaphone, Eye, Search, Infinity as InfinityIcon, Zap } from 'lucide-react';

interface EventItem {
  id: number;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  venue: string;
  time: string;
  description: string;
  color: string;
  bgGradient: string;
}

const events: EventItem[] = [
  {
    id: 1,
    name: 'PEEK A PROJECT',
    icon: Gamepad2,
    venue: 'EMBEDDED LAB',
    time: '10:00AM - 2:30PM',
    description: 'Showcase your innovative hardware projects and compete for glory!',
    color: 'cyan',
    bgGradient: 'from-cyan-600 to-cyan-800',
  },
  {
    id: 2,
    name: 'TECH THESIS',
    icon: FileText,
    venue: 'SEMINAR HALL',
    time: '10:00AM - 2:30PM',
    description: 'Present your research papers to industry experts and academicians.',
    color: 'pink',
    bgGradient: 'from-pink-600 to-pink-800',
  },
  {
    id: 3,
    name: 'PICK IT SELL IT',
    icon: Megaphone,
    venue: 'V BLOCK GROUND FLOOR',
    time: '12:45PM - 2:30PM',
    description: 'Pitch your revolutionary product ideas to a panel of judges.',
    color: 'yellow',
    bgGradient: 'from-yellow-600 to-yellow-800',
  },
  {
    id: 4,
    name: 'BLIND CHASE',
    icon: Eye,
    venue: 'V BLOCK THIRD FLOOR',
    time: '10:45AM - 12:00PM',
    description: 'Navigate complex challenges blindfolded with your teammate.',
    color: 'green',
    bgGradient: 'from-green-600 to-green-800',
  },
  {
    id: 5,
    name: 'WATT A HUNT',
    icon: Search,
    venue: 'V BLOCK',
    time: '12:45PM - 2:30PM',
    description: 'Technical treasure hunt across the campus. Find clues, win prizes!',
    color: 'orange',
    bgGradient: 'from-orange-600 to-orange-800',
  },
  {
    id: 6,
    name: 'SIMUL-INFINITY',
    icon: InfinityIcon,
    venue: 'DSP LAB',
    time: '10:00AM - 12:00PM',
    description: 'Master circuit simulation and prove your analytical prowess.',
    color: 'purple',
    bgGradient: 'from-purple-600 to-purple-800',
  },
];

export const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <section id="events" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--neon-cyan) / 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, hsl(var(--neon-magenta) / 0.1) 0%, transparent 50%)`,
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header - Fighting Game Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block relative"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h2 className="font-pixel text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400">
              SELECT YOUR BATTLE
            </h2>
            <motion.div
              className="absolute -inset-4 border-2 border-yellow-400/50"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <p className="font-mono text-sm text-muted-foreground mt-6">
            Choose your event and prove your worth in the arena
          </p>
        </motion.div>

        {/* Character Select Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                className={`relative aspect-square cursor-pointer overflow-hidden bg-gradient-to-b ${event.bgGradient}`}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
                }}
              >
                {/* Scanlines */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] pointer-events-none" />
                
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={selectedEvent === event.id ? { scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 0.5, repeat: selectedEvent === event.id ? Infinity : 0 }}
                  >
                    <event.icon className="w-12 h-12 md:w-20 md:h-20 text-white/80" />
                  </motion.div>
                </div>

                {/* Event Number */}
                <div className="absolute top-2 left-2 font-pixel text-xs md:text-sm text-white/50">
                  0{event.id}
                </div>

                {/* Selection Indicator */}
                {selectedEvent === event.id && (
                  <motion.div
                    className="absolute inset-0 border-4 border-yellow-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
                    }}
                  />
                )}

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 bg-white/0 hover:bg-white/10 transition-colors"
                />

                {/* Event Name */}
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-pixel text-[8px] md:text-xs text-white text-center leading-tight">
                    {event.name}
                  </p>
                </div>

                {/* Corner Cut */}
                <div className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 bg-background" 
                  style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                />
              </motion.div>

              {/* Power Level Indicator */}
              <div className="mt-2 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`h-1 flex-1 ${i < 4 ? `bg-${event.color}-500` : 'bg-gray-600'}`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                    style={{ 
                      backgroundColor: i < 4 
                        ? event.color === 'cyan' ? '#06b6d4' 
                        : event.color === 'pink' ? '#ec4899'
                        : event.color === 'yellow' ? '#eab308'
                        : event.color === 'green' ? '#22c55e'
                        : event.color === 'orange' ? '#f97316'
                        : '#a855f7'
                        : '#4b5563'
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Event Details */}
        <motion.div
          initial={false}
          animate={{ 
            height: selectedEvent ? 'auto' : 0,
            opacity: selectedEvent ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {selectedEvent && (
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="mt-8 max-w-2xl mx-auto"
            >
              <div className="relative p-6 bg-gradient-to-r from-muted/50 via-muted to-muted/50 border border-primary/30">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pink-400" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pink-400" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                {(() => {
                  const event = events.find(e => e.id === selectedEvent);
                  if (!event) return null;
                  return (
                    <>
                      <div className="flex items-center gap-4 mb-4">
                        <Zap className="w-6 h-6 text-yellow-400" />
                        <h3 className="font-pixel text-sm md:text-base text-primary">
                          {event.name}
                        </h3>
                      </div>
                      <p className="font-mono text-sm text-muted-foreground mb-4">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs font-mono">
                        <span className="text-cyan-400">📍 {event.venue}</span>
                        <span className="text-yellow-400">⏰ {event.time}</span>
                      </div>
                    </>
                  );
                })()}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://forms.gle/zhyrtF73EjPUQSip7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative px-12 py-4 bg-gradient-to-r from-green-500 to-green-600 font-pixel text-sm text-background overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <span className="relative">ENTER THE ARENA</span>
            <div className="absolute top-0 right-0 w-2 h-2 bg-green-300" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-green-300" />
          </motion.a>
          <p className="font-mono text-xs text-muted-foreground mt-4 animate-pulse">
            Click an event to see details • Register to participate
          </p>
        </motion.div>
      </div>
    </section>
  );
};
