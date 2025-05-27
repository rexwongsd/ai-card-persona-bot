
import React, { useState } from 'react';
import { Phone, Mail, Globe, ChevronDown, ChevronUp } from 'lucide-react';

const BusinessCard = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleCall = () => {
    window.open('https://wa.me/60179849414', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Business Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-cyan-500/20 backdrop-blur-sm">
          {/* Company Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Create Value
            </h1>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
              International Sdn. Bhd.
            </h2>
            <p className="text-gray-400 text-sm font-medium">AI Services Provider</p>
          </div>

          {/* Contact Card */}
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-6 border border-cyan-500/30 mb-6">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-white mb-2">Rex Wong</h3>
              <button 
                onClick={handleCall}
                className="flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
              >
                <Phone size={18} className="group-hover:animate-pulse" />
                <span className="font-medium">Call: 6017-9849414</span>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 text-cyan-400">
              <Mail size={20} />
              <span className="text-sm text-gray-300">rex.createvalue.international@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-cyan-400">
              <Globe size={20} />
              <div>
                <p className="text-sm text-gray-300 font-medium">Web:</p>
                <p className="text-xs text-gray-400 break-all">https://ludywghim.manus.space/#market</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAbout(!showAbout)}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 mx-auto"
          >
            <span>✏️ MORE ABOUT ME!</span>
            {showAbout ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {/* Expandable About Section */}
        {showAbout && (
          <div className="mt-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-cyan-500/20 backdrop-blur-sm animate-fade-in">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6 text-center">
              My Expertise
            </h3>
            
            <div className="space-y-6">
              {/* AI Robot Caller */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <h4 className="text-lg font-bold text-cyan-400">AI Robot Caller Specialist</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Expert in developing and implementing advanced AI-powered automated calling systems. 
                  Creating intelligent voice bots that can handle customer interactions, lead generation, 
                  appointment scheduling, and follow-up calls with human-like conversation capabilities.
                </p>
              </div>

              {/* AI Chatbot */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <h4 className="text-lg font-bold text-blue-400">AI Chatbot Developer</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Specialized in creating sophisticated AI chatbots for websites, messaging platforms, 
                  and customer service applications. Building conversational AI that understands context, 
                  provides accurate responses, and seamlessly integrates with business workflows.
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center pt-4">
                <p className="text-gray-400 text-sm mb-4">
                  Ready to transform your business with AI solutions?
                </p>
                <button
                  onClick={handleCall}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center gap-2 mx-auto"
                >
                  <Phone size={18} />
                  <span>Contact Me on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessCard;
