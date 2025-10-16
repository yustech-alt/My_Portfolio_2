import { useState, useEffect } from "react";
import { useTheme } from "./contexts/ThemeContext.jsx";
import { themeClasses, combineClasses } from "./utils/themeClasses.js";
import About from "./components/About.jsx";
import { ServicesSection } from "./components/ServicesSection.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { SkillsSection } from "./components/SkillsSection.jsx";
import { TestimonialsSection } from "./components/TestimonialsSection.jsx";
import { CallToActionSection } from "./components/CallToActionSection.jsx";
import { ProjectShowcase } from "./components/ProjectShowcase.jsx";
import { ContactForm } from "./components/ContactForm.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isDarkMode, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    skills: false,
    about: false,
    testimonials: false,
    cta: false,
  });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("data-section");
          if (sectionId) {
            setIsVisible((prev) => ({ ...prev, [sectionId]: true }));
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    // Hero section appears immediately
    setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, hero: true }));
    }, 100);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Professional project portfolio
  const projects = [
    {
      id: 1,
      title: "Enterprise SaaS Dashboard",
      description:
        "Full-stack analytics platform serving 10K+ users with real-time data visualization and 99.9% uptime",
      image: "/images/projects/saas-dashboard.jpg",
      tags: ["React", "Node.js", "PostgreSQL", "AWS"],
      metrics: "10K+ users, 99.9% uptime"
    },
    {
      id: 2,
      title: "E-commerce Microservices",
      description:
        "Scalable microservices architecture handling 50K+ daily transactions with automated CI/CD pipeline",
      image: "/images/projects/ecommerce-platform.jpg",
      tags: ["Node.js", "Docker", "Kubernetes", "MongoDB"],
      metrics: "50K+ daily transactions"
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description:
        "WebSocket-based messaging platform with end-to-end encryption supporting 5K+ concurrent users",
      image: "/images/projects/chat-app.jpg",
      tags: ["React", "Socket.io", "Redis", "Express"],
      metrics: "5K+ concurrent users"
    },
    {
      id: 4,
      title: "AI-Powered Content CMS",
      description: "Headless CMS with AI content generation, reducing content creation time by 60%",
      image: "/images/projects/ai-cms.jpg",
      tags: ["Next.js", "Python", "OpenAI", "Strapi"],
      metrics: "60% time reduction"
    },
    {
      id: 5,
      title: "Financial Trading Platform",
      description: "High-frequency trading dashboard with sub-100ms latency and advanced risk management",
      image: "/images/projects/trading-platform.jpg",
      tags: ["TypeScript", "WebSockets", "PostgreSQL", "AWS"],
      metrics: "Sub-100ms latency"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className={combineClasses(
        "min-h-screen",
        themeClasses.bg.primary(isDarkMode),
        themeClasses.transition
      )}
    >
      {/* Navigation */}
      <nav
        className={combineClasses(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b backdrop-blur-sm",
          themeClasses.bg.primary(isDarkMode),
          themeClasses.border.primary(isDarkMode),
          themeClasses.transition
        )}
      >
        <div
          className={combineClasses(
            "text-2xl font-bold italic",
            themeClasses.text.primary(isDarkMode),
            themeClasses.transition
          )}
        >
          Yus<span className="text-gray-400">Labi</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('[data-section="hero"]')?.scrollIntoView({behavior: 'smooth'});
            }}
            className={combineClasses(
              "hover:text-blue-500 font-medium cursor-pointer",
              themeClasses.text.navLink(isDarkMode),
              themeClasses.transition
            )}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('[data-section="about"]')?.scrollIntoView({behavior: 'smooth'});
            }}
            className={combineClasses(
              "hover:text-blue-500 font-medium cursor-pointer",
              themeClasses.text.navLink(isDarkMode),
              themeClasses.transition
            )}
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('[data-section="services"]')?.scrollIntoView({behavior: 'smooth'});
            }}
            className={combineClasses(
              "hover:text-blue-500 font-medium cursor-pointer",
              themeClasses.text.navLink(isDarkMode),
              themeClasses.transition
            )}
          >
            Services
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('[data-section="skills"]')?.scrollIntoView({behavior: 'smooth'});
            }}
            className={combineClasses(
              "hover:text-blue-500 font-medium cursor-pointer",
              themeClasses.text.navLink(isDarkMode),
              themeClasses.transition
            )}
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'});
            }}
            className={combineClasses(
              "hover:text-blue-500 font-medium cursor-pointer",
              themeClasses.text.navLink(isDarkMode),
              themeClasses.transition
            )}
          >
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={combineClasses(
              "p-2 rounded-lg",
              themeClasses.button.theme(isDarkMode),
              themeClasses.transitionAll
            )}
            aria-label="Toggle theme"
          >
            {isDarkMode ?
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            : <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            }
          </button>
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={combineClasses(
              "group px-4 py-2 font-medium rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2",
              isDarkMode 
                ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800 focus:ring-blue-500/50" 
                : "text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:ring-blue-500/50"
            )}
          >
            <span className="flex items-center space-x-1">
              <span>Resume</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
          </a>

          {/* Hire Me Button */}
          <button
            className="group relative px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            <span className="relative z-10 flex items-center space-x-1">
              <span>Hire Me</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </span>
          </button>
        </div>
      </nav>

      {/* Main Content with top padding for fixed navbar */}
      <div className="pt-20">
        <HeroSection isDarkMode={isDarkMode} isVisible={isVisible} />

      {/* Services Section */}
      <ServicesSection isDarkMode={isDarkMode} isVisible={isVisible} />

      {/* Skills Section */}
      <SkillsSection isDarkMode={isDarkMode} isVisible={isVisible} />

      {/* About Section */}
      <About isVisible={isVisible.about} />

      {/* Testimonials Section */}
      <TestimonialsSection isDarkMode={isDarkMode} isVisible={isVisible} />

      {/* Call to Action Section */}
      <CallToActionSection isDarkMode={isDarkMode} isVisible={isVisible} />

      {/* Project Showcase Section */}
      <ProjectShowcase 
        isDarkMode={isDarkMode} 
        projects={projects} 
        currentSlide={currentSlide} 
        nextSlide={nextSlide} 
        prevSlide={prevSlide} 
        goToSlide={goToSlide} 
      />

      {/* Contact Form */}
      <ContactForm isDarkMode={isDarkMode} />

        {/* Footer */}
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
