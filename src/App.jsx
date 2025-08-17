import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [glitchText, setGlitchText] = useState('HELLO WORLD')
  const [showPayment, setShowPayment] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    // Glitch effect for text
    const glitchInterval = setInterval(() => {
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
      const originalText = 'HELLO WORLD'
      let glitched = ''
      
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)]
        } else {
          glitched += originalText[i]
        }
      }
      
      setGlitchText(glitched)
      
      setTimeout(() => {
        setGlitchText('HELLO WORLD')
      }, 100)
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  const handlePayment = () => {
    setShowPayment(true)
    setTimeout(() => {
      setShowPayment(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Floating particles */}
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

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Glowing border container */}
          <div className="relative p-8 border border-cyan-400 bg-black/50 backdrop-blur-sm shadow-[0_0_50px_rgba(0,255,255,0.3)] rounded-lg">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-500 -translate-x-1 -translate-y-1"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-pink-500 translate-x-1 -translate-y-1"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-pink-500 -translate-x-1 translate-y-1"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-pink-500 translate-x-1 translate-y-1"></div>

            {/* Main heading */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-8 font-mono"
              style={{
                background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(0,255,255,0.5)',
              }}
              animate={{
                textShadow: [
                  '0 0 30px rgba(0,255,255,0.5)',
                  '0 0 60px rgba(255,0,255,0.8)',
                  '0 0 30px rgba(0,255,255,0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {glitchText}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-cyan-300 mb-8 font-mono tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              &gt; WELCOME TO THE FUTURE_
            </motion.p>

            {/* Payment button */}
            <motion.button
              onClick={handlePayment}
              className="relative px-8 py-4 bg-transparent border-2 border-pink-500 text-pink-400 font-mono text-lg uppercase tracking-wider hover:bg-pink-500/20 hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,255,0.6)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <span className="relative z-10">INITIALIZE PAYMENT</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/20 to-pink-500/0"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.button>
          </div>
        </motion.div>

        {/* Payment success animation */}
        <AnimatePresence>
          {showPayment && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50"
            >
              <div className="bg-black/90 border border-green-400 p-8 rounded-lg shadow-[0_0_50px_rgba(0,255,0,0.5)]">
                <motion.div
                  className="text-green-400 text-4xl font-mono text-center"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(0,255,0,0.5)',
                      '0 0 40px rgba(0,255,0,0.8)',
                      '0 0 20px rgba(0,255,0,0.5)',
                    ],
                  }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  PAYMENT SUCCESSFUL
                </motion.div>
                <div className="text-green-300 text-center mt-4 font-mono">
                  &gt; TRANSACTION COMPLETE_
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom decoration */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex space-x-4 text-cyan-400 font-mono text-sm">
            <span className="animate-pulse">[ONLINE]</span>
            <span>|</span>
            <span>NEURAL LINK ACTIVE</span>
            <span>|</span>
            <span className="animate-pulse">[SECURE]</span>
          </div>
        </motion.div>
      </div>

      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_98%,rgba(0,255,255,0.03)_100%)] bg-[length:100%_4px] animate-pulse"></div>
      </div>
    </div>
  )
}

export default App