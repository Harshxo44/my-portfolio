import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function SplashSectionNew() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "UI/UX & Frontend Developer";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative bg-black overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Red glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-red-600 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="text-center space-y-6 relative z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2,
          }}
        >
          <h1 className="text-7xl tracking-tight text-white mb-4 font-bold drop-shadow-2xl">
            {"Harsh Sharma".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block transition-all duration-200 cursor-default"
                whileHover={{
                  y: -6,
                  color: "#ef4444",
                  textShadow: "0 0 18px rgba(239,68,68,0.6)",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Typewriter */}
        <div className="h-12">
          <p className="text-2xl text-gray-400 font-medium">
            {text}
            <span
              className={`inline-block w-[2px] h-7 bg-red-500 ml-1 align-middle ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </p>
        </div>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          UI/UX Focused Frontend Developer • Problem Solver • Tech Enthusiast
        </p>

        <div className="pt-8">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 32px rgba(239, 68, 68, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="px-8 py-3 bg-red-600 border border-red-500 text-white rounded-full hover:bg-red-500 transition-all duration-300 shadow-lg shadow-red-500/30 font-medium"
          >
            Explore Portfolio
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-7 h-7 text-gray-600" />
      </motion.div>
    </section>
  );
}
