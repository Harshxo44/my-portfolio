import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PROFILE } from "@/data/profile";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 40));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "TUTORIALS", href: "#tutorials" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className={`editorial-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-left">
        <a href="#top" className="editorial-logo" aria-label="Harsh Sharma home">
          harsh<span>.</span>
        </a>
      </div>

      <div className="nav-center">
        <span className="editorial-system-label">00 / PERSONAL SYSTEM</span>
      </div>

      <nav className="editorial-nav nav-right" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
        <a className="editorial-header-link" href={`mailto:${PROFILE.email}`}>
          LET&apos;S TALK <ArrowUpRight size={14} />
        </a>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-system-tag">00 / PERSONAL SYSTEM</div>
          <nav>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mobile-talk-btn"
              href={`mailto:${PROFILE.email}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              LET&apos;S TALK <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
