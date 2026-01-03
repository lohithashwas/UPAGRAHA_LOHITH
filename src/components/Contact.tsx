import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe, Star } from 'lucide-react';

const sponsors = [
  { name: 'SVCE', level: 'PLATINUM' },
  { name: 'ECEA', level: 'GOLD' },
  { name: 'IETE', level: 'GOLD' },
  { name: 'RAIC', level: 'SILVER' },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Sponsors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-mono text-sm text-yellow-400">POWER-UPS</span>
            <Star className="w-5 h-5 text-yellow-400" />
          </div>
          <h2 className="font-pixel text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-8">
            SPONSORS
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 flex flex-col items-center justify-center bg-muted/50 border border-yellow-400/30 hover:border-yellow-400 transition-colors">
                  <span className="font-pixel text-sm md:text-base text-foreground">{sponsor.name}</span>
                  <span className={`font-mono text-[8px] mt-1 ${
                    sponsor.level === 'PLATINUM' ? 'text-cyan-400'
                    : sponsor.level === 'GOLD' ? 'text-yellow-400'
                    : 'text-gray-400'
                  }`}>
                    {sponsor.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="font-mono text-sm text-pink-400 mt-8 animate-pulse"
          >
            {'>>> MORE ALLIES JOINING SOON <<<'}
          </motion.p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-4">
            JOIN THE SQUAD
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative p-6 md:p-8 bg-muted/30 border border-primary/20"
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-pink-400" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-pink-400" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

            <h3 className="font-pixel text-xs text-cyan-400 mb-6">
              <span className="text-pink-400">{'>'}</span> HQ LOCATION
            </h3>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-start gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-muted border border-cyan-400/30 group-hover:border-cyan-400 transition-colors">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">Base</p>
                  <p className="font-mono text-sm text-foreground">Sri Venkateswara College of Engineering, Sriperumbudur</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-muted border border-pink-400/30 group-hover:border-pink-400 transition-colors">
                  <Mail className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">Comms</p>
                  <a href="mailto:ecea@svce.ac.in" className="font-mono text-sm text-foreground hover:text-pink-400 transition-colors">
                    ecea@svce.ac.in
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 flex items-center justify-center bg-muted border border-yellow-400/30 group-hover:border-yellow-400 transition-colors">
                  <Phone className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">Hotline</p>
                  <p className="font-mono text-sm text-foreground">+91 XXXXX XXXXX</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              {[
                { icon: Instagram, color: 'pink', href: '#' },
                { icon: Linkedin, color: 'cyan', href: '#' },
                { icon: Globe, color: 'yellow', href: '#' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 flex items-center justify-center bg-muted border border-${social.color}-400/30 hover:border-${social.color}-400 transition-colors`}
                >
                  <social.icon className={`w-5 h-5 ${
                    social.color === 'pink' ? 'text-pink-400'
                    : social.color === 'cyan' ? 'text-cyan-400'
                    : 'text-yellow-400'
                  }`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative p-6 md:p-8 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 border border-primary/20 flex flex-col justify-center"
          >
            <h3 className="font-pixel text-xs text-yellow-400 mb-4">
              <span className="text-cyan-400">{'>'}</span> READY FOR BATTLE?
            </h3>
            
            <p className="font-mono text-sm text-foreground/80 mb-8">
              Join the ultimate tech showdown! Register now and prove you have what it takes to be a champion.
            </p>

            <motion.a
              href="https://forms.gle/zhyrtF73EjPUQSip7"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block w-full py-4 bg-gradient-to-r from-green-500 to-green-600 font-pixel text-sm text-background text-center overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <span className="relative flex items-center justify-center gap-3">
                <motion.span
                  className="w-3 h-3 bg-yellow-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                ENTER ARENA
              </span>
            </motion.a>

            <motion.p
              className="text-center mt-6 font-mono text-xs text-muted-foreground"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {'>>> PRESS START TO CONTINUE <<<'}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
