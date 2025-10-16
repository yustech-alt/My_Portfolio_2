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

  // Sample project data - you can replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Modern React-based shopping platform with advanced features",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "Secure mobile banking solution with biometric authentication",
      image: "/api/placeholder/600/400",
      tags: ["React Native", "Firebase", "Security"],
    },
    {
      id: 3,
      title: "AI Analytics Dashboard",
      description:
        "Real-time analytics dashboard with machine learning insights",
      image: "/api/placeholder/600/400",
      tags: ["Python", "TensorFlow", "D3.js"],
    },
    {
      id: 4,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management platform for hospitals",
      image: "/api/placeholder/600/400",
      tags: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      id: 5,
      title: "Smart Home IoT Platform",
      description: "IoT platform for smart home automation and monitoring",
      image: "/api/placeholder/600/400",
      tags: ["IoT", "AWS", "React"],
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
        <div className="hidden md:flex  space-x-8">
          <a
            href="#work"
            className={combineClasses(
              themeClasses.text.navLink(isDarkMode),
              themeClasses.transition
            )}
          >
            Work
          </a>
          <a
            href="#projects"
            className={combineClasses(
              themeClasses.text.navLink(isDarkMode),
              themeClasses.transition
            )}
          >
            Projects
          </a>
          <a
            href="#about"
            className={combineClasses(
              themeClasses.text.navLink(isDarkMode),
              themeClasses.transition
            )}
          >
            About
          </a>
          <a
            href="#contact"
            className={combineClasses(
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
          <button
            className={combineClasses(
              "px-4 py-2",
              themeClasses.text.navLink(isDarkMode),
              themeClasses.transition
            )}
          >
            Resume
          </button>
          <button
            className={combineClasses(
              "px-6 py-2 rounded-md",
              themeClasses.button.primary(isDarkMode),
              themeClasses.transitionAll
            )}
          >
            Hire
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

        {/* Footer */}
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
