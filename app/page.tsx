'use client'

import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, Mail, FileText, Moon, Sun, 
  Award, Calendar, X, Terminal, Zap, Trophy, Briefcase,
  ChevronRight, BookOpen, GraduationCap, School,
  Copyright, Send, Instagram
} from 'lucide-react';

// --- Data Definitions ---
const PROJECTS = [
  {
    title: "ESP32 Smart Drone",
    desc: "Surveillance drone with real-time automated arms detection using YOLOv8.",
    tech: ["ESP32-S3", "YOLOv8", "OpenCV", "Roboflow"],
    longDesc: "A complete end-term project for Practical Robotics. Combines a custom-built quadcopter with a deep learning pipeline for public safety. Captures live video via OV2660 and offloads inference to an external unit.",
    highlights: [
      "100% accuracy in sunlight conditions during field tests.",
      "Custom MOSFET speed controllers for motor thrust.",
      "Dataset of 10,552 images optimized for aerial perspectives."
    ]
  },
  {
    title: "Hire Ready",
    desc: "AI-Powered Interview Platform with voice interaction.",
    tech: ["Next.js", "Firebase", "Gemini", "Vapi"],
    longDesc: "Full-stack AI interview platform enabling real-time mock interviews with voice interaction and personalized feedback.",
    highlights: [
      "Real-time voice assistant for dynamic interviewing.",
      "Personalized feedback engine using Gemini API.",
      "Role-specific question generation and evaluation."
    ]
  },
  {
    title: "Finan Track",
    desc: "Comprehensive Finance Management and tracking tool.",
    tech: ["React.js", "TypeScript", "Node.js", "MongoDB"],
    longDesc: "Financial monitoring app for tracking expenses and income with clean, intuitive visual dashboards.",
    highlights: [
      "Secure MongoDB database for transaction consistency.",
      "Responsive UI built with Tailwind CSS.",
      "RESTful API architecture using Next.js routes."
    ]
  }
];

