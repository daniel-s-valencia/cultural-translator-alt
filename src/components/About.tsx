import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl lg:text-center mb-20"
        >
          <h2 className="text-sm font-bold leading-7 text-black uppercase tracking-widest bg-yellow-400 inline-block px-4 py-2 -rotate-2 transform hover:rotate-0 transition-transform shadow-lg">A Revolution of the Heart</h2>
          <p className="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-serif">
            Translate Across Worldviews
          </p>
          <p className="mt-8 text-xl leading-8 text-gray-300">
            As our communities and workplaces grow more diverse, we often struggle to create spaces where differing perspectives can be safely shared. The Cultural Translator offers a <strong className="text-yellow-400">7-step framework</strong> that helps you build bridges with those you disagree with—using the language of shared values.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <dl className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-3">
            
            {/* Traditional */}
            <motion.div variants={itemVariants} className="group relative bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-yellow-400/50 transition-colors">
              <dt className="text-xl font-bold leading-7 text-white uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center bg-yellow-400 text-black font-serif italic text-3xl shrink-0 group-hover:scale-110 transition-transform">1</span>
                Traditional
              </dt>
              <dd className="text-base leading-7 text-gray-400">
                Values authority, order, and community. Focused on doing what is right and preserving what works. Discover how to speak to the heart of loyalty and legacy.
              </dd>
              <div className="mt-8">
                <a href="/traditional" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-yellow-400 hover:text-white transition-colors group/link">
                  Watch Video <span className="ml-2 group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </motion.div>

            {/* Modern */}
            <motion.div variants={itemVariants} className="group relative bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-yellow-400/50 transition-colors lg:translate-y-8">
              <dt className="text-xl font-bold leading-7 text-white uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center bg-yellow-400 text-black font-serif italic text-3xl shrink-0 group-hover:scale-110 transition-transform">2</span>
                Modern
              </dt>
              <dd className="text-base leading-7 text-gray-400">
                Values science, reason, and individual achievement. Focused on progress, autonomy, and success. Learn to frame ideas around objective data and innovation.
              </dd>
              <div className="mt-8">
                <a href="/modern" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-yellow-400 hover:text-white transition-colors group/link">
                  Watch Video <span className="ml-2 group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </motion.div>

            {/* Postmodern */}
            <motion.div variants={itemVariants} className="group relative bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-yellow-400/50 transition-colors lg:translate-y-16">
              <dt className="text-xl font-bold leading-7 text-white uppercase tracking-widest mb-6 flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center bg-yellow-400 text-black font-serif italic text-3xl shrink-0 group-hover:scale-110 transition-transform">3</span>
                Postmodern
              </dt>
              <dd className="text-base leading-7 text-gray-400">
                Values empathy, pluralism, and deconstruction. Focused on systemic justice, inclusion, and the environment. Connect through authenticity and shared equity.
              </dd>
              <div className="mt-8">
                <a href="/postmodern" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-yellow-400 hover:text-white transition-colors group/link">
                  Watch Video <span className="ml-2 group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </motion.div>

          </dl>
        </motion.div>
      </div>
    </section>
  );
}
