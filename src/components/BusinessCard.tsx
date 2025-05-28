
import React, { useState } from 'react';
import { Phone, Mail, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BusinessCard = () => {
  const [showAbout, setShowAbout] = useState(false);
  const { scrollY } = useScroll();
  
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
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 shadow-2xl border border-cyan-500/20 backdrop-blur-lg"
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
                className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2"
              >
                Create Value
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1"
              >
                International Sdn. Bhd.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-gray-400 text-sm font-medium"
              >
                AI Services Provider
              </motion.p>
            </motion.div>

            {/* Contact Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-6 border border-cyan-500/30 mb-6 backdrop-blur-sm"
            >
              <div className="text-center mb-4">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-xl font-bold text-white mb-2"
                >
                  Rex Wong
                </motion.h3>
                <motion.button 
                  onClick={handleCall}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
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
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-cyan-400"
              >
                <Mail size={20} />
                <span className="text-sm text-gray-300">rex.createvalue.international@gmail.com</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-cyan-400"
              >
                <Globe size={20} />
                <div>
                  <p className="text-sm text-gray-300 font-medium">Web:</p>
                  <p className="text-xs text-gray-400 break-all">https://ludywghim.manus.space/#market</p>
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
              whileHover={{ scale: 1.05, y: -2 }}
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
                className="mt-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 shadow-2xl border border-cyan-500/20 backdrop-blur-lg"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6 text-center">
                  My Expertise
                </h3>
                
                <div className="space-y-6">
                  {/* AI Robot Caller */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/30"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-3 h-3 bg-cyan-400 rounded-full"
                      />
                      <h4 className="text-lg font-bold text-cyan-400">AI Robot Caller Specialist</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
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
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/30"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        className="w-3 h-3 bg-blue-400 rounded-full"
                      />
                      <h4 className="text-lg font-bold text-blue-400">AI Chatbot Developer</h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
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
                    <p className="text-gray-400 text-sm mb-4">
                      Ready to transform your business with AI solutions?
                    </p>
                    <motion.button
                      onClick={handleCall}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-green-500/25"
                    >
                      <Phone size={18} />
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
