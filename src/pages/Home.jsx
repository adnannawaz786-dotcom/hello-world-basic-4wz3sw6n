import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NeonText from '../components/NeonText';

const Home = () => {
  const [glitchText, setGlitchText] = useState('HELLO WORLD');
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <NeonText className={`text-6xl md:text-8xl font-bold mb-4 ${isGlitching ? 'animate-pulse' : ''}`}>
            {isGlitching ? 'H3LL0 W0RLD' : 'HELLO WORLD'}
          </NeonText>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-xl md:text-2xl text-cyan-300 font-mono tracking-wider">
            WELCOME TO THE FUTURE
          </h2>
        </motion.div>

        {/* Cyberpunk Elements */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-8 items-center"
        >
          {/* Status Panel */}
          <div className="bg-black/50 border border-cyan-400/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-mono text-sm">SYSTEM ONLINE</span>
            </div>
            <div className="space-y-2 text-cyan-300 font-mono text-sm">
              <div>CPU: 99.9% EFFICIENCY</div>
              <div>MEMORY: 2048GB AVAILABLE</div>
              <div>NETWORK: QUANTUM LINK ACTIVE</div>
            </div>
          </div>

          {/* Command Terminal */}
          <div className="bg-black/70 border border-purple-500/30 p-6 rounded-lg backdrop-blur-sm min-w-[300px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-purple-400 font-mono text-xs">TERMINAL v2.1</span>
            </div>
            <div className="font-mono text-sm space-y-1">
              <div className="text-purple-400">root@cybernet:~$</div>
              <div className="text-green-400">initialize_greeting.exe</div>
              <div className="text-cyan-300">> Hello World loaded successfully</div>
              <div className="text-cyan-300">> Ready for input...</div>
              <div className="text-purple-400 animate-pulse">_</div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Button */}
        <motion.div variants={itemVariants} className="mt-12">
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsGlitching(true);
              setTimeout(() => setIsGlitching(false), 500);
            }}
          >
            <span className="relative z-10">JACK IN</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>

        {/* Footer Info */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="text-cyan-400/60 font-mono text-sm">
            CYBERPUNK INTERFACE v1.0 | NEURAL LINK ESTABLISHED
          </p>
        </motion.div>
      </motion.div>

      {/* Scanning Line Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        animate={{
          y: [0, window.innerHeight, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50"></div>
    </div>
  );
};

export default Home;