import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#030014]/50 border-t border-violet-500/20">
      <div className="max-w-[1440px] mx-auto px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-white font-bold text-3xl hover:text-violet-400 transition-colors duration-300 tracking-tighter">
              Harsh<span className="text-violet-500 text-4xl leading-none">.</span>
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:john.doe@example.com"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>© 2026 Harsh Sharma. Built with</span>
            <Heart className="w-4 h-4 text-[#8b5cf6]" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
