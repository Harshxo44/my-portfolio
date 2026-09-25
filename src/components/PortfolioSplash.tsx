import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animationConfig } from "@/config/site";

interface PortfolioSplashProps {
  onFinish: () => void;
}

export default function PortfolioSplash({ onFinish }: PortfolioSplashProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const bootSequence = [
    "[OK] INITIALIZING CORE",
    "[OK] LOADING NEURAL MODULES",
    "[OK] LOADING PROJECTS",
    "[OK] ESTABLISHING CONNECTION",
    "[OK] SYSTEM READY",
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches || animationConfig.reducedMotion === false);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Matrix canvas background for "matrix" or "cyber" style
  useEffect(() => {
    if (prefersReducedMotion || animationConfig.loaderStyle === "minimal") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "0101010101ABCDEFXYZ<>/{}[]";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(3, 0, 20, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillStyle = Math.random() > 0.8 ? "#06b6d4" : "#10b981";
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [prefersReducedMotion]);

  // Fast boot progress animation (1.2s - 1.5s duration)
  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(100);
      setLogs(bootSequence);
      const timer = setTimeout(() => {
        setIsFinished(true);
        onFinish();
      }, 400);
      return () => clearTimeout(timer);
    }

    const duration = 1400;
    const stepTime = 30;
    const steps = duration / stepTime;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const current = Math.min(Math.round((step / steps) * 100), 100);
      setProgress(current);

      const logIdx = Math.floor((current / 100) * bootSequence.length);
      setLogs(bootSequence.slice(0, Math.min(logIdx + 1, bootSequence.length)));

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => setIsFinished(true), 300);
        setTimeout(() => onFinish(), 700);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [onFinish, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030014] font-mono text-emerald-400 select-none overflow-hidden"
        >
          {!prefersReducedMotion && (
            <canvas ref={canvasRef} className="absolute inset-0 opacity-20 pointer-events-none" />
          )}

          <div className="relative z-10 w-[90%] max-w-md p-6 bg-[#0a002a]/80 border border-violet-500/30 rounded-2xl shadow-2xl backdrop-blur-xl space-y-6 text-center">
            <div className="space-y-1">
              <div className="text-xs text-violet-400 uppercase tracking-widest font-semibold">
                SYSTEM INITIALIZATION
              </div>
              <h1 className="text-xl font-bold text-white tracking-wider">
                CODE WITH AESTHETIC
              </h1>
            </div>

            {/* Boot Log Window */}
            <div className="h-28 bg-[#030014]/90 p-3 rounded-xl border border-violet-500/20 text-left text-xs font-mono space-y-1 overflow-hidden flex flex-col justify-end shadow-inner">
              {logs.map((log, idx) => (
                <div key={idx} className="flex items-center gap-2 text-emerald-400">
                  <span className="text-violet-400">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-gray-400">LOADING PORTFOLIO</span>
                <span className="text-emerald-400 font-bold">{progress}%</span>
              </div>
              <div className="h-2.5 w-full bg-[#030014] rounded-full overflow-hidden border border-violet-500/30 p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 rounded-full transition-all duration-75 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
