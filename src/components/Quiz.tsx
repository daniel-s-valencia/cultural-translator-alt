import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
  { text: "Many of today’s problems come from abandoning old standards of morality and responsibility.", worldview: "traditional" },
  { text: "Truth is best discovered through open debate, evidence, and the testing of ideas.", worldview: "modern" },
  { text: "There is no single capital \"T\" Truth, only truths shaped by perspective and experience.", worldview: "postmodern" },
  { text: "Ultimate truth is best found on a faith journey.", worldview: "traditional" },
  { text: "When deciding what is true, evidence from trained experts should count more than personal experience.", worldview: "modern" },
  { text: "Truth is often what powerful groups have taught everyone else to accept as reality.", worldview: "postmodern" },
  { text: "We should defer to long-standing traditions more than untested new ideas.", worldview: "traditional" },
  { text: "Public arguments should be guided by evidence, data, and scientific expertise rather than personal experience or faith.", worldview: "modern" },
  { text: "When government leaders provide official explanations for major events, they are usually designed to protect powerful elites from accountability.", worldview: "postmodern" },
  { text: "Marriage is only between a man and a woman.", worldview: "traditional" },
  { text: "People should be free to say what they think, even when it offends others.", worldview: "modern" },
  { text: "Major institutions are beyond reform and need to be completely rebuilt from the ground up.", worldview: "postmodern" },
  { text: "Unborn life is sacred, so abortion should be legally restricted.", worldview: "traditional" },
  { text: "People should be free to live as they choose, and limits on that freedom should require clear evidence of measurable harm to others.", worldview: "modern" },
  { text: "No one single account of truth is more valid than another.", worldview: "postmodern" },
  { text: "The ideal family structure for children is a married mother and father.", worldview: "traditional" },
  { text: "Free markets, entrepreneurship, and economic growth are the most effective ways to reduce poverty.", worldview: "modern" },
  { text: "Extreme wealth reflects an unfair system, so top earners should be taxed heavily to support those the system exploits.", worldview: "postmodern" }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ traditional: 0, modern: 0, postmodern: 0 });
  const [showResults, setShowResults] = useState(false);
  const [started, setStarted] = useState(false);
  
  // Registration State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const startQuiz = () => {
    if (!name || !email || !consent) {
      setError('Please provide your name, email, and consent to continue.');
      return;
    }
    setError('');
    setStarted(true);
  };

  const handleAnswer = async (value: number) => {
    const worldview = QUESTIONS[currentQuestion].worldview as 'traditional' | 'modern' | 'postmodern';
    const newScores = { ...scores, [worldview]: scores[worldview] + value };
    setScores(newScores);
    
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
      submitResults(newScores);
    }
  };

  const submitResults = async (finalScores: any) => {
    setIsSubmitting(true);
    try {
      await fetch('/api/submit-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          traditional: finalScores.traditional,
          modern: finalScores.modern,
          postmodern: finalScores.postmodern
        })
      });
    } catch (e) {
      console.error('Failed to submit results', e);
    }
    setIsSubmitting(false);
  };

  const getDominantWorldview = () => {
    let max = 0;
    let dominant = '';
    Object.entries(scores).forEach(([key, value]) => {
      if (value > max) {
        max = value;
        dominant = key;
      }
    });
    return dominant;
  };

  const resetQuiz = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setScores({ traditional: 0, modern: 0, postmodern: 0 });
    setShowResults(false);
    // Keep name/email populated
  };

  const maxCategoryScore = 6 * 6; // 6 questions per category, max score 6

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white p-8 sm:p-12 shadow-2xl border-t-8 border-yellow-400 max-w-2xl mx-auto"
          >
            <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl font-serif mb-6 text-center">Worldview Assessment</h1>
            <p className="text-base text-gray-600 mb-8 text-center">
              Welcome to the Cultural Translation Worldview Assessment. This 18-question quiz is designed to identify your dominant worldview. 
            </p>
            
            <div className="bg-gray-50 p-6 border border-gray-100 mb-8">
              <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-4">Registration</h3>
              
              {error && <div className="text-red-500 text-sm mb-4 font-semibold">{error}</div>}
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors" 
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Address</label>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors" 
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="flex items-start gap-3 mt-4 pt-2">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    checked={consent}
                    onChange={e => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400 accent-yellow-400"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600 leading-snug">
                    I consent to having my name and email stored securely to receive my results and occasional updates from The Cultural Translator.
                  </label>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={startQuiz}
                className="bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all border-2 border-transparent hover:border-black w-full sm:w-auto"
              >
                Start the Assessment
              </button>
            </div>
          </motion.div>
        ) : !showResults ? (
          <motion.div
            key={`question-${currentQuestion}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-2xl p-8 sm:p-16 border-t-8 border-black"
          >
            <div className="mb-12 text-center">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                Question {currentQuestion + 1} of {QUESTIONS.length}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black font-serif leading-tight">
                "{QUESTIONS[currentQuestion].text}"
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 px-2">
                <span>Strongly Disagree</span>
                <span>Strongly Agree</span>
              </div>
              <div className="flex justify-between items-center gap-2 sm:gap-4">
                {[1, 2, 3, 4, 5, 6].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleAnswer(val)}
                    className="flex-1 aspect-square max-h-16 flex items-center justify-center rounded-none border-2 border-gray-200 text-xl font-bold text-gray-400 hover:bg-yellow-400 hover:text-black hover:border-black transition-all transform hover:-translate-y-1 focus:outline-none"
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-16 w-full bg-gray-100 h-1">
              <div 
                className="bg-yellow-400 h-1 transition-all duration-500" 
                style={{ width: `${((currentQuestion) / QUESTIONS.length) * 100}%` }}
              ></div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white shadow-2xl p-8 sm:p-16 text-center border-t-8 border-yellow-400"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl font-serif mb-6">Your Results</h2>
            <p className="text-lg text-gray-600 mb-8">
              Based on your answers, your dominant worldview leans towards:
            </p>
            
            <div className="inline-block px-8 py-4 bg-black text-yellow-400 text-3xl font-serif font-bold capitalize mb-12 transform -rotate-1 shadow-lg">
              {getDominantWorldview()}
            </div>

            <div className="space-y-6 mb-12 text-left max-w-md mx-auto">
              {Object.entries(scores).map(([worldview, score]) => (
                <div key={worldview}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-bold text-black uppercase tracking-widest text-sm">{worldview}</span>
                    <span className="text-gray-500 font-bold">{Math.round((score / maxCategoryScore) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-3">
                    <div className="bg-black h-3 transition-all duration-1000" style={{ width: `${(score / maxCategoryScore) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mb-12 max-w-md mx-auto">
              Keep a record of your score. No other record of your score exists. Bring these results to the training where we'll review them.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={`/${getDominantWorldview()}`}
                className="w-full sm:w-auto bg-black px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl hover:bg-yellow-400 hover:text-black transition-all border-2 border-transparent hover:border-black transform hover:-translate-y-1"
              >
                Watch Your Video
              </a>
              <button
                onClick={resetQuiz}
                className="text-sm font-bold uppercase tracking-widest leading-6 text-black border-b-2 border-transparent pb-1 hover:border-yellow-400 transition-all"
              >
                Retake Quiz
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
