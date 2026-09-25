import { useState, useRef, useEffect } from "react";
import {
  Bot,
  Send,
  Sparkles,
  Terminal,
  User,
  RefreshCw,
  ExternalLink,
  Github,
  FileText,
  Cpu,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
  metadata?: {
    tags?: string[];
    link?: { label: string; url: string };
    codeSnippet?: string;
  };
}

const PRESET_QUESTIONS = [
  "What is DubAI Studio?",
  "What are Harsh's core technical skills?",
  "What certifications does Harsh hold?",
  "Tell me about DriveLedger",
  "Where is Harsh studying?",
  "What is his AI/ML experience?",
];

export function AIAssistant() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hello! I am Harsh's AI Knowledge Assistant. Ask me anything about his projects, technical stack, resume, or engineering experience.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      metadata: {
        tags: ["AI Assistant", "Deterministic Q&A", "Harsh's Profile"],
      },
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getKnowledgeResponse = (userQuery: string): {
    text: string;
    metadata?: { tags?: string[]; link?: { label: string; url: string }; codeSnippet?: string };
  } => {
    const q = userQuery.toLowerCase();

    if (q.includes("dubai") || q.includes("dubbing") || q.includes("video") || q.includes("audio")) {
      return {
        text: "DubAI Studio is an end-to-end AI-powered multilingual video dubbing platform developed by Harsh. It supports 10+ languages with automated speech recognition, translation, vocal isolation, and voice cloning.\n\nKey Technologies: Faster Whisper, XTTS-v2, OpenVoice V2, Demucs, Node.js, Express.js, Python, and FFmpeg.",
        metadata: {
          tags: ["AI Audio Pipeline", "Python", "Whisper", "XTTS-v2", "Node.js"],
          link: { label: "View GitHub Repo", url: "https://github.com/Harshxo44" },
        },
      };
    }

    if (q.includes("driveledger") || q.includes("fleet") || q.includes("flutter") || q.includes("finance")) {
      return {
        text: "DriveLedger is a cross-platform Fleet Profit Management System created by Harsh. It features role-based workflow architectures, real-time cloud data sync, and interactive visual analytics dashboards.\n\nKey Technologies: Flutter, Dart, Firebase Cloud Firestore, FL Chart.",
        metadata: {
          tags: ["Flutter", "Dart", "Firebase Firestore", "Cross-Platform"],
          link: { label: "Explore on GitHub", url: "https://github.com/Harshxo44" },
        },
      };
    }

    if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("language") || q.includes("tool")) {
      return {
        text: "Harsh's technical stack spans AI/ML, Backend, and Frontend engineering:\n• AI/ML: PyTorch, TensorFlow, Keras, LLM Orchestration, Faster Whisper, Demucs, Scikit-Learn\n• Backend: Node.js, Express, Java (Spring Boot), Python 3.10+, REST APIs\n• Frontend: React 18, TypeScript, Tailwind CSS, Flutter/Dart\n• Cloud & DBs: AWS, Firebase Firestore, MongoDB, MySQL",
        metadata: {
          tags: ["PyTorch", "React", "Node.js", "AWS", "Spring Boot", "TypeScript"],
        },
      };
    }

    if (q.includes("certif") || q.includes("aws") || q.includes("ibm") || q.includes("credential")) {
      return {
        text: "Harsh holds multiple verified technical certifications:\n1. AWS Certified Cloud Practitioner (Amazon Web Services)\n2. AWS Academy Graduate — Cloud Foundations\n3. IBM Java Developer Professional\n4. IBM Deep Learning with Keras & TensorFlow\n5. Generative AI: Elevate Your Software Development (Coursera / IBM)\n6. Git and GitHub Certification",
        metadata: {
          tags: ["AWS Certified", "IBM Java", "Deep Learning", "Generative AI"],
          link: { label: "Download Resume", url: "/resume/harshresume.pdf" },
        },
      };
    }

    if (q.includes("study") || q.includes("education") || q.includes("university") || q.includes("college") || q.includes("parul") || q.includes("degree")) {
      return {
        text: "Harsh is pursuing a B.Tech degree in Computer Science & Engineering at Parul University (Vadodara). His focus is on AI-powered systems, backend microservices, and modern web application development.",
        metadata: {
          tags: ["B.Tech CSE", "Parul University", "Computer Science"],
        },
      };
    }

    if (q.includes("experience") || q.includes("intern") || q.includes("work") || q.includes("codsoft") || q.includes("job")) {
      return {
        text: "Harsh worked as an AI/ML Intern at CodSoft. During his internship, he developed machine learning models in Python, performed data analysis/preprocessing, and applied classification and regression algorithms to real-world datasets.",
        metadata: {
          tags: ["AI/ML Intern", "CodSoft", "Machine Learning", "Python"],
          link: { label: "View Verified Resume", url: "/resume/harshresume.pdf" },
        },
      };
    }

    if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
      return {
        text: "Harsh's official resume is available for view and download. It covers his B.Tech CSE coursework, AI dubbing architecture, software engineering background, and verified certifications.",
        metadata: {
          tags: ["Resume PDF", "AWS Certified", "Engineering Profile"],
          link: { label: "Download Harsh's Resume", url: "/resume/harshresume.pdf" },
        },
      };
    }

    if (q.includes("github") || q.includes("code") || q.includes("repo") || q.includes("contact") || q.includes("reach") || q.includes("email")) {
      return {
        text: "You can check out Harsh's open-source projects on GitHub at github.com/Harshxo44 or get in touch through the portfolio Contact section below.",
        metadata: {
          tags: ["GitHub Profile", "Open Source", "Software Engineering"],
          link: { label: "Visit GitHub Profile", url: "https://github.com/Harshxo44" },
        },
      };
    }

    // Default response
    return {
      text: "Harsh is a Software Engineer specializing in AI systems, backend microservices, and modern web applications. He holds an AWS Cloud Practitioner certification and has built projects like DubAI Studio (AI dubbing pipeline) and DriveLedger (Fleet Profit system).\n\nTry asking about:\n- DubAI Studio\n- DriveLedger\n- Technical Skills & Stack\n- Certifications & Education",
      metadata: {
        tags: ["Overview", "AI Systems", "Full-Stack Web"],
        link: { label: "GitHub Profile", url: "https://github.com/Harshxo44" },
      },
    };
  };

  const handleSend = (textToSend?: string) => {
    const messageText = textToSend || query;
    if (!messageText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setQuery("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getKnowledgeResponse(messageText);
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        metadata: response.metadata,
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome-" + Date.now(),
        sender: "assistant",
        text: "Knowledge base reset. What would you like to know about Harsh's work or technical background?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        metadata: {
          tags: ["AI Assistant", "Ready"],
        },
      },
    ]);
  };

  return (
    <section id="ai-assistant" className="py-16 bg-[#050508] border-t border-[#1f1f2e] text-gray-200">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              01 // INTERACTIVE KNOWLEDGE BASE
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white font-mono flex items-center gap-3">
              <Terminal className="w-7 h-7 text-emerald-400" />
              Ask About My Work
            </h2>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-gray-400 bg-[#0c0c12] border border-[#1f1f2e] px-3 py-1.5 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            LOCAL DETERMINISTIC Q&A ENGINE • ONLINE
          </div>
        </div>

        {/* Main Terminal Window */}
        <div className="bg-[#0c0c12] border border-[#1f1f2e] rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/5">
          {/* Terminal Bar */}
          <div className="bg-[#08080c] border-b border-[#1f1f2e] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-gray-400">
                harsh-ai-assistant@v2.4 --knowledge-base
              </span>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-emerald-400 transition-colors px-2 py-1 rounded bg-[#0f0f18] border border-[#1f1f2e]"
              title="Reset conversation"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Preset Chips */}
          <div className="bg-[#0a0a0f] border-b border-[#1f1f2e] px-4 py-3 flex flex-wrap gap-2 items-center">
            <span className="text-xs font-mono text-gray-500 mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" /> Suggested:
            </span>
            {PRESET_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs font-mono px-2.5 py-1 bg-[#0f0f18] hover:bg-[#161622] text-gray-300 hover:text-emerald-400 border border-[#1f1f2e] hover:border-emerald-500/40 rounded transition-all duration-200"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Messages Area */}
          <div className="p-6 space-y-4 max-h-[440px] overflow-y-auto bg-[#07070a]">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-start gap-3 ${
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs ${
                      msg.sender === "user"
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                        : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`max-w-2xl rounded-lg p-4 font-sans text-sm leading-relaxed border ${
                      msg.sender === "user"
                        ? "bg-[#0f141f] border-cyan-500/30 text-gray-100"
                        : "bg-[#0c0c12] border-[#1f1f2e] text-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-1 text-[11px] font-mono text-gray-500">
                      <span>{msg.sender === "user" ? "You" : "Harsh AI Assistant"}</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    <div className="whitespace-pre-line font-mono text-xs md:text-sm">
                      {msg.text}
                    </div>

                    {msg.metadata?.tags && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-[#181824]">
                        {msg.metadata.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-[#050508] border border-emerald-500/20 text-emerald-400 font-mono text-[10px] rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {msg.metadata?.link && (
                      <div className="mt-3">
                        <a
                          href={msg.metadata.link.url}
                          target={msg.metadata.link.url.startsWith("http") ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono rounded transition-colors"
                        >
                          {msg.metadata.link.url.includes("github") ? (
                            <Github className="w-3.5 h-3.5" />
                          ) : (
                            <FileText className="w-3.5 h-3.5" />
                          )}
                          {msg.metadata.link.label}
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-xs font-mono text-emerald-400"
              >
                <Bot className="w-4 h-4 animate-spin" />
                <span>Searching knowledge graph...</span>
              </motion.div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#08080c] border-t border-[#1f1f2e]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-3"
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about projects (e.g. DubAI Studio), skills, resume, degree..."
                  className="w-full bg-[#050508] border border-[#1f1f2e] focus:border-emerald-500/60 rounded-lg px-4 py-2.5 text-sm font-mono text-white placeholder-gray-500 focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={!query.trim()}
                className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:hover:bg-emerald-500 text-black font-mono text-xs font-bold rounded-lg transition-all flex items-center gap-2 shrink-0"
              >
                <span>SEND</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
