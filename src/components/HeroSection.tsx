import { Download, ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0f172a] border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-[5]" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none z-[5]" />

      {/* 3D Background */}
      <div className="absolute inset-0 opacity-70"></div>

      {/* Content */}
      <div className="max-w-[1440px] w-full px-8 py-20 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-md border border-emerald-400/30 rounded-full text-sm text-emerald-300 shadow-lg shadow-emerald-500/20">
              ✨ Available for work
            </span>
          </div>
          <h2 className="text-6xl tracking-tight text-white mb-6 drop-shadow-2xl">
            Building exceptional
            <br />
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
              digital experiences
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed drop-shadow-lg">
            I'm a frontend developer passionate about creating beautiful,
            performant, and accessible web applications. With expertise in
            React, TypeScript, and modern web technologies, I turn ideas into
            reality.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-400/50 text-emerald-300 rounded-lg hover:bg-emerald-500/30 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105">
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
