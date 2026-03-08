export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#030014] border-t border-violet-500/20"
    >
      <div className="max-w-[1440px] w-full px-8 py-20">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-violet-500 text-sm tracking-wider uppercase font-semibold">
            About Me
          </span>
          <h2 className="text-5xl text-white mt-2 font-bold">
            {"Who I Am".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block hover:scale-110 hover:-translate-y-1 hover:text-violet-500 transition-all duration-200 cursor-default"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Content - Photo Card & Description */}
          <div className="space-y-8 h-full flex flex-col justify-center">
            {/* Photo Card */}
            <div className="relative group w-full max-w-[200px] mx-auto md:mx-0">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 bg-[#0a002a]/80 aspect-[4/5] shadow-2xl">
                <img 
                  src="https://github.com/Harshxo44.png" 
                  alt="Harsh Sharma"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback gradient if image not found yet
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%231e1b4b'/%3E%3C/svg%3E";
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/20 to-transparent opacity-80 mt-auto h-1/2"></div>
                
                {/* Text inside card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">Harsh Sharma</h3>
                  <p className="text-violet-400 font-medium tracking-wide text-sm">Frontend Developer</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-lg">
                I am a student UI/UX and frontend developer with a strong passion
                for building clean, intuitive, and visually engaging user
                interfaces. I enjoy transforming ideas into interactive digital
                experiences using modern web technologies.
              </p>

              <p className="text-gray-400 leading-relaxed">
                My journey into development started at a young age, driven by my
                curiosity about games and how digital systems work behind the
                scenes. That curiosity gradually shaped my decision to pursue
                computer engineering and build a career in software development.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Key Highlights */}
            <div className="bg-[#0a002a]/60 backdrop-blur-xl border border-violet-500/30 p-6 rounded-2xl shadow-xl shadow-violet-500/10 hover:shadow-2xl hover:shadow-violet-500/20 hover:border-violet-500/50 transition-all duration-300">
              <h3 className="text-xl text-white mb-4 font-semibold">
                Key Highlights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 text-xl">✓</span>
                  <span className="text-gray-300">
                    Student UI/UX & Frontend Developer
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 text-xl">✓</span>
                  <span className="text-gray-300">
                    Strong focus on React, JavaScript, and modern UI design
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 text-xl">✓</span>
                  <span className="text-gray-300">
                    Actively learning and building real-world projects
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1 text-xl">✓</span>
                  <span className="text-gray-300">
                    Long-term goal: Professional Software Developer
                  </span>
                </li>
              </ul>
            </div>

            {/* Interests */}
            <div className="bg-[#0a002a]/60 backdrop-blur-xl border border-green-500/30 p-6 rounded-2xl shadow-xl shadow-green-500/10 hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-500/50 transition-all duration-300">
              <h3 className="text-xl text-white mb-4 font-semibold">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Learning New Technologies",
                  "UI / UX Design",
                  "Frontend Development",
                  "Problem Solving",
                  "Gaming",
                  "Photography",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-[#030014]/50 border border-violet-500/40 rounded-full text-sm text-gray-300 hover:scale-105 hover:bg-violet-500 hover:text-white hover:border-violet-500 transition-all duration-200 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
