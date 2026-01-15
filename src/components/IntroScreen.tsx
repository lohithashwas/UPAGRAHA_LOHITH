import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [showSkip, setShowSkip] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Show skip button after a short delay
    const timer = setTimeout(() => setShowSkip(true), 1000);

    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
        // If autoplay is blocked, we might want to show a visible "Play" button or just let them skip
        setShowSkip(true);
      });
    }

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    onComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover"
        src="/intro-video.mp4"
      />

      {/* Overlay Pattern (Scanlines) for retro feel - Optional, keeps it tied to the theme */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]" />

      {/* Skip Button */}
      <AnimatePresence>
        {showSkip && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onClick={onComplete}
            className="absolute bottom-8 right-8 z-20 font-pixel text-xs md:text-sm text-yellow-400 border-2 border-yellow-400 bg-black/50 px-6 py-3 hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>SKIP INTRO</span>
            <Play className="w-3 h-3 fill-current group-hover:fill-black" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
