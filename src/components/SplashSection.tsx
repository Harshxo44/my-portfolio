import { useState, useEffect } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { SITE_DATA } from "@/config/site";

export function SplashSection() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = SITE_DATA.title;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

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
      className="min-h-screen flex flex-col items-center justify-center relative bg-[#030014] px-6 text-center"
    >
      {/* Subtle background grid overlay */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Radial ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="space-y-6 relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0a002a]/80 border border-violet-500/30 rounded-full text-xs text-violet-300 backdrop-blur-md shadow-lg shadow-violet-500/10">
          <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
          <span>Software Engineer & AI/ML Systems</span>
        </div>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl tracking-tight text-white font-extrabold">
          <span className="hover:text-violet-400 transition-colors duration-300">
            Harsh&nbsp;Sharma
          </span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center">
          <p className="text-xl sm:text-2xl text-gray-300 font-medium">
            {text}
            <span
              className={`inline-block w-[2px] h-6 bg-violet-500 ml-1.5 align-middle ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </p>
        </div>

        {/* Bio */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {SITE_DATA.bio}
        </p>

        {/* CTA */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-full hover:from-violet-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-violet-500/30 font-semibold hover:scale-105"
          >
            Explore Portfolio
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer p-2 text-gray-500 hover:text-violet-400 transition-colors"
      >
        <ChevronDown className="w-7 h-7" />
      </div>
    </section>
  );
}
