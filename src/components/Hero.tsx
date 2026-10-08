import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pb-32 bg-white overflow-hidden min-h-screen flex items-center">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-48 -right-24 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Book Cover */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="flex justify-center lg:justify-end order-2 lg:order-1 relative"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-yellow-400 transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="/book-cover.jpg" 
                alt="The Cultural Translator by Rich Tafel" 
                className="w-full h-auto object-cover shadow-2xl border border-gray-100"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 max-w-2xl lg:max-w-none">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex"
            >
              <div className="relative rounded-full px-4 py-1.5 text-xs font-bold leading-6 text-black ring-2 ring-black hover:bg-yellow-400 transition-colors uppercase tracking-widest inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400 border border-black animate-pulse"></span>
                Coming Next Spring
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl font-extrabold tracking-tight text-black sm:text-6xl md:text-7xl font-serif mb-6"
            >
              <span className="block text-2xl sm:text-3xl font-medium italic text-gray-500 mb-2 font-sans lowercase">the</span>
              <span className="uppercase leading-none">Cultural<br/>Translator</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl leading-8 text-black font-semibold uppercase tracking-widest"
            >
              How to reach people who think you're the{' '}
              <span className="relative inline-block px-2 mt-1 lg:mt-0">
                <span className="relative z-10 text-black">problem</span>
                <span className="absolute bottom-0 left-0 w-full h-4/5 bg-yellow-400 -z-10 -rotate-2 rounded-sm transform scale-110"></span>
              </span>
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg leading-8 text-gray-600 max-w-xl"
            >
              By <strong className="text-black">Rich Tafel</strong>. A groundbreaking guide to navigating unprecedented polarization by understanding the three dominant worldviews in our society today.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-6"
            >
              <a
                href="https://www.simonandschuster.com/books/The-Cultural-Translator/Rich-Tafel/9781637636817"
                className="w-full sm:w-auto text-center bg-black px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl hover:bg-yellow-400 hover:text-black transition-all border-2 border-transparent hover:border-black transform hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pre-order Now
              </a>
              <a 
                href="#about" 
                className="text-sm font-bold uppercase tracking-widest leading-6 text-black border-b-2 border-black pb-1 hover:text-yellow-500 hover:border-yellow-500 transition-all flex items-center group"
              >
                Learn More <span aria-hidden="true" className="ml-2 group-hover:translate-y-1 transition-transform inline-block">&darr;</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
