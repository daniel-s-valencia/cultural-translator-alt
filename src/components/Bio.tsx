import { motion } from 'framer-motion';

export default function Bio() {
  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Bio text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold leading-7 text-black uppercase tracking-widest bg-yellow-400 inline-block px-3 py-1 rotate-1 mb-6">The Author</h2>
            <h3 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl font-serif mb-8">Meet Rich Tafel</h3>
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              Rich Tafel is a Cultural Translation℠ Advocate, Strategist, Entrepreneur, and Pastor. With decades of experience bridging divides in public policy and community organizing, he provides practical tools for meaningful communication across worldview divides.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 mb-10">
              He is a professional bridge builder who aims to solve seemingly insurmountable problems. From tackling bias head-on to fostering connections between corporations, he helps people discover that when we strip away surface-level differences, our core values often remain the same.
            </p>
            
            <a
              href="https://richtafel.us/"
              className="inline-flex items-center text-sm font-bold uppercase tracking-widest leading-6 text-black border-b-2 border-black pb-1 hover:text-yellow-500 hover:border-yellow-500 transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Rich's Personal Site <span aria-hidden="true" className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </motion.div>

          {/* Author Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-end h-[500px] overflow-hidden rounded-lg bg-gray-50 border border-gray-100"
          >
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-bl-full -z-0 opacity-20"></div>
            
            <img 
              src="/rich-tafel.png" 
              alt="Rich Tafel" 
              className="relative z-10 w-full max-w-sm object-cover object-bottom translate-y-8"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
