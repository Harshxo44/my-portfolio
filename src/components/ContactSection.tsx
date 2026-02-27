import { Mail, Github, Linkedin, Twitter, Send, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-black border-t border-[#1a1a1a]"
    >
      <div className="max-w-[1440px] w-full px-8 py-20">
        <div className="mb-12">
          <span className="text-[#ef4444] text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-5xl text-white mt-2">Let's Work Together</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <p className="text-xl text-gray-400 leading-relaxed">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg">
                  <Mail className="w-6 h-6 text-[#ef4444]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a
                    href="mailto:harshsharmag98@gmail.com"
                    className="text-white hover:text-[#ef4444] transition-colors"
                  >
                    harshsharmag98@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg">
                  <Github className="w-6 h-6 text-[#ef4444]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">GitHub</div>
                  <a
                    href="https://github.com/Harshxo44"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#ef4444] transition-colors"
                  >
                    Github: Harshcodes
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg">
                  <Linkedin className="w-6 h-6 text-[#ef4444]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/harshxo44/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#ef4444] transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg">
                  <Instagram className="w-6 h-6 text-[#ef4444]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Instagram</div>
                  <a
                    href="https://www.instagram.com/harshh.ok/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#ef4444] transition-colors"
                  >
                    @harshh.ok
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-8">
            <h3 className="text-2xl text-white mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-black border border-[#1a1a1a] rounded-md text-white focus:outline-none focus:border-[#ef4444] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black border border-[#1a1a1a] rounded-md text-white focus:outline-none focus:border-[#ef4444] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-[#1a1a1a] rounded-md text-white focus:outline-none focus:border-[#ef4444] transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#ef4444] text-white rounded-md hover:bg-[#dc2626] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
