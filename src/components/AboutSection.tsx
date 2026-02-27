export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-black border-t border-red-500/20"
    >
      <div className="max-w-[1440px] w-full px-8 py-20">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-red-500 text-sm tracking-wider uppercase font-semibold">
            About Me
          </span>
          <h2 className="text-5xl text-white mt-2 font-bold">
            {"Who I Am".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block hover:scale-110 hover:-translate-y-1 hover:text-red-500 transition-all duration-200 cursor-default"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I am a student UI/UX and frontend developer with a strong passion
              for building clean, intuitive, and visually engaging user
              interfaces. I enjoy transforming ideas into interactive digital
              experiences using modern web technologies.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My journey into development started at a young age, driven by my
              curiosity about games and how digital systems work behind the
              scenes. That curiosity gradually shaped my decision to pursue
              computer engineering and build a career in software development.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Currently, I am focused on learning and building real-world
              projects using React, JavaScript, and UI/UX principles, while
              continuously expanding my skills toward becoming a well-rounded
              software developer in the future.
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Key Highlights */}
            <div className="bg-[#1a1a1f] backdrop-blur-xl border border-red-500/30 p-6 rounded-2xl shadow-xl shadow-red-500/10 hover:shadow-2xl hover:shadow-red-500/20 hover:border-red-500/50 transition-all duration-300">
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
            <div className="bg-[#1a1a1f] backdrop-blur-xl border border-green-500/30 p-6 rounded-2xl shadow-xl shadow-green-500/10 hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-500/50 transition-all duration-300">
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
                    className="px-3 py-1 bg-[#0a0a0f] border border-red-500/40 rounded-full text-sm text-gray-300 hover:scale-105 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 cursor-default"
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
