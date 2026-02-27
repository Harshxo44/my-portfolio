import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function SplashSection() {
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
    }, 90);

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
      className="min-h-screen flex flex-col items-center justify-center relative bg-black px-6"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.4)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Content */}
      <div className="text-center space-y-6 relative z-10">
        {/* Name */}
        <h1 className="text-7xl md:text-8xl tracking-tight text-white font-bold">
          <span className="hover:text-red-500 transition-colors duration-300">
            Harsh&nbsp;Sharma
          </span>
        </h1>

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

        {/* Tagline */}
        <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          Passionate about building clean interfaces, intuitive user
          experiences, and meaningful digital products.
        </p>

        {/* CTA */}
        <div className="pt-8">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-500 transition-all duration-300 shadow-lg shadow-red-500/30 font-medium"
          >
            Explore Portfolio
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-7 h-7 text-gray-600" />
      </div>
    </section>
  );
}
