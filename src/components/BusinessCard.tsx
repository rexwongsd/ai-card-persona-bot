
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const BusinessCard = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const { scrollY } = useScroll();
  
  // Animated phrases
  const phrases = [
    "AI Services Provider",
    "Robot Caller Specialist", 
    "Chatbot Developer",
    "Business Automation Expert"
  ];

  // Cycle through phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const cardY = useTransform(scrollY, [0, 500], [0, -50]);

  const handleCall = () => {
    window.open('https://wa.me/60179849414', '_blank');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background with Lighting Effects */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        {/* Floating Orbs with Lighting Effect */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -150, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-32 left-1/4 w-8 h-8 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-60 right-1/3 w-6 h-6 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, -100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 right-1/4 w-4 h-4 bg-gradient-to-r from-emerald-400/50 to-teal-400/50 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 120, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-32 left-1/5 w-3 h-3 bg-gradient-to-r from-yellow-400/60 to-orange-400/60 rounded-full"
        />
        
        {/* Animated Grid Pattern */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(90deg, cyan 1px, transparent 1px),
              linear-gradient(180deg, cyan 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </motion.div>

      {/* Main Content with Parallax */}
      <motion.div 
        style={{ y: cardY }}
        className="relative z-10 flex items-center justify-center min-h-screen p-4"
      >
        <div className="w-full max-w-md">
          {/* Main Business Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(34, 211, 238, 0.3)",
              borderColor: "rgba(34, 211, 238, 0.5)"
            }}
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 shadow-2xl border border-cyan-500/20 backdrop-blur-lg transition-all duration-300"
          >
            {/* Company Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center mb-8"
            >
              <motion.h1 
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(34, 211, 238, 0.3)',
                    '0 0 20px rgba(34, 211, 238, 0.6)',
                    '0 0 10px rgba(34, 211, 238, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 cursor-default"
              >
                Create Value
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 cursor-default"
              >
                International Sdn. Bhd.
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-gray-400 text-sm font-medium h-6"
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentPhraseIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="cursor-default"
                  >
                    {phrases[currentPhraseIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Contact Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(34, 211, 238, 0.2)",
                borderColor: "rgba(34, 211, 238, 0.5)"
              }}
              className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-6 border border-cyan-500/30 mb-6 backdrop-blur-sm transition-all duration-300"
            >
              <div className="text-center mb-4">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05, color: "#22d3ee" }}
                  className="text-xl font-bold text-white mb-2 cursor-default transition-colors duration-200"
                >
                  Rex Wong
                </motion.h3>
                <motion.button 
                  onClick={handleCall}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Phone size={18} className="group-hover:animate-pulse" />
                  </motion.div>
                  <span className="font-medium">Call: 6017-9849414</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="space-y-4 mb-6"
            >
              <motion.div 
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-center gap-3 text-cyan-400 transition-all duration-200"
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Mail size={20} />
                </motion.div>
                <span className="text-sm text-gray-300 hover:text-white transition-colors duration-200">rex.createvalue.international@gmail.com</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-center gap-3 text-cyan-400 transition-all duration-200"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }} 
                  transition={{ duration: 0.5 }}
                >
                  <Globe size={20} />
                </motion.div>
                <div>
                  <p className="text-sm text-gray-300 font-medium hover:text-white transition-colors duration-200">Web:</p>
                  <p className="text-xs text-gray-400 break-all hover:text-gray-300 transition-colors duration-200">https://ludywghim.manus.space/#market</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* About Me Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 text-center"
          >
            <motion.button
              onClick={() => setShowAbout(!showAbout)}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 25px rgba(34, 211, 238, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-cyan-500/25"
            >
              <span>✏️ MORE ABOUT ME!</span>
              <motion.div
                animate={{ rotate: showAbout ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {showAbout ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Expandable About Section */}
          <motion.div
            initial={false}
            animate={{
              height: showAbout ? 'auto' : 0,
              opacity: showAbout ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {showAbout && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: "0 25px 50px rgba(34, 211, 238, 0.2)"
                }}
                className="mt-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 shadow-2xl border border-cyan-500/20 backdrop-blur-lg transition-all duration-300"
              >
                <motion.h3 
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6 text-center cursor-default"
                >
                  My Expertise
                </motion.h3>
                
                <div className="space-y-6">
                  {/* AI Robot Caller */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ 
                      scale: 1.02,
                      x: 5,
                      boxShadow: "0 10px 25px rgba(34, 211, 238, 0.2)"
                    }}
                    className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-3 h-3 bg-cyan-400 rounded-full"
                      />
                      <motion.h4 
                        whileHover={{ color: "#22d3ee" }}
                        className="text-lg font-bold text-cyan-400 transition-colors duration-200"
                      >
                        AI Robot Caller Specialist
                      </motion.h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed hover:text-gray-200 transition-colors duration-200">
                      Expert in developing and implementing advanced AI-powered automated calling systems. 
                      Creating intelligent voice bots that can handle customer interactions, lead generation, 
                      appointment scheduling, and follow-up calls with human-like conversation capabilities.
                    </p>
                  </motion.div>

                  {/* AI Chatbot */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ 
                      scale: 1.02,
                      x: -5,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)"
                    }}
                    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        className="w-3 h-3 bg-blue-400 rounded-full"
                      />
                      <motion.h4 
                        whileHover={{ color: "#3b82f6" }}
                        className="text-lg font-bold text-blue-400 transition-colors duration-200"
                      >
                        AI Chatbot Developer
                      </motion.h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed hover:text-gray-200 transition-colors duration-200">
                      Specialized in creating sophisticated AI chatbots for websites, messaging platforms, 
                      and customer service applications. Building conversational AI that understands context, 
                      provides accurate responses, and seamlessly integrates with business workflows.
                    </p>
                  </motion.div>

                  {/* Call to Action */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-center pt-4"
                  >
                    <motion.p 
                      whileHover={{ scale: 1.02 }}
                      className="text-gray-400 text-sm mb-4 cursor-default"
                    >
                      Ready to transform your business with AI solutions?
                    </motion.p>
                    <motion.button
                      onClick={handleCall}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-green-500/25"
                    >
                      <motion.div whileHover={{ rotate: 15 }}>
                        <Phone size={18} />
                      </motion.div>
                      <span>Contact Me on WhatsApp</span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BusinessCard;
