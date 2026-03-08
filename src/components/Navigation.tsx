import { useState, useEffect } from "react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "resume",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030014]/50/95 backdrop-blur-xl shadow-lg shadow-violet-500/10 border-b border-violet-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">
        <div className="text-xl tracking-tight flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
          <span className="text-white font-bold text-3xl hover:text-violet-400 transition-colors duration-300 tracking-tighter">
            Harsh<span className="text-violet-500 text-4xl leading-none">.</span>
          </span>
        </div>

        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 relative ${
                  activeSection === item.id
                    ? "text-white font-medium"
                    : "text-gray-400 hover:text-violet-500"
                }`}
              >
                {item.label.split("").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block transition-all duration-200 hover:scale-125 hover:-translate-y-1 hover:text-violet-500"
                  >
                    {char}
                  </span>
                ))}

                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violet-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
