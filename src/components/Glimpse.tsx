import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Gamepad2 } from 'lucide-react';

const images = [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", // Gaming/Tech
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80", // VR/Gaming
    "https://images.unsplash.com/photo-1531297461136-82lw85d340ca?auto=format&fit=crop&w=800&q=80", // Tech/Chip
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", // Cyberpunk City
    "https://images.unsplash.com/photo-1511882150382-421056ac8ba3?auto=format&fit=crop&w=800&q=80", // Coding/Event
];

export const Glimpse = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="py-20 flex flex-col justify-center items-center overflow-hidden min-h-[800px] relative">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 relative z-20"
            >
                <div className="inline-flex items-center gap-3 mb-4">
                    <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-pink-400" />
                    <span className="font-mono text-sm text-pink-400 tracking-widest">G A L L E R Y</span>
                    <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-pink-400" />
                </div>
                <h2 className="font-pixel text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                    GLIMPSE
                </h2>
            </motion.div>
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Console Container - Floating Animation */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 scale-90 md:scale-100"
            >
                <div className="w-[360px] h-[600px] bg-[#fbbf24] border-8 border-[#f59e0b] rounded-[30px] p-6 relative shadow-[0_20px_50px_rgba(245,158,11,0.3)] flex flex-col">
                    {/* Bevel Highlight */}
                    <div className="absolute inset-0 rounded-[20px] border-4 border-white/20 pointer-events-none" />

                    {/* SCREEN AREA Container */}
                    <div className="bg-[#0f172a] rounded-t-[10px] rounded-b-[10px] p-4 pb-8 border-4 border-[#020617] mb-6 relative shadow-inner">
                        {/* Header Text */}
                        <div className="flex justify-between items-center mb-2 px-1">
                            <span className="font-pixel text-xs text-[#fbbf24] tracking-widest">UPAGRAHA 2026</span>
                            <div className="h-[1px] bg-[#fbbf24]/30 flex-1 ml-4" />
                        </div>

                        {/* The Actual Screen */}
                        <div className="aspect-[4/3] bg-black border-2 border-[#1e293b] relative overflow-hidden">
                            {/* Image Carousel */}
                            <AnimatePresence mode='wait'>
                                <motion.img
                                    key={currentIndex}
                                    src={images[currentIndex]}
                                    alt="Glimpse"
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </AnimatePresence>

                            {/* On-screen controls overlay */}
                            <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                                <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="p-1 bg-black/50 text-white rounded hover:bg-black/70"><ChevronLeft /></button>
                                <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="p-1 bg-black/50 text-white rounded hover:bg-black/70"><ChevronRight /></button>
                            </div>
                        </div>
                        {/* Screen Scrollbar decoration */}
                        <div className="absolute top-12 right-2 bottom-8 w-1 bg-[#1e293b] rounded-full overflow-hidden">
                            <div className="w-full h-1/3 bg-[#fbbf24] rounded-full" />
                        </div>
                    </div>

                    {/* DECORATIVE LINE */}
                    <div className="w-full h-1 bg-[#d97706] rounded-full mb-8 shadow-[0_1px_1px_rgba(255,255,255,0.2)]" />

                    {/* CONTROLS AREA */}
                    <div className="flex-1 relative">
                        {/* D-PAD */}
                        <div className="absolute left-2 top-4 w-32 h-32">
                            <div className="w-full h-full relative">
                                {/* Horizontal */}
                                <div className="absolute top-1/3 left-0 w-full h-1/3 bg-[#334155] rounded-sm shadow-md border-b-4 border-[#1e293b]" />
                                {/* Vertical */}
                                <div className="absolute left-1/3 top-0 w-1/3 h-full bg-[#334155] rounded-sm shadow-md border-b-4 border-[#1e293b]" />
                                {/* Center D-Pad Decor */}
                                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-[#334155] flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-[#1e293b]/50 shadow-inner" />
                                </div>
                                {/* Arrows */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[#94a3b8] text-xs">▲</div>
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#94a3b8] text-xs">▼</div>
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[#94a3b8] text-xs">◀</div>
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[#94a3b8] text-xs">▶</div>
                            </div>
                        </div>

                        {/* SPEAKER GRILL (Center) */}
                        <div className="absolute left-1/2 top-12 -translate-x-1/2 grid grid-cols-3 gap-2">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-[#d97706] rounded-full shadow-inner" />
                            ))}
                        </div>

                        {/* ACTION BUTTONS (A/B) */}
                        <div className="absolute right-4 top-8 flex gap-4 transform -rotate-12">
                            {/* B Button (Red, Left/Bottom) */}
                            <div className="flex flex-col items-center mt-8">
                                <motion.button
                                    whileTap={{ scale: 0.9, y: 2 }}
                                    className="w-12 h-12 rounded-full bg-[#ef4444] shadow-[0_4px_0_#991b1b] text-white font-bold flex items-center justify-center font-pixel text-lg border-2 border-[#b91c1c]"
                                >B</motion.button>
                            </div>
                            {/* A Button (Green, Right/Top) */}
                            <div className="flex flex-col items-center -mt-2">
                                <motion.button
                                    whileTap={{ scale: 0.9, y: 2 }}
                                    className="w-12 h-12 rounded-full bg-[#22c55e] shadow-[0_4px_0_#15803d] text-white font-bold flex items-center justify-center font-pixel text-lg border-2 border-[#166534]"
                                >A</motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div >
        </section >
    );
};
