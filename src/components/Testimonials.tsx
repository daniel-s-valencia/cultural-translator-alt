import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "By providing training to today’s leaders, Rich is addressing toxic polarization head on. His message of transformative change will leave [us] ready to get to work building better workplaces for a better world.",
    author: "Johnny C. Taylor, Jr.",
    title: "President and CEO, SHRM-SCP"
  },
  {
    quote: "The Cultural Translation Program was a powerful framework for understanding the prevailing world views in America and how to approach each view with understanding and compassion – and to move from contempt and gridlock to empathy and progress.",
    author: "CEO",
    title: "The Indigo Education Company"
  },
  {
    quote: "This was one of the more effective short trainings I've been to as a professional peacebuilder. Rich and his team gave me a completely new frame of looking at people's interests and perspectives.",
    author: "Program Manager",
    title: "Search for Common Ground"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-yellow-400 relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-20 rounded-full mix-blend-overlay filter blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-xl text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl font-serif">What Leaders Say</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-black p-8 shadow-2xl relative group"
            >
              <div className="text-yellow-400 text-6xl font-serif absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity">"</div>
              <p className="text-gray-200 italic mb-8 relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="relative z-10">
                <div className="font-bold text-white uppercase tracking-wider text-sm">{t.author}</div>
                <div className="text-sm text-yellow-400 mt-1">{t.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