const SKILL_GROUPS = [
  { 
    title: "Languages", 
    skills: ["Java", "C", "C++", "JavaScript", "TypeScript", "Python"],
    glow: "hover:shadow-blue-500/50"
  },
  { 
    title: "Frameworks & Tools", 
    skills: ["React JS", "Next JS", "Node JS", "Tailwind CSS", "Bootstrap", "Git", "GitHub"],
    glow: "hover:shadow-purple-500/50"
  },
  { 
    title: "Databases & AI", 
    skills: ["MongoDB", "SQL", "Firebase", "YOLOv8", "OpenCV"],
    glow: "hover:shadow-emerald-500/50"
  }
];

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  // Initial Sync
  useEffect(() => {
  setMounted(true);
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark' || savedTheme === 'light') {
    setTheme(savedTheme);
  } else {
    setTheme('light'); // default
  }
}, []);


  // Theme Applier
  useEffect(() => {
    if (!mounted) return;
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const Reveal = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setVisible(true);
      }, { threshold: 0.1 });
      if (ref.current) obs.observe(ref.current);
      return () => obs.disconnect();
    }, []);

    return (
      <div ref={ref} className={`transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {children}
      </div>
    );
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0b0f] text-slate-900 dark:text-slate-100 transition-colors duration-500 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] backdrop-blur-md bg-white/70 dark:bg-black/40 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <span className="font-black text-2xl tracking-tighter text-blue-600">SP.</span>
          <div className="flex items-center gap-4 md:gap-8 font-black text-[10px] md:text-sm uppercase tracking-widest">
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Work</a>
            <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-white/5 transition-all active:scale-90 hover:bg-slate-200 dark:hover:bg-white/10">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex items-center px-4 md:px-6 max-w-7xl mx-auto pt-24 pb-8">
        <div className="flex flex-col md:grid md:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-12 items-center w-full">
          
          <div className="order-2 md:order-1 space-y-6 z-20 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter">
              Satyabrata <br />
              <span className="text-blue-600">Panda</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-md mx-auto md:mx-0 leading-relaxed font-medium">
              Computer Science and Engineering professional with a foundation in programming and full-stack web development. Experienced in Java, C++, JavaScript, and Python, utilizing React.js, Next.js, Node.js, and modern databases.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <a 
                href="https://docs.google.com/document/d/1Mnu57wN-TKnPI0xaYo8TeTqdfAgAVq9XSjKdSnLlJvk/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95 group"
              >
                <FileText size={18} className="group-hover:rotate-12 transition-transform" /> Resume
              </a>
              <div className="flex items-center gap-3">
                <a href="https://github.com/SatyabrataPanda42" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-blue-600 hover:text-white transition-all border border-slate-200 dark:border-white/5"><Github size={20}/></a>
                <a href="https://www.linkedin.com/in/satyabrata-panda-182975264/" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-blue-600 hover:text-white transition-all border border-slate-200 dark:border-white/5"><Linkedin size={20}/></a>
                <a href="https://www.instagram.com/satyabratapanda._?igsh=MTFrbjRzNXE1OWpo" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-blue-600 hover:text-white transition-all border border-slate-200 dark:border-white/5"><Instagram size={20}/></a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative flex justify-center z-10 w-full md:w-auto">
            <div className="absolute -inset-6 md:-inset-10 bg-blue-600/10 rounded-[3rem] blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[550px] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] md:ml-20 lg:ml-32 hover:scale-[1.02] transition-all duration-700 shadow-2xl border-4 border-white dark:border-white/10 group">
              <img 
                src="/Passportphoto_Satyabrata.jpeg" 
                alt="Satyabrata Panda" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" 
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <Reveal>
        <section id="experience" className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase flex items-center gap-4">
            <Briefcase className="text-blue-600" /> Professional Path
          </h2>
          <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-4 pl-8 md:pl-12">
            <div className="relative group">
              <div className="absolute -left-[43px] md:-left-[57px] top-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
              <div className="bg-white dark:bg-[#0f0f14] p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all shadow-sm hover:shadow-[0_20px_50px_rgba(37,99,235,0.05)]">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight group-hover:text-blue-600 transition-colors">ServiceNow - Trainee</h3>
                    <p className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-widest mt-1">ITSM & Automation</p>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500 w-fit">
                    June 2025 - July 2025
                  </span>
                </div>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-slate-600 dark:text-slate-400 font-medium text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <ChevronRight size={16} className="text-blue-600 flex-shrink-0 mt-1" />
                    <span>Developed skills in ITSM, Flow Designer, and CMDB.</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight size={16} className="text-blue-600 flex-shrink-0 mt-1" />
                    <span>Built and managed scoped apps using Studio and IntegrationHub.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* TECHNICAL ARSENAL */}
      <Reveal>
        <section id="skills" className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase text-center md:text-left">Technical Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SKILL_GROUPS.map((group, i) => (
              <div key={i} className="group bg-white dark:bg-[#0f0f14] rounded-[2.5rem] p-8 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 shadow-sm hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500 flex flex-col hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-black mb-8 text-slate-900 dark:text-white group-hover:text-blue-600 uppercase tracking-tighter flex items-center gap-2 transition-colors duration-300">
                  <Terminal size={18}/> {group.title}
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {group.skills.map((skill, j) => (
                    <span 
                      key={j} 
                      className={`px-3 py-1.5 md:px-4 md:py-2 bg-slate-900 dark:bg-white/10 rounded-xl text-[10px] md:text-xs font-bold border border-slate-700 dark:border-white/5 text-white hover:scale-110 hover:text-blue-400 hover:border-blue-600 hover:shadow-[0_0_25px_-5px] ${group.glow} transition-all cursor-default shadow-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* PROJECTS SHOWCASE */}
      <Reveal>
        <section id="projects" className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase text-center md:text-left">Selected Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PROJECTS.map((p, i) => (
              <div key={i} className="group bg-white dark:bg-[#0f0f14] rounded-[2.5rem] p-8 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 shadow-sm hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <div className="w-14 h-14 rounded-[1.25rem] bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-[10deg]">
                    <Zap size={28} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{p.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm font-medium leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/5 border border-blue-500/10 px-2.5 py-1 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(p)} 
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 py-4 rounded-[1.25rem] font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95 group-hover:shadow-lg"
                >
                  Explore Analysis
                </button>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ACHIEVEMENTS */}
      <Reveal>
        <section id="achievements" className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-950 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden group">
            <Trophy className="absolute -top-6 -right-6 w-32 h-32 md:w-56 md:h-56 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
            <div className="relative z-10 max-w-3xl mx-auto text-center md:text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-blue-300">National Recognition</p>
              <h2 className="text-2xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">Reliance Foundation Undergraduate Scholar</h2>
              <p className="text-sm md:text-lg text-blue-100 font-medium leading-relaxed max-w-2xl">
                Recognized as one of the <span className="text-white font-black underline decoration-blue-400 underline-offset-4 tracking-tight">TOP 5,000</span> scholars from a pool of 100,000+ candidates.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* EDUCATION SECTION */}
      <Reveal>
        <section id="education" className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter uppercase flex items-center gap-4 text-center md:text-left">
            <GraduationCap className="text-blue-600" /> Academic Foundation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
             <div className="group bg-white dark:bg-[#0f0f14] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 shadow-sm hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight group-hover:text-blue-600 transition-colors text-center md:text-left">Siksha 'O' Anusandhan University</h3>
                  <p className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-widest text-center md:text-left">B.Tech in CSE</p>
                  <p className="text-slate-500 font-medium italic text-center md:text-left">2022 — 2026</p>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col items-center justify-center text-center">
                   <p className="text-[10px] font-black uppercase opacity-60 mb-2">Academic Performance</p>
                   <p className="text-4xl font-black tracking-tighter text-blue-600">9.05 <span className="text-sm opacity-60 text-slate-900 dark:text-white font-black">CGPA</span></p>
                </div>
             </div>

             <div className="group bg-white dark:bg-[#0f0f14] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 shadow-sm hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <School size={24} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight group-hover:text-blue-600 transition-colors text-center md:text-left">Prabhujee English Medium School</h3>
                  <p className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-widest text-center md:text-left">CBSE 12th Board (Science)</p>
                  <p className="text-slate-500 font-medium italic text-center md:text-left">2020 — 2022</p>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col items-center justify-center text-center">
                   <p className="text-[10px] font-black uppercase opacity-60 mb-2">Board Result</p>
                   <p className="text-4xl font-black tracking-tighter text-blue-600">67 <span className="text-sm opacity-60 text-slate-900 dark:text-white font-black">%</span></p>
                </div>
             </div>
          </div>
        </section>
      </Reveal>

      {/* CONTACT SECTION */}
      <Reveal>
        <section id="contact" className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="group bg-white dark:bg-[#0f0f14] p-8 md:p-12 rounded-[3rem] border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-[0_20px_50px_rgba(37,99,235,0.05)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase mb-2">Let's Connect</h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Have a project in mind or just want to say hi?</p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-3">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">Email Address</p>
                <a 
                  href="mailto:satyabratapandaaims@gmail.com" 
                  className="text-xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white hover:text-blue-600 transition-colors flex items-center gap-3 group/mail break-all"
                >
                  satyabratapandaaims@gmail.com
                  <Send size={20} className="text-blue-600 group-hover/mail:translate-x-1 group-hover/mail:-translate-y-1 transition-transform flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-2">
            <p className="font-black text-3xl md:text-4xl tracking-tighter text-blue-600 uppercase">Satyabrata Panda.</p>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center md:justify-start gap-2">
              <Copyright size={12} className="text-blue-600" /> 2026 Satyabrata Panda. All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="mailto:satyabratapandaaims@gmail.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-blue-600 hover:text-white transition-all border border-slate-200 dark:border-white/5 shadow-sm"><Mail size={22}/></a>
            <a href="https://www.linkedin.com/in/satyabrata-panda-182975264/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-blue-600 hover:text-white transition-all border border-slate-200 dark:border-white/5 shadow-sm"><Linkedin size={22}/></a>
            <a href="https://github.com/SatyabrataPanda42" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-blue-600 hover:text-white transition-all border border-slate-200 dark:border-white/5 shadow-sm"><Github size={22}/></a>
            <a href="https://www.instagram.com/satyabratapanda._?igsh=MTFrbjRzNXE1OWpo" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-blue-600 hover:text-white transition-all border border-slate-200 dark:border-white/5 shadow-sm"><Instagram size={22}/></a>
          </div>
        </div>
      </footer>

      {/* MODAL: PROJECT DETAILS */}
      {selectedProject && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-md animate-in fade-in">
          <div className="bg-white dark:bg-[#15151a] w-full max-w-2xl rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl relative border border-white/10 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 md:top-10 md:right-10 p-2 md:p-3 bg-slate-100 dark:bg-white/10 rounded-full hover:bg-red-500 hover:text-white transition-all active:scale-95 z-20"><X size={20}/></button>
            <div className="p-8 md:p-16">
              <div className="flex items-center gap-2 mb-4 text-blue-600 font-black text-[10px] uppercase tracking-widest">
                <BookOpen size={14}/> Technical Deep Dive
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter uppercase leading-tight">{selectedProject.title}</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {selectedProject.tech.map((t, i) => <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-widest">{t}</span>)}
              </div>
              <div className="space-y-8">
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed font-medium">{selectedProject.longDesc}</p>
                <div className="bg-slate-50 dark:bg-white/5 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/10 font-medium">
                  <h4 className="font-black mb-6 text-[10px] uppercase tracking-widest text-blue-600 flex items-center gap-2"><Zap size={14}/> Performance Metrics</h4>
                  <ul className="space-y-4">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex gap-4 text-sm leading-relaxed italic">
                        <span className="text-blue-600 font-black tracking-tighter">/0{i+1}</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
  
}