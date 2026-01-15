import { motion } from 'framer-motion';

const sponsors = {
    title: [
        { name: "Logitech", image: "/assets/sponsors/Logitech.PNG", url: "https://www.logitech.com/en-in?srsltid=AfmBOoppVprmkK7HwNRfWqIc7ddtAuxLHIWmTS9CknNzN4OSSQJYIxEt" }
    ],
    gold: [
        { name: "Devfolio", image: "/assets/sponsors/4_lqjtfq.png", url: "https://devfolio.co/" },
        { name: "Polygon", image: "/assets/sponsors/6_cic6mb.png", url: "https://polygon.technology/" },
        { name: "Aptos", image: "/assets/sponsors/44_rgsqli.png", url: "https://aptos.dev/" }
    ],
    silver: [
        { name: "GitHub", image: "/assets/sponsors/35_isudye.png", url: "https://github.com/" },
        { name: "ETHIndia", image: "/assets/sponsors/37_q1zwzr.png", url: "https://ethindia.co/" },
        { name: "Loft Labs", image: "/assets/sponsors/loftlabs.png", url: "https://www.loft.sh/" },
        { name: "GeeksForGeeks", image: "/assets/sponsors/34_mmqmvx.png", url: "https://www.geeksforgeeks.org/?ref=next_article" },
        { name: "DevDock", image: "/assets/sponsors/devdock.png", url: "https://devdock.ai/" }
    ],
    bronze: [
        { name: "Navan.ai", image: "/assets/sponsors/38_jnxltv.png", url: "https://niia.ai/" },
        { name: "Axure", image: "/assets/sponsors/39_beepgg.png", url: "https://www.axure.com/" },
        { name: "Flatlogic", image: "/assets/sponsors/40_wrwlex.png", url: "https://flatlogic.com/" },
        { name: "NordPass", image: "/assets/sponsors/31_v3hzdi.png", url: "https://nordpass.com/" },
        { name: "NordVPN", image: "/assets/sponsors/30_jrd5ot.png", url: "https://nordvpn.com/" },
        { name: "Balsamiq", image: "/assets/sponsors/10_o1krlb.png", url: "https://balsamiq.com/" },
        { name: "Incogni", image: "/assets/sponsors/32_tsgwlg.png", url: "https://incogni.com/" },
        { name: "Saily", image: "/assets/sponsors/46_rqbqwd.png", url: "https://saily.com/" },
        { name: "Slido", image: "/assets/sponsors/17_spdvko.png", url: "https://www.slido.com/" },
        { name: "Beeceptor", image: "/assets/sponsors/45_gajtz0.png", url: "https://beeceptor.com/" },
        { name: "Interview Buddy", image: "/assets/sponsors/1_ebyhzk.png", url: "https://interviewbuddy.net/" },
        { name: ".XYZ", image: "/assets/sponsors/3_bhtjr3.png", url: "https://gen.xyz/" },
        { name: "Microsoft Learn", image: "/assets/sponsors/microsoft learn.png", url: "https://learn.microsoft.com/en-us/" },
        { name: "Verbwire", image: "/assets/sponsors/verbwire.png", url: "https://www.verbwire.com/" },
    ],
};

// Note: For hackathon partners, one image was in `img/MLH_Logo.png`. I need to ensure that image exists. 
// I copied `assets/sponsors`. I should check if `img` folder was inside `assets/sponsors` or outside.
// In the original file: `src="img/MLH_Logo.png"`. It was outside `assets/sponsors`. 
// I'll need to copy that specific file too if I want it.

export const Partners = () => {
    return (
        <section id="sponsors" className="relative py-20 overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
                <div className="grid-lines opacity-20" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="font-pixel text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                        PARTNERS
                    </h2>
                </div>

                {/* Title Sponsor */}
                <div className="mb-16 text-center">
                    <h3 className="font-mono text-xl md:text-2xl text-yellow-400 mb-8 tracking-widest">TITLE SPONSOR</h3>
                    <div className="flex justify-center items-center">
                        {sponsors.title.map((sponsor, index) => (
                            <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="group">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white/5 p-8 rounded-xl border border-yellow-500/30 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.1)] hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]"
                                >
                                    <img src={sponsor.image} alt={sponsor.name} className="h-24 md:h-32 object-contain w-auto" />
                                </motion.div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Gold Sponsors */}
                <div className="mb-16 text-center">
                    <h3 className="font-mono text-xl md:text-2xl text-yellow-500 mb-8 tracking-widest">GOLD SPONSORS</h3>
                    <div className="flex flex-wrap justify-center gap-8 items-center">
                        {sponsors.gold.map((sponsor, index) => (
                            <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="group">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white/5 p-6 rounded-xl border border-yellow-500/20 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300"
                                >
                                    <img src={sponsor.image} alt={sponsor.name} className="h-16 md:h-20 object-contain w-auto" />
                                </motion.div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Silver Sponsors */}
                <div className="mb-16 text-center">
                    <h3 className="font-mono text-xl md:text-2xl text-gray-300 mb-8 tracking-widest">SILVER SPONSORS</h3>
                    <div className="flex flex-wrap justify-center gap-6 items-center">
                        {sponsors.silver.map((sponsor, index) => (
                            <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white/5 p-4 rounded-lg border border-gray-400/20 backdrop-blur-sm hover:border-gray-300 transition-all duration-300"
                                >
                                    <img src={sponsor.image} alt={sponsor.name} className="h-12 md:h-16 object-contain w-auto" />
                                </motion.div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bronze Sponsors */}
                <div className="mb-16 text-center">
                    <h3 className="font-mono text-xl md:text-2xl text-orange-400 mb-8 tracking-widest">BRONZE SPONSORS</h3>
                    <div className="flex flex-wrap justify-center gap-4 items-center max-w-6xl mx-auto">
                        {sponsors.bronze.map((sponsor, index) => (
                            <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white/5 p-3 rounded border border-orange-500/20 backdrop-blur-sm hover:border-orange-400 transition-all duration-300"
                                >
                                    <img src={sponsor.image} alt={sponsor.name} className="h-10 md:h-12 object-contain w-auto" style={{ maxWidth: '150px' }} />
                                </motion.div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Hackathon & Media Partners Removed */}

                {/* Partner With Us Section */}
                <div id="proposal" className="mt-32 relative">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-black/40 border border-cyan-500/30 rounded-2xl p-8 md:p-12 text-center backdrop-blur-md relative overflow-hidden group">
                            {/* Decorative corners */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500" />

                            <h3 className="font-pixel text-2xl md:text-4xl text-white mb-6">WANT TO PARTNER WITH US?</h3>

                            <p className="font-mono text-gray-300 mb-10 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
                                Be part of the transformation and make a lasting impact by partnering with UPAGRAHA '26, a premier
                                National Level Technical Symposium at SVCE that brings together talented individuals to innovate and create groundbreaking solutions.
                                <br /><br />
                                As a partner, you'll gain valuable visibility among a highly engaged audience, connect with top tech talent,
                                and position your brand as a leader in the industry. Join us in empowering the next generation of innovators
                                and driving technological advancements.
                            </p>

                            <div className="flex justify-center">
                                <a
                                    href="/assets/brochure.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-pixel text-sm md:text-base bg-cyan-500 text-black px-8 py-4 rounded hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center gap-2"
                                >
                                    <span>VIEW BROCHURE</span>
                                    <span className="animate-pulse">_</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
