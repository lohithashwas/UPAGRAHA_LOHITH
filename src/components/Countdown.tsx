import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HRS', value: timeLeft.hours },
    { label: 'MIN', value: timeLeft.minutes },
    { label: 'SEC', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Timer Label */}
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className="w-3 h-3 rounded-full bg-red-500"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className="font-pixel text-[10px] md:text-xs text-red-400">
          BATTLE BEGINS IN
        </span>
        <motion.div
          className="w-3 h-3 rounded-full bg-red-500"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>

      {/* Timer Display */}
      <div className="flex gap-2 md:gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Main Display */}
            <div className="relative">
              {/* Background */}
              <div className="w-16 md:w-24 h-20 md:h-28 bg-gradient-to-b from-gray-800 via-gray-900 to-black border-2 border-gray-700 rounded-sm overflow-hidden">
                {/* Scanlines */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />

                {/* Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    key={unit.value}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="font-orbitron text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-500"
                    style={{
                      textShadow: '0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(6,182,212,0.3)',
                    }}
                  >
                    {String(unit.value).padStart(2, '0')}
                  </motion.span>
                </div>

                {/* Top reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent" />

                {/* Center line */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-black/50" />
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-cyan-500/20 blur-md -z-10 rounded-sm" />
            </div>

            {/* Label */}
            <div className="mt-2 text-center">
              <span className="font-pixel text-[8px] md:text-[10px] text-gray-400">
                {unit.label}
              </span>
            </div>

            {/* Separator */}
            {index < timeUnits.length - 1 && (
              <div className="absolute top-8 md:top-12 -right-1 md:-right-2 flex flex-col gap-2">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-yellow-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-yellow-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Date Display */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 px-6 py-2 border border-yellow-400/50 bg-yellow-400/10"
      >
        <span className="font-orbitron text-sm md:text-base text-yellow-400">
          19.02.2026
        </span>
      </motion.div>
    </div>
  );
};
