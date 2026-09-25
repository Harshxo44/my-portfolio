import { useEffect, useState } from "react";

import PortfolioSplash from "./components/PortfolioSplash";
import { Navigation } from "./components/Navigation";
import { HeroSectionNew } from "./components/HeroSectionNew";
import { AIAssistant } from "./components/AIAssistant";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ResumeSection } from "./components/ResumeSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { CommandPalette } from "./components/CommandPalette";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
      {showSplash ? (
        <PortfolioSplash onFinish={() => setShowSplash(false)} />
      ) : (
        <div className="bg-[#050508] min-h-screen text-gray-200 selection:bg-emerald-500/30 selection:text-emerald-300">
          <Navigation onOpenCmd={() => setCmdOpen(true)} />
          <HeroSectionNew />

          <section id="ai-assistant" className="py-16 bg-[#050508] border-t border-[#1a1a24]">
            <div className="max-w-[1280px] mx-auto px-6">
              <AIAssistant />
            </div>
          </section>

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