import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { CapabilityMapSection } from "./CapabilityMapSection";
import { ProofSection } from "./ProofSection";
import { ProjectsSection } from "./ProjectsSection";
import { TutorialsSection } from "./TutorialsSection";
import { ResumeSection } from "./ResumeSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export function EditorialPortfolio() {
  return (
    <div className="editorial-site">
      <Navigation />
      
      <main id="top">
        <HeroSection />

        {/* Capability Marquee Band */}
        <div className="editorial-marquee" aria-label="Areas of engineering practice">
          <div className="marquee-track">
            {[0, 1].map((copyIndex) => (
              <div className="marquee-copy" key={copyIndex}>
                {[
                  "AI & MACHINE LEARNING",
                  "FULL-STACK ENGINEERING",
                  "SYSTEMS ARCHITECTURE",
                  "AUTOMATION & PIPELINES",
                  "CREATIVE TECHNOLOGY",
                ].map((label) => (
                  <span key={`${copyIndex}-${label}`}>
                    {label} <b>✦</b>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <AboutSection />
        <CapabilityMapSection />
        <ProofSection />
        <ProjectsSection />
        <TutorialsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
