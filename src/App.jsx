import React, { useState, useEffect, useRef } from 'react';
import emailjs from "@emailjs/browser";
import "./App.css";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronUp,
  Facebook,
  Calendar,
  Star,
  ArrowRight,
  Eye,
  Sparkles,
  Monitor,
  Server,
  Database,
  Wrench,
  Globe2
} from 'lucide-react';

import mat_05 from './assets/mat_05.jpg';
import profileImg from '/src/assets/profile.jpg';
import systoryimage from '/src/assets/systoryimage.png';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const form = useRef();
  const [notification, setNotification] = useState(null);

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm("service_a0xau9e", "template_cfslw3i", form.current, "CSKHZ4P_WGDa6Rr0d")
      .then(
        () => { showNotification("success", "✓ Message sent successfully!"); form.current.reset(); },
        () => { showNotification("error", "✕ Failed to send. Please try again."); }
      );
  };

  const personalInfo = {
    name: "Kongchan Inthavixay",
    title: "Web Developer",
    location: "Donkoy, Sesadtanan, Vientiane, Laos",
    email: "kongchun1995@gmail.com",
    phone: "+856 020 77487690",
    bio: "I'm a web developer who loves creating and designing websites. I work hard and thrive in team environments.",
    resumeUrl: "/Resume_K.pdf",
    github: "https://github.com/KONGCHAN-999",
    facebook: "https://facebook.com/",
    mail: "https://mail.google.com/",
  };

  const skillCategories = [
    {
      category: "Front-End",
      icon: Monitor,
      color: "from-blue-500 to-cyan-400",
      bg: "bg-blue-50",
      border: "border-blue-200",
      tag: "bg-blue-100 text-blue-700",
      items: ["HTML", "CSS", "Javascript", "React js", "Tailwind", "React_refine", "WordPress", "i18next"]
    },
    {
      category: "Back End",
      icon: Server,
      color: "from-violet-500 to-purple-400",
      bg: "bg-violet-50",
      border: "border-violet-200",
      tag: "bg-violet-100 text-violet-700",
      items: ["Django", "Node js", "Python"]
    },
    {
      category: "Databases",
      icon: Database,
      color: "from-emerald-500 to-teal-400",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      tag: "bg-emerald-100 text-emerald-700",
      items: ["MySQL", "MongoDB", "Firebase", "SQLite 3"]
    },
    {
      category: "Other",
      icon: Wrench,
      color: "from-orange-500 to-amber-400",
      bg: "bg-orange-50",
      border: "border-orange-200",
      tag: "bg-orange-100 text-orange-700",
      items: ["Kintone", "Github", "Figma", "Microsoft Office", "Photoshop", "Illustrator"]
    },
    {
      category: "Languages",
      icon: Globe2,
      color: "from-rose-500 to-pink-400",
      bg: "bg-rose-50",
      border: "border-rose-200",
      tag: "bg-rose-100 text-rose-700",
      items: ["Lao", "Thai", "English"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Kintone Workplace Platform Plugin",
      description: "Developed plug-ins for Kintone, an all-in-one workplace platform. Used JavaScript to create and customize web page functions.",
      image: mat_05,
      tech: ["JavaScript", "Kintone"],
      github: "https://github.com/KONGCHAN-999",
      featured: true
    },
    {
      id: 2,
      title: "Employees management system",
      description: "Created a comprehensive employees management system. Designed and developed the website using React, Node and Mongodb, implementing features for employee data management, attendance tracking, and performance evaluation.",
      tech: ["React", "Node.js", "Mongodb"],
      image: systoryimage,
      github: "https://github.com/KONGCHAN-999",
      featured: true
    },
    {
      id: 3,
      title: "iATER Company Website",
      description: "Built a professional website for iATER using modern web technologies including HTML, CSS, React, Node.js, and MySQL.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MySQL", "JavaScript"],
      github: "https://github.com/KONGCHAN-999",
      featured: false
    },
    {
      id: 4,
      title: "Student management system",
      description: "Developed a student management system to help schools manage student information, attendance, and grades. Used Django for backend development and SQLite3 for database management.",
      tech: ["Django", "Python", "SQLite3"],
      github: "https://github.com/KONGCHAN-999",
      featured: false
    }
  ];

  const experience = [
    {
      company: "Systory",
      period: "2025 – 2026",
      description: "Create and develop a website management system. Develop plug-ins for Kintone, it is all-in-one workplace platform, use JavaScript for create and customize.",
      achievements: ["Developed custom plugins for Kintone platform", "Create and development web page functions."]
    },
    {
      company: "HUMASCOT-LAOS",
      period: "2023 – 2024",
      description: "Started as UX/UI designer and transitioned to Front End development. Created and connected websites with APIs and helped build backend APIs.",
      achievements: ["Designed user interfaces and experiences", "Developed front-end with API integration", "Contributed to backend API development"]
    },
    {
      company: "iATER",
      period: "2020 – 2023",
      description: "Learned programming fundamentals and website development. Built websites for customers and collaborated with fellow developers.",
      achievements: ["Learned programming and web development", "Built multiple customer websites", "Created iATER website using React, Node.js, MySQL", "Developed JBROTHERS COFFEE website with WordPress"]
    },
    {
      company: "Sunny School & Phonsenon School",
      period: "2020 – 2023",
      description: "Taught basic computer skills to students, helping them understand fundamental computer concepts and operations.",
      achievements: ["Taught basic computer skills", "Helped students learn technology fundamentals"]
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-20 right-4 z-50 px-6 py-4 rounded-2xl shadow-2xl text-white text-sm font-medium transition-all duration-500 ${notification.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'}`}>
          {notification.message}
        </div>
      )}

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-black bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent tracking-tight">
              Portfolio
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeSection === item.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2.5 px-4 rounded-xl text-sm font-medium transition-colors ${activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${isVisible.home ? 'animate-fade-in' : 'opacity-0'}`}>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600">
                    Kongchan
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-500 font-medium">{personalInfo.title}</p>
                <p className="text-base text-gray-500 max-w-lg leading-relaxed">{personalInfo.bio}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-blue-200 flex items-center gap-2 font-semibold"
                >
                  View My Work <ArrowRight size={18} />
                </button>
                <a
                  href={personalInfo.resumeUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="px-7 py-3.5 border-2 border-gray-200 text-gray-700 rounded-2xl hover:border-blue-300 hover:text-blue-600 transition-all flex items-center gap-2 font-semibold bg-white/60 backdrop-blur-sm"
                >
                  <Eye size={18} /> My Resume
                </a>
              </div>
              <div className="flex items-center gap-5 pt-2">
                {[
                  { href: personalInfo.github, icon: Github, label: "GitHub" },
                  { href: personalInfo.facebook, icon: Facebook, label: "Facebook" },
                  { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Icon size={20} />
                    <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-violet-500 blur-2xl opacity-30 scale-110"></div>
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-200 animate-spin-slow"></div>
                <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                  <img
                    src={profileImg}
                    alt="Kongchan Inthavixay"
                    className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-0 right-18 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 border border-gray-100">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">My Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-6 rounded-3xl border ${cat.border} ${cat.bg} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.color} rounded-t-3xl`}></div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.color} shadow-lg`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{cat.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 ${cat.tag} text-xs font-semibold rounded-full transition-transform hover:scale-105 cursor-default`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-1">
                <div className="relative overflow-hidden h-52">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white rounded-xl text-gray-900 hover:bg-blue-50 transition-colors shadow-lg">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <div key={project.id} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <div className="flex gap-2 ml-4 flex-shrink-0">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Github size={17} /></a>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">Work Experience</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-violet-400 to-transparent hidden md:block"></div>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="md:pl-24 relative group">
                  <div className="absolute left-8 top-10 w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 hidden md:block group-hover:scale-125 transition-transform"></div>
                  <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{job.position}</h3>
                        <p className="text-blue-600 font-semibold mt-0.5">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium flex-shrink-0 self-start">
                        <Calendar size={14} />
                        {job.period}
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{job.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {job.achievements.map((a, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                          {a}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">Contact</h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Get In Touch</h3>
                <p className="text-gray-500 leading-relaxed text-sm">I'm always open to new opportunities and exciting projects. Feel free to reach out!</p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Phone, label: "Phone", value: personalInfo.phone, href: null },
                  { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="p-2.5 bg-blue-50 rounded-xl">
                      <Icon size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">{label}</div>
                      {href
                        ? <a href={href} className="text-sm text-gray-700 hover:text-blue-600 transition-colors font-medium">{value}</a>
                        : <div className="text-sm text-gray-700 font-medium">{value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                {[
                  { href: personalInfo.github, icon: Github },
                  { href: personalInfo.facebook, icon: Facebook },
                  { href: `mailto:${personalInfo.email}`, icon: Mail },
                ].map(({ href, icon: Icon }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-gray-500 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Name</label>
                    <input type="text" name="user_name" required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm bg-gray-50 focus:bg-white"
                      placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Email</label>
                    <input type="email" name="user_email" required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm bg-gray-50 focus:bg-white"
                      placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Subject</label>
                  <input type="text" name="subject" required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm bg-gray-50 focus:bg-white"
                    placeholder="Project Discussion" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Message</label>
                  <textarea rows="5" name="message" required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-3.5 px-6 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 font-semibold">
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-1">Portfolio</div>
              <div className="text-gray-500 text-sm">{personalInfo.name} · {personalInfo.title}</div>
            </div>
            <div className="text-gray-600 text-sm">© 2026 · Built with React & ❤️</div>
            <div className="flex gap-3">
              {[
                { href: personalInfo.github, icon: Github },
                { href: personalInfo.mail, icon: Mail },
                { href: `mailto:${personalInfo.email}`, icon: Mail },
              ].map(({ href, icon: Icon }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="p-2.5 bg-gray-800 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-violet-600 text-white p-3.5 rounded-2xl shadow-lg hover:opacity-90 transition-all z-40 animate-fade-in"
        >
          <ChevronUp size={20} />
        </button>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        * { font-family: 'Inter', sans-serif; }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.7s ease-out forwards; }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 8s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }

        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f8fafc; }
        ::-webkit-scrollbar-thumb { background: #c7d2fe; border-radius: 8px; }
        ::-webkit-scrollbar-thumb:hover { background: #a5b4fc; }
      `}</style>
    </div>
  );
};

export default App;