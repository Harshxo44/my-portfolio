import { useEffect, useState } from "react";

import PortfolioSplash from "./components/PortfolioSplash";
import { Navigation } from "./components/Navigation";
import { SplashSectionNew } from "./components/SplashSectionNew";
import { HeroSectionNew } from "./components/HeroSectionNew";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ResumeSection } from "./components/ResumeSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Enable dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      {showSplash ? (
        <PortfolioSplash onFinish={() => setShowSplash(false)} />
      ) : (
        <div className="bg-black">
          <Navigation />
          <SplashSectionNew />
          <HeroSectionNew />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ResumeSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
}
