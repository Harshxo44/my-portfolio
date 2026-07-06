import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioSplashProps {
  onFinish: () => void;
}

export default function PortfolioSplash({ onFinish }: PortfolioSplashProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Matrix Rain Effect (Numbers Only)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nums = "0123456789";
    const alphabet = nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(4, 5, 8, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#10b981"; // Matrix Green for numbers
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Loading Progress Bar (Slower)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFinished(true), 1500); // Wait bit longer at 100%
          setTimeout(() => onFinish(), 2500);
          return 100;
        }
        // Slower increment
        const increment = Math.random() < 0.3 ? 0 : Math.floor(Math.random() * 2) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onFinish]);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nosifer&display=swap');
        
        @keyframes rotate-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(16,185,129,0.6)) scale(1); }
          50% { filter: drop-shadow(0 0 25px rgba(16,185,129,0.9)) scale(1.03); }
        }

        .circle-spin {
          animation: rotate-clockwise 25s linear infinite;
          transform-origin: center;
        }
        
        .star-pulse {
          animation: pulse-glow 3s ease-in-out infinite;
          transform-origin: center;
        }
        
        .scary-text {
          font-family: 'Nosifer', cursive;
          color: #ef4444;
          text-shadow: 0 0 10px #ef4444, 0 3px 2px #7f1d1d;
          line-height: 1.6;
          padding-bottom: 12px;
          display: inline-block;
        }
      `}</style>
      
      <AnimatePresence>
        {!isFinished && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#040508] overflow-hidden"
          >
            {/* Matrix Canvas */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 opacity-30 pointer-events-none"
            />

            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#040508_90%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-4 mt-8">
              {/* Top Title */}
              <motion.h1 
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="text-2xl sm:text-3xl md:text-5xl font-black tracking-wider text-[#a7f3d0] mb-2 sm:mb-4 text-center leading-tight sm:leading-normal px-2"
                style={{
                  textShadow: "0 0 10px #10b981, 0 0 20px #10b981, 0 0 40px #047857",
                  fontFamily: "'Courier New', Courier, monospace"
                }}
              >
                Code<br className="sm:hidden" /> with<br className="sm:hidden" /> Aesthetic
              </motion.h1>

              {/* Central Abstract Group */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1.5 }}
                className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] my-4 sm:my-6 flex flex-col items-center justify-center"
              >
                  {/* The Rotating Star / Pentagram */}
                  <div className="relative w-40 h-40 md:w-56 md:h-56 mb-4 flex items-center justify-center">
                     {/* Outer Ring - Rotating Clockwise with Dashes */}
                     <svg viewBox="0 0 100 100" className="absolute w-full h-full text-[#10b981]/40 circle-spin">
                        <circle 
                           cx="50" 
                           cy="50" 
                           r="45" 
                           fill="none" 
                           stroke="currentColor" 
                           strokeWidth="2.5" 
                           strokeDasharray="6 4"
                        />
                     </svg>
                     
                     {/* Inner Pentagram and Pentagon - Pulsing and Drawing dynamically */}
                     <svg viewBox="0 0 100 100" className="absolute w-full h-full text-[#10b981] star-pulse">
                        {/* Outer Pentagon - Geometrically Accurate & Self-Drawing */}
                        <polygon 
                           points="50,5 92.8,36.1 76.5,86.4 23.5,86.4 7.2,36.1" 
                           fill="none" 
                           stroke="currentColor" 
                           strokeWidth="2" 
                           style={{
                              strokeDasharray: "265",
                              strokeDashoffset: 265 - (progress / 100) * 265,
                              transition: "stroke-dashoffset 0.15s ease-out"
                           }}
                        />
                        {/* Pentagram Intersecting Lines - Geometrically Accurate & Self-Drawing */}
                        <polygon 
                           points="50,5 76.5,86.4 7.2,36.1 92.8,36.1 23.5,86.4" 
                           fill="none" 
                           stroke="currentColor" 
                           strokeWidth="2.5" 
                           style={{
                              strokeDasharray: "428",
                              strokeDashoffset: 428 - (progress / 100) * 428,
                              transition: "stroke-dashoffset 0.15s ease-out"
                           }}
                        />
                     </svg>
                  </div>
              </motion.div>

              {/* Scary Loading Text & Progress */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="flex flex-col items-center z-20 mt-4 sm:mt-2"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 scary-text tracking-widest uppercase text-center">
                  Loading...
                </h2>
                
                <div className="relative flex items-center justify-center w-36 h-36">
                  {/* Background Circle */}
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle
                      cx="72"
                      cy="72"
                      r={radius}
                      stroke="rgba(239, 68, 68, 0.15)"
                      strokeWidth="3"
                      fill="none"
                    />
                    {/* Progress Circle (Bloody Red) */}
                    <circle
                      cx="72"
                      cy="72"
                      r={radius}
                      stroke="#ef4444"
                      strokeWidth="5"
                      fill="none"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: strokeDashoffset,
                        transition: "stroke-dashoffset 0.2s ease-out",
                      }}
                      className="drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                    />
                  </svg>
                  
                  {/* Scary Percentage Text */}
                  <div className="flex flex-col items-center justify-center -translate-y-1">
                    <span className="text-2xl font-bold scary-text drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
                      {progress}%
                    </span>
                    <span className="text-[10px] text-[#ef4444] font-bold uppercase tracking-[0.2em] mt-1 opacity-80 mix-blend-screen">
                      Complete
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
