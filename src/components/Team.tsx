import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Users, Shield, Zap, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { teamData, categories } from '@/data/team';

export const Team = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("RACE");

    const filteredMembers = teamData.filter(member => member.category === activeCategory);

    const categoryIcons = {
        "ECEA": Shield,
        "IETE-SF": Zap,
        "RACE": Users,
    };

    const categoryColors = {
        "ECEA": { bg: "from-cyan-500/20 to-cyan-500/5", border: "border-cyan-400", text: "text-cyan-400", glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]" },
        "IETE-SF": { bg: "from-yellow-500/20 to-yellow-500/5", border: "border-yellow-400", text: "text-yellow-400", glow: "shadow-[0_0_30px_rgba(234,179,8,0.3)]" },
        "RACE": { bg: "from-pink-500/20 to-pink-500/5", border: "border-pink-400", text: "text-pink-400", glow: "shadow-[0_0_30px_rgba(236,72,153,0.3)]" },
    };

    return (
        <section id="team" className="relative py-20 md:py-32 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-pink-500/5 blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                        rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4],
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
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
                        <span className="w-12 h-0.5 bg-gradient-to-r from-transparent to-pink-400" />
                        <span className="font-mono text-sm text-pink-400 tracking-widest">O U R &nbsp; T E A M</span>
                        <span className="w-12 h-0.5 bg-gradient-to-l from-transparent to-pink-400" />
                    </div>
                    <h2 className="font-pixel text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400">
                        THE SQUAD
                    </h2>
                    <p className="font-mono text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
                        {'>'} Meet the warriors behind UPAGRAHA'26
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center gap-3 md:gap-6 mb-12 flex-wrap"
                >
                    {categories.map((category, index) => {
                        const Icon = categoryIcons[category];
                        const colors = categoryColors[category];
                        const isActive = activeCategory === category;

                        return (
                            <motion.button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className={`
                  relative px-6 md:px-10 py-3 md:py-4 font-pixel text-[10px] md:text-xs
                  border-2 transition-all duration-300 overflow-hidden
                  ${isActive
                                        ? `bg-gradient-to-br ${colors.bg} ${colors.border} ${colors.text} ${colors.glow}`
                                        : 'bg-muted/30 border-muted-foreground/30 text-muted-foreground hover:border-muted-foreground/60'
                                    }
                `}
                            >
                                <span className="flex items-center gap-2">
                                    <Icon className="w-4 h-4" />
                                    {category}
                                </span>

                                {/* Active indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeCategory"
                                        className={`absolute bottom-0 left-0 right-0 h-1 ${colors.border.replace('border', 'bg')}`}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
                >
                    {filteredMembers.map((member, index) => {
                        const colors = categoryColors[member.category];

                        return (
                            <motion.div
                                key={member.name + member.role}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{ delay: 0.1 + index * 0.03, duration: 0.4 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative"
                            >
                                {/* Card Container */}
                                <div className={`
                  relative bg-gradient-to-br from-muted/80 to-muted/40 backdrop-blur-sm
                  border border-primary/20 p-3 overflow-hidden
                  transition-all duration-300
                  group-hover:border-cyan-400/50 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]
                `}>
                                    {/* Corner Decorations */}
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/30 group-hover:border-cyan-400 transition-colors" />
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pink-400/30 group-hover:border-pink-400 transition-colors" />
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pink-400/30 group-hover:border-pink-400 transition-colors" />
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/30 group-hover:border-cyan-400 transition-colors" />

                                    {/* Image Container */}
                                    <div className="relative aspect-square mb-3 overflow-hidden border border-muted-foreground/20 group-hover:border-cyan-400/30 transition-colors bg-muted/50">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                            loading="eager"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                            }}
                                        />
                                        {/* Scanline overlay */}
                                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />
                                        {/* Hover gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Info */}
                                    <div className="text-center relative z-10">
                                        <h3 className="font-pixel text-[8px] md:text-[10px] text-foreground truncate group-hover:text-cyan-400 transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className={`font-mono text-[9px] mt-1 truncate ${colors.text} opacity-70 group-hover:opacity-100`}>
                                            {member.role}
                                        </p>

                                        {/* Social Links - Slide Up on Hover */}
                                        <div className="flex justify-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            {member.linkedin && (
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-400 transition-colors">
                                                    <Linkedin className="w-3 h-3" />
                                                </a>
                                            )}
                                            {member.github && (
                                                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                                                    <Github className="w-3 h-3" />
                                                </a>
                                            )}
                                            {member.portfolio && (
                                                <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-400 transition-colors">
                                                    <Globe className="w-3 h-3" />
                                                </a>
                                            )}
                                            {member.email && (
                                                <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-red-400 transition-colors">
                                                    <Mail className="w-3 h-3" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                        style={{
                                            background: 'radial-gradient(circle at center, rgba(6,182,212,0.1) 0%, transparent 70%)'
                                        }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom Decoration */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 border border-primary/20 bg-muted/30">
                        <span className="font-mono text-xs text-muted-foreground">
                            {'>'} TOTAL WARRIORS: <span className="text-cyan-400 font-bold">{teamData.length}</span>
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
