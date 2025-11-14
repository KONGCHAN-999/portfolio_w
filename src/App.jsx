import React, { useState, useEffect, useRef } from 'react';
import emailjs from "@emailjs/browser";
import "./App.css";
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink,
  ChevronDown,
  Code,
  Palette,
  Zap,
  Users,
  Award,
  BookOpen,
  Calendar,
  Star,
  ArrowRight,
  Play
} from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const form = useRef();
  const [notification, setNotification] = useState(null);

  // Show notification function
  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Add validation to ensure form has data
    if (!form.current) {
      alert("Form reference is not available");
      return;
    }

    emailjs
      .sendForm(
        "service_a0xau9e", 
        "template_cfslw3i", 
        form.current, 
        "CSKHZ4P_WGDa6Rr0d"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          showNotification("success", "Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          showNotification("error", "Failed to send message. Please try again.");
        }
      );
  };

  // Personal data
  const personalInfo = {
    name: "Kongchan Inthavixay",
    title: "Front End Developer",
    location: "Donkoy, Sesadtanan, Vientiane, Laos",
    email: "kongchun1995@gmail.com",
    phone: "+856 020 77487690",
    bio: "I'm junior developer, I like to create website and design create website, able to work hard and as a team. Currently studying Computer Science bachelor's degree at National University of Laos."
  };

  const skills = [
    { name: "HTML & CSS", level: 90, icon: Code },
    { name: "JavaScript & React", level: 85, icon: Zap },
    { name: "Tailwind & UI Design", level: 85, icon: Palette },
    { name: "Team Collaboration", level: 80, icon: Users }
  ];

  const projects = [
    {
      id: 1,
      title: "Kintone Workplace Platform Plugin",
      description: "Developed plug-ins for Kintone, an all-in-one workplace platform. Used JavaScript to create and customize web page functions in Kintone.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["JavaScript", "Kintone", "Web APIs"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "JBROTHERS COFFEE Website",
      description: "Created a complete website for JBROTHERS COFFEE using WordPress, featuring custom design and e-commerce functionality.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      tech: ["WordPress", "CSS", "PHP"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "iATER Company Website",
      description: "Built a professional website for iATER using modern web technologies including HTML, CSS, React, Node.js, and MySQL database.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MySQL", "CSS"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 4,
      title: "Customer Website Solutions",
      description: "Developed multiple websites for customers during iATER period, collaborating with fellow developers as a team.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["HTML", "CSS", "JavaScript", "Team Collaboration"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const experience = [
    {
      company: "Systory",
      position: "Front End Developer",
      period: "2025 - 2026",
      description: "Develop plug-ins for Kintone, an all-in-one workplace platform. Use JavaScript to create and customize web page functions in Kintone.",
      achievements: [
        "Developed custom plugins for Kintone platform",
        "Created and customized web page functions",
        "Worked with JavaScript and Kintone APIs"
      ]
    },
    {
      company: "HUMASCOT-LAOS",
      position: "UX/UI & Front End Developer",
      period: "2023 - 2024",
      description: "Started as UX/UI designer for web design and transitioned to Front End development. Created and connected websites with APIs and helped build backend APIs.",
      achievements: [
        "Designed user interfaces and experiences",
        "Developed front-end with API integration",
        "Contributed to backend API development",
        "Collaborated with development team"
      ]
    },
    {
      company: "iATER",
      position: "Junior Developer",
      period: "2020 - 2023",
      description: "Learned programming fundamentals and website development. Built websites for customers and collaborated with fellow developers as a team.",
      achievements: [
        "Learned programming and web development",
        "Built multiple customer websites",
        "Created iATER website using HTML, CSS, React, Node.js, MySQL",
        "Developed JBROTHERS COFFEE website with WordPress",
        "Worked collaboratively in team environment"
      ]
    },
    {
      company: "Sunny School & Phonsenon School",
      position: "Junior Teacher",
      period: "2020 - 2023",
      description: "Taught basic computer skills to students, helping them understand fundamental computer concepts and operations.",
      achievements: [
        "Taught basic computer skills",
        "Helped students learn technology fundamentals",
        "Developed teaching materials and curriculum"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Team Lead",
      position: "Senior Developer",
      company: "HUMASCOT-LAOS",
      text: "Kongchan is a dedicated developer who quickly transitioned from UX/UI design to full-stack development. His ability to work with both frontend and backend technologies is impressive.",
      rating: 5
    },
    {
      name: "Project Manager",
      position: "Manager",
      company: "iATER",
      text: "Great team player who is always eager to learn. Kongchan delivered quality websites for our customers and collaborated effectively with the development team.",
      rating: 5
    }
  ];

  const certifications = [
    { name: "Computer Science Diploma", year: "2022", issuer: "Lao-Korean College" },
    { name: "Computer Science Bachelor's (In Progress)", year: "2022-2024", issuer: "National University of Laos" },
    { name: "Web Development Certification", year: "2020", issuer: "iATER Training" }
  ];

  // Scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer for active section
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
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">
              KI
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 text-gray-600"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible.home ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {personalInfo.name}
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600">
                  {personalInfo.title}
                </p>
                <p className="text-lg text-gray-600 max-w-2xl">
                  {personalInfo.bio}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  View My Work <ArrowRight size={20} />
                </button>
                <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors flex items-center gap-2">
                  <Download size={20} /> Download CV
                </button>
              </div>

              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="relative w-full h-full object-cover rounded-full border-8 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Get to know me better</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400">
                  I'm a junior developer passionate about creating websites and designing user experiences. 
                  I enjoy working hard and collaborating as part of a team to deliver quality web solutions. 
                  Currently pursuing my Computer Science bachelor's degree at National University of Laos 
                  while gaining practical experience in the field.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  My journey in web development started at iATER where I learned programming fundamentals and 
                  built websites for various customers. I've since grown my skills in front-end technologies 
                  including HTML, CSS, JavaScript, React, and Tailwind CSS. I'm passionate about continuous 
                  learning and improving my craft to create better web experiences.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">4</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin size={18} className="mr-3" />
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Mail size={18} className="mr-3" />
                    {personalInfo.email}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Phone size={18} className="mr-3" />
                    {personalInfo.phone}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Certifications</h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                      <Award size={18} className="mr-3 text-blue-600 dark:text-blue-400" />
                      <div>
                        <div className="font-medium">{cert.name}</div>
                        <div className="text-sm">{cert.issuer} - {cert.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Technologies I work with</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <Icon size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 block">{skill.level}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Some of my recent work</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a href={project.github} className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                        <Github size={20} />
                      </a>
                      <a href={project.live} className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => !p.featured).map((project) => (
              <div key={project.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a href={project.github} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">My professional journey</p>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.position}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar size={18} className="mr-2" />
                    {job.period}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
                <div className="space-y-2">
                  {job.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What People Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Testimonials from colleagues and clients</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position} at {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Ready to start your next project?</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I'm always interested in hearing about new opportunities and exciting projects. 
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail size={24} className="text-blue-600 dark:text-blue-400 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Email</div>
                      <div className="text-gray-600 dark:text-gray-400">{personalInfo.email}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone size={24} className="text-blue-600 dark:text-blue-400 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Phone</div>
                      <div className="text-gray-600 dark:text-gray-400">{personalInfo.phone}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin size={24} className="text-blue-600 dark:text-blue-400 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Location</div>
                      <div className="text-gray-600 dark:text-gray-400">{personalInfo.location}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Github size={28} />
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Linkedin size={28} />
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Mail size={28} />
                  </a>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name='user_name'
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name='user_email'
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name='subject'
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="Project Discussion"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows="5"
                      name='message'
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold mb-2">Kongchan Inthavixay</div>
              <div className="text-gray-400">Front End Developer</div>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kongchan Inthavixay. All rights reserved. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
      >
        <ChevronDown size={24} className="rotate-180" />
      </button>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .prose p {
          margin-bottom: 1rem;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .dark ::-webkit-scrollbar-track {
          background: #374151;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
        
        .dark ::-webkit-scrollbar-thumb {
          background: #6b7280;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
        
        .dark ::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </div>
  );
};

export default App;