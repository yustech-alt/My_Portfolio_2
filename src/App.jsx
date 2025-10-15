import { useState, useEffect } from 'react';
import { useTheme } from './contexts/ThemeContext.jsx';
import { themeClasses, combineClasses } from './utils/themeClasses.js';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isDarkMode, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    skills: false,
    team: false,
    testimonials: false,
    cta: false
  });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setIsVisible(prev => ({ ...prev, [sectionId]: true }));
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    // Hero section appears immediately
    setTimeout(() => {
      setIsVisible(prev => ({ ...prev, hero: true }));
    }, 100);

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);
  
  // Sample project data - you can replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern React-based shopping platform with advanced features",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure mobile banking solution with biometric authentication",
      image: "/api/placeholder/600/400",
      tags: ["React Native", "Firebase", "Security"]
    },
    {
      id: 3,
      title: "AI Analytics Dashboard",
      description: "Real-time analytics dashboard with machine learning insights",
      image: "/api/placeholder/600/400",
      tags: ["Python", "TensorFlow", "D3.js"]
    },
    {
      id: 4,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management platform for hospitals",
      image: "/api/placeholder/600/400",
      tags: ["Vue.js", "Laravel", "MySQL"]
    },
    {
      id: 5,
      title: "Smart Home IoT Platform",
      description: "IoT platform for smart home automation and monitoring",
      image: "/api/placeholder/600/400",
      tags: ["IoT", "AWS", "React"]
    }
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
    <div className={combineClasses(
      'min-h-screen',
      themeClasses.bg.primary(isDarkMode),
      themeClasses.transition
    )}>
      {/* Navigation */}
      <nav className={combineClasses(
        'flex items-center justify-between px-6 py-4 border-b',
        themeClasses.bg.primary(isDarkMode),
        themeClasses.border.primary(isDarkMode),
        themeClasses.transition
      )}>
        <div className={combineClasses(
          'text-2xl font-bold italic',
          themeClasses.text.primary(isDarkMode),
          themeClasses.transition
        )}>
          Yus<span className='text-gray-400'>Labi</span>
        </div>
        <div className="hidden md:flex  space-x-8">
          <a href="#work" className={combineClasses(
            themeClasses.text.navLink(isDarkMode),
            themeClasses.transition
          )}>Work</a>
          <a href="#projects" className={combineClasses(
            themeClasses.text.navLink(isDarkMode),
            themeClasses.transition
          )}>Projects</a>
          <a href="#about" className={combineClasses(
            themeClasses.text.navLink(isDarkMode),
            themeClasses.transition
          )}>About</a>
          <a href="#contact" className={combineClasses(
            themeClasses.text.navLink(isDarkMode),
            themeClasses.transition
          )}>Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={combineClasses(
              'p-2 rounded-lg',
              themeClasses.button.theme(isDarkMode),
              themeClasses.transitionAll
            )}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button className={combineClasses(
            'px-4 py-2',
            themeClasses.text.navLink(isDarkMode),
            themeClasses.transition
          )}>Resume</button>
          <button className={combineClasses(
            'px-6 py-2 rounded-md',
            themeClasses.button.primary(isDarkMode),
            themeClasses.transitionAll
          )}>Hire</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center min-h-[80vh] px-6" data-section="hero">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ease-out ${
            isVisible.hero 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <h1 className={combineClasses(
              'text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up',
              themeClasses.text.primary(isDarkMode),
              themeClasses.transition
            )}>
              Building digital solutions that transform businesses
            </h1>
            <p className={combineClasses(
              'text-lg mb-8 max-w-lg transition-all duration-1000 delay-200 ease-out',
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
              themeClasses.text.secondary(isDarkMode)
            )}>
              Software engineer and product manager with a passion for creating innovative technology. 
              Experienced in developing scalable solutions and driving product strategy.
            </p>
            <div className={`flex space-x-4 transition-all duration-1000 delay-400 ease-out ${
              isVisible.hero 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}>
              <button className={combineClasses(
                'px-6 py-3 rounded-md transform hover:scale-105',
                themeClasses.button.primary(isDarkMode),
                'transition-all duration-200'
              )}>
                Explore
              </button>
              <button className={combineClasses(
                'px-6 py-3 border rounded-md transform hover:scale-105',
                themeClasses.button.secondary(isDarkMode),
                'transition-all duration-200'
              )}>
                Contact
              </button>
            </div>
          </div>
          <div className={`flex justify-center transition-all duration-1000 delay-300 ease-out ${
            isVisible.hero 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-10 scale-95'
          }`}>
            <div className={combineClasses(
              'w-96 h-96 rounded-lg flex items-center justify-center hover:shadow-2xl transition-all duration-300 group',
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            )}>
              <div className={combineClasses(
                'w-24 h-24 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300',
                isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
              )}>
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 px-6 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`} data-section="services">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {/* Service 1 - Engineering */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
              isVisible.services 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}>
              <div>
                <div className="text-sm text-orange-600 font-medium mb-2">01 Software</div>
                <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Custom software solutions for modern businesses
                </h2>
                <p className={`mb-6 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Developing robust and scalable applications that solve complex business challenges. 
                  Leveraging cutting-edge technologies to create innovative digital products.
                </p>
                <div className="flex space-x-6">
                  <a href="#" className={`underline transition-colors duration-300 ${
                    isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'
                  }`}>View services</a>
                  <a href="#" className={`underline transition-colors duration-300 ${
                    isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'
                  }`}>Discuss project</a>
                </div>
              </div>
              <div className={`flex justify-center transition-all duration-1000 delay-200 ease-out ${
                isVisible.services 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-10'
              }`}>
                <div className={combineClasses(
                  'w-80 h-64 rounded-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group',
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                )}>
                  <div className={combineClasses(
                    'w-16 h-16 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300',
                    isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                  )}>
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 - Product Management */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ease-out ${
              isVisible.services 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}>
              <div className="order-2 lg:order-1 flex justify-center">
                <div className={combineClasses(
                  'w-80 h-64 rounded-lg flex items-center justify-center',
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                )}>
                  <div className={combineClasses(
                    'w-16 h-16 rounded flex items-center justify-center',
                    isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                  )}>
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="text-sm text-orange-600 font-medium mb-2">02 Product management</div>
                <h2 className={combineClasses(
                  'text-4xl font-bold mb-4 transition-colors duration-300',
                  isDarkMode ? 'text-white' : 'text-gray-900'
                )}>
                  Strategic product development and innovation
                </h2>
                <p className={combineClasses(
                  'mb-6 transition-colors duration-300',
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                )}>
                  Transforming ideas into market-ready products through comprehensive research, 
                  user-centric design, and strategic planning.
                </p>
                <div className="flex space-x-6">
                  <a href="#" className={combineClasses(
                    'underline transition-colors duration-300',
                    isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'
                  )}>Explore approach</a>
                  <a href="#" className={combineClasses(
                    'underline transition-colors duration-300',
                    isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'
                  )}>Book consultation</a>
                </div>
              </div>
            </div>

            {/* Service 3 - Technical Consulting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-sm text-orange-600 font-medium mb-2">03 Technical consulting</div>
                <h2 className={combineClasses(
                  'text-4xl font-bold mb-4 transition-colors duration-300',
                  isDarkMode ? 'text-white' : 'text-gray-900'
                )}>
                  Expert guidance for technology transformation
                </h2>
                <p className={combineClasses(
                  'mb-6 transition-colors duration-300',
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                )}>
                  Providing strategic insights and technical recommendations to help businesses 
                  leverage technology for competitive advantage.
                </p>
                <div className="flex space-x-6">
                  <a href="#" className={combineClasses(
                    'underline transition-colors duration-300',
                    isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'
                  )}>Get started</a>
                  <a href="#" className={combineClasses(
                    'underline transition-colors duration-300',
                    isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'
                  )}>Start project</a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className={combineClasses(
                  'w-80 h-64 rounded-lg flex items-center justify-center',
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                )}>
                  <div className={combineClasses(
                    'w-16 h-16 rounded flex items-center justify-center',
                    isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                  )}>
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={combineClasses(
        'py-20 px-6',
        themeClasses.bg.primary(isDarkMode),
        themeClasses.transition
      )} data-section="skills">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 transition-all duration-1000 ease-out ${
            isVisible.skills 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <div className={combineClasses(
              'text-sm font-medium mb-2 transition-colors duration-300',
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            )}>Skills</div>
            <h2 className={combineClasses(
              'text-4xl font-bold mb-4 transition-colors duration-300',
              isDarkMode ? 'text-white' : 'text-gray-900'
            )}>
              Technical expertise and professional capabilities
            </h2>
            <p className={combineClasses(
              'max-w-2xl transition-colors duration-300',
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            )}>
              Combining technical skills with strategic product management to deliver exceptional digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`text-center transition-all duration-1000 delay-100 ease-out ${
              isVisible.skills 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}>
              <div className={combineClasses(
                'w-full h-48 rounded-lg mb-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 group',
                isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
              )}>
                <div className={combineClasses(
                  'w-16 h-16 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300',
                  isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                )}>
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className={combineClasses(
                'text-xl font-bold mb-3 transition-colors duration-300',
                isDarkMode ? 'text-white' : 'text-gray-900'
              )}>Software development</h3>
              <p className={combineClasses(
                'transition-colors duration-300',
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              )}>
                Proficient in multiple programming languages and modern development frameworks.
              </p>
            </div>

            <div className={`text-center transition-all duration-1000 delay-200 ease-out ${
              isVisible.skills 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}>
              <div className={combineClasses(
                'w-full h-48 rounded-lg mb-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 group',
                isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
              )}>
                <div className={combineClasses(
                  'w-16 h-16 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300',
                  isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                )}>
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className={combineClasses(
                'text-xl font-bold mb-3 transition-colors duration-300',
                isDarkMode ? 'text-white' : 'text-gray-900'
              )}>Product strategy</h3>
              <p className={combineClasses(
                'transition-colors duration-300',
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              )}>
                Creating roadmaps that align technical capabilities with business objectives.
              </p>
            </div>

            <div className={`text-center transition-all duration-1000 delay-300 ease-out ${
              isVisible.skills 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}>
              <div className={combineClasses(
                'w-full h-48 rounded-lg mb-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 group',
                isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
              )}>
                <div className={combineClasses(
                  'w-16 h-16 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300',
                  isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                )}>
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className={combineClasses(
                'text-xl font-bold mb-3 transition-colors duration-300',
                isDarkMode ? 'text-white' : 'text-gray-900'
              )}>Agile methodologies</h3>
              <p className={combineClasses(
                'transition-colors duration-300',
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              )}>
                Implementing efficient workflows to maximize team productivity and project success.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12 space-x-4">
            <button className={combineClasses(
              'px-6 py-3 border rounded-md transition-colors duration-300',
              isDarkMode 
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            )}>
              Learn more
            </button>
            <button className={combineClasses(
              'px-6 py-3 rounded-md transition-colors duration-300',
              isDarkMode 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-900 text-white hover:bg-gray-800'
            )}>
              Contact
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={combineClasses(
        'py-20 px-6',
        themeClasses.bg.secondary(isDarkMode),
        themeClasses.transition
      )} data-section="team">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 transition-all duration-1000 ease-out ${
            isVisible.team 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <div className={combineClasses(
              'text-sm font-medium mb-2 transition-colors duration-300',
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            )}>About</div>
            <h2 className={combineClasses(
              'text-4xl font-bold mb-4 transition-colors duration-300',
              isDarkMode ? 'text-white' : 'text-gray-900'
            )}>
              Meet the professional
            </h2>
            <p className={combineClasses(
              'max-w-2xl transition-colors duration-300',
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            )}>
              Dedicated technology professional with a passion for solving complex challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Profile 1 - Main */}
            <div className="bg-white rounded-lg p-6 border-2 border-blue-500">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">John Smith</h3>
              <p className="text-sm text-gray-600 mb-3">Senior software engineer</p>
              <p className="text-sm text-gray-600 mb-4">
                Experienced developer with a track record of delivering innovative software solutions across multiple industries.
              </p>
              <div className="flex space-x-2">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="bg-white rounded-lg p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Jane Doe</h3>
              <p className="text-sm text-gray-600 mb-3">Product management lead</p>
              <p className="text-sm text-gray-600 mb-4">
                Strategic product leader focused on transforming ideas into market-ready digital products.
              </p>
              <div className="flex space-x-2">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Profile 3 */}
            <div className="bg-white rounded-lg p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Michael Chen</h3>
              <p className="text-sm text-gray-600 mb-3">Full stack developer</p>
              <p className="text-sm text-gray-600 mb-4">
                Expert in creating modern web applications using modern JavaScript frameworks.
              </p>
              <div className="flex space-x-2">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Profile 4 */}
            <div className="bg-white rounded-lg p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Sarah Johnson</h3>
              <p className="text-sm text-gray-600 mb-3">UX designer</p>
              <p className="text-sm text-gray-600 mb-4">
                Design professional dedicated to creating intuitive and user-friendly digital interfaces.
              </p>
              <div className="flex space-x-2">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Additional profiles */}
            <div className="bg-white rounded-lg p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">David Rodriguez</h3>
              <p className="text-sm text-gray-600 mb-3">DevOps engineer</p>
              <p className="text-sm text-gray-600 mb-4">
                Specialist in implementing efficient and scalable cloud infrastructure solutions.
              </p>
              <div className="flex space-x-2">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Emily Wong</h3>
              <p className="text-sm text-gray-600 mb-3">Data scientist</p>
              <p className="text-sm text-gray-600 mb-4">
                Advanced analytics expert transforming complex data into actionable business insights.
              </p>
              <div className="flex space-x-2">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Alex Thompson</h3>
              <p className="text-sm text-gray-600 mb-3">Technical architect</p>
              <p className="text-sm text-gray-600 mb-4">
                Strategic technology leader designing comprehensive enterprise software solutions.
              </p>
              <div className="flex space-x-2">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Rachel Kim</h3>
              <p className="text-sm text-gray-600 mb-3">AI research engineer</p>
              <p className="text-sm text-gray-600 mb-4">
                Innovative researcher developing cutting-edge machine learning applications.
              </p>
              <div className="flex space-x-2">
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className={combineClasses(
              'text-2xl font-bold mb-4 transition-colors duration-300',
              themeClasses.text.primary(isDarkMode)
            )}>Join our team</h3>
            <p className={combineClasses(
              'mb-6 max-w-md mx-auto transition-colors duration-300',
              themeClasses.text.secondary(isDarkMode)
            )}>
              We are always looking for talented professionals to expand our capabilities
            </p>
            <button className={combineClasses(
              'px-6 py-3 border rounded-md',
              themeClasses.button.secondary(isDarkMode),
              themeClasses.transition
            )}>
              View positions
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={combineClasses(
        'py-20 px-6',
        themeClasses.bg.primary(isDarkMode),
        themeClasses.transition
      )} data-section="testimonials">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-12 transition-all duration-1000 ease-out ${
            isVisible.testimonials 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <h2 className={combineClasses(
              'text-4xl font-bold mb-4 transition-colors duration-300',
              isDarkMode ? 'text-white' : 'text-gray-900'
            )}>Client voices</h2>
            <p className={combineClasses(
              'transition-colors duration-300',
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            )}>
              Hear what our clients say about our work and collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className={combineClasses(
              'p-6 rounded-lg',
              themeClasses.bg.card(isDarkMode),
              themeClasses.transition
            )}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={combineClasses(
                    'w-5 h-5',
                    isDarkMode ? 'text-yellow-400' : 'text-gray-900'
                  )} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className={combineClasses(
                'mb-6 transition-colors duration-300',
                themeClasses.text.primary(isDarkMode)
              )}>
                John transformed our entire digital strategy with his innovative approach and technical expertise.
              </p>
              <div className="flex items-center">
                <div className={combineClasses(
                  'w-12 h-12 rounded-full mr-4 flex items-center justify-center',
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                )}>
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className={combineClasses(
                    'font-medium transition-colors duration-300',
                    themeClasses.text.primary(isDarkMode)
                  )}>Mark Stevens</div>
                  <div className={combineClasses(
                    'text-sm transition-colors duration-300',
                    themeClasses.text.secondary(isDarkMode)
                  )}>CEO, TechnoCore</div>
                  <div className="flex items-center mt-1">
                    <svg className={combineClasses(
                      'w-4 h-4 mr-1',
                      themeClasses.text.secondary(isDarkMode)
                    )} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    </svg>
                    <span className={combineClasses(
                      'text-sm transition-colors duration-300',
                      themeClasses.text.secondary(isDarkMode)
                    )}>Webflow</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className={combineClasses(
              'p-6 rounded-lg',
              themeClasses.bg.card(isDarkMode),
              themeClasses.transition
            )}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={combineClasses(
                    'w-5 h-5',
                    isDarkMode ? 'text-yellow-400' : 'text-gray-900'
                  )} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className={combineClasses(
                'mb-6 transition-colors duration-300',
                themeClasses.text.primary(isDarkMode)
              )}>
                The product management skills demonstrated were exceptional and directly contributed to our startup's success.
              </p>
              <div className="flex items-center">
                <div className={combineClasses(
                  'w-12 h-12 rounded-full mr-4 flex items-center justify-center',
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                )}>
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className={combineClasses(
                    'font-medium transition-colors duration-300',
                    themeClasses.text.primary(isDarkMode)
                  )}>Emily Rodriguez</div>
                  <div className={combineClasses(
                    'text-sm transition-colors duration-300',
                    themeClasses.text.secondary(isDarkMode)
                  )}>Founder, GreenTech</div>
                  <div className="flex items-center mt-1">
                    <svg className={combineClasses(
                      'w-4 h-4 mr-1',
                      themeClasses.text.secondary(isDarkMode)
                    )} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    </svg>
                    <span className={combineClasses(
                      'text-sm transition-colors duration-300',
                      themeClasses.text.secondary(isDarkMode)
                    )}>Webflow</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className={combineClasses(
              'p-6 rounded-lg',
              themeClasses.bg.card(isDarkMode),
              themeClasses.transition
            )}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={combineClasses(
                    'w-5 h-5',
                    isDarkMode ? 'text-yellow-400' : 'text-gray-900'
                  )} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className={combineClasses(
                'mb-6 transition-colors duration-300',
                themeClasses.text.primary(isDarkMode)
              )}>
                A true professional who understands both technical challenges and business objectives.
              </p>
              <div className="flex items-center">
                <div className={combineClasses(
                  'w-12 h-12 rounded-full mr-4 flex items-center justify-center',
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                )}>
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className={combineClasses(
                    'font-medium transition-colors duration-300',
                    themeClasses.text.primary(isDarkMode)
                  )}>David Chen</div>
                  <div className={combineClasses(
                    'text-sm transition-colors duration-300',
                    themeClasses.text.secondary(isDarkMode)
                  )}>CTO, Digital Pioneer</div>
                  <div className="flex items-center mt-1">
                    <svg className={combineClasses(
                      'w-4 h-4 mr-1',
                      themeClasses.text.secondary(isDarkMode)
                    )} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    </svg>
                    <span className={combineClasses(
                      'text-sm transition-colors duration-300',
                      themeClasses.text.secondary(isDarkMode)
                    )}>Webflow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={combineClasses(
        'py-20 px-6',
        themeClasses.bg.secondary(isDarkMode),
        themeClasses.transition
      )} data-section="cta">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ease-out ${
              isVisible.cta 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}>
              <h2 className={combineClasses(
                'text-4xl font-bold mb-6 transition-colors duration-300',
                isDarkMode ? 'text-white' : 'text-gray-900'
              )}>
                Ready to start your next digital transformation
              </h2>
              <p className={combineClasses(
                'mb-8 transition-colors duration-300',
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              )}>
                Let's discuss how we can turn your innovative ideas into powerful technological solutions
              </p>
              <div className="flex space-x-4">
                <button className={combineClasses(
                  'px-6 py-3 rounded-md transform hover:scale-105 transition-all duration-200',
                  themeClasses.button.primary(isDarkMode)
                )}>
                  Start project
                </button>
                <button className={combineClasses(
                  'px-6 py-3 border rounded-md transform hover:scale-105 transition-all duration-200',
                  themeClasses.button.secondary(isDarkMode)
                )}>
                  Schedule call
                </button>
              </div>
            </div>
            <div className={`flex justify-center transition-all duration-1000 delay-200 ease-out ${
              isVisible.cta 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-10 scale-95'
            }`}>
              <div className={combineClasses(
                'w-96 h-64 rounded-lg flex items-center justify-center hover:shadow-2xl transition-all duration-300 group',
                isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
              )}>
                <div className={combineClasses(
                  'w-24 h-24 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300',
                  isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                )}>
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className={combineClasses(
        'py-20 px-6',
        themeClasses.bg.primary(isDarkMode),
        themeClasses.transition
      )}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={combineClasses(
              'text-4xl font-bold mb-4 transition-colors duration-300',
              isDarkMode ? 'text-white' : 'text-gray-900'
            )}>Project showcase</h2>
            <p className={combineClasses(
              'transition-colors duration-300',
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            )}>
              A visual journey through innovative digital solutions and successful implementations
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Main Carousel */}
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Project Image */}
                      <div className="order-2 lg:order-1">
                        <div className="relative group">
                          <div className={combineClasses(
                            'w-full h-80 rounded-lg flex items-center justify-center overflow-hidden',
                            isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                          )}>
                            <div className={combineClasses(
                              'w-24 h-24 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110',
                              isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                            )}>
                              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                            <button className={combineClasses(
                              'opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-3 rounded-md font-medium',
                              isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                            )}>
                              View Project
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="order-1 lg:order-2 space-y-6">
                        <div>
                          <h3 className={combineClasses(
                            'text-3xl font-bold mb-4 transition-colors duration-300',
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          )}>{project.title}</h3>
                          <p className={combineClasses(
                            'text-lg leading-relaxed transition-colors duration-300',
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          )}>{project.description}</p>
                        </div>
                        
                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-3">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className={combineClasses(
                                'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300',
                                isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                              )}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Project Actions */}
                        <div className="flex space-x-4">
                          <button className={combineClasses(
                            'px-6 py-3 rounded-md transition-colors duration-200',
                            themeClasses.button.primary(isDarkMode)
                          )}>
                            View Live Demo
                          </button>
                          <button className={combineClasses(
                            'px-6 py-3 border rounded-md transition-colors duration-200',
                            themeClasses.button.secondary(isDarkMode)
                          )}>
                            View Code
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className={combineClasses(
                'absolute left-4 top-1/2 transform -translate-y-1/2 shadow-lg rounded-full p-3 transition-all duration-200 z-10',
                themeClasses.bg.card(isDarkMode),
                themeClasses.bg.hover(isDarkMode)
              )}
              aria-label="Previous project"
            >
              <svg className={combineClasses(
                'w-6 h-6',
                themeClasses.text.secondary(isDarkMode)
              )} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className={combineClasses(
                'absolute right-4 top-1/2 transform -translate-y-1/2 shadow-lg rounded-full p-3 transition-all duration-200 z-10',
                themeClasses.bg.card(isDarkMode),
                themeClasses.bg.hover(isDarkMode)
              )}
              aria-label="Next project"
            >
              <svg className={combineClasses(
                'w-6 h-6',
                themeClasses.text.secondary(isDarkMode)
              )} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-gray-900 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* View All Projects Button */}
          <div className="flex justify-center mt-12">
            <button className={combineClasses(
              'px-8 py-3 rounded-md transition-colors duration-200',
              'bg-blue-600 text-white hover:bg-blue-700'
            )}>
              View all projects
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={combineClasses(
        'py-16 px-6',
        themeClasses.bg.secondary(isDarkMode),
        themeClasses.transition
      )}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Newsletter Section */}
            <div className="lg:col-span-2">
              <div className={combineClasses(
                'text-2xl font-bold italic mb-4',
                themeClasses.text.primary(isDarkMode),
                themeClasses.transition
              )}>YusLabi</div>
              <p className={combineClasses(
                'mb-6',
                themeClasses.text.secondary(isDarkMode),
                themeClasses.transition
              )}>
                Stay updated with the latest insights and technology trends
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className={combineClasses(
                    'flex-1 px-4 py-3 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500',
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  )}
                />
                <button className={combineClasses(
                  'px-6 py-3 rounded-r-md',
                  themeClasses.button.primary(isDarkMode),
                  themeClasses.transition
                )}>
                  Subscribe
                </button>
              </div>
              <p className={combineClasses(
                'text-xs mt-2',
                themeClasses.text.muted(isDarkMode),
                themeClasses.transition
              )}>
                By subscribing, you agree to our privacy policy and consent to receive updates
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className={combineClasses(
                'font-semibold mb-4',
                themeClasses.text.primary(isDarkMode),
                themeClasses.transition
              )}>Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className={combineClasses(
                  themeClasses.text.secondary(isDarkMode),
                  'hover:text-blue-600 dark:hover:text-blue-400',
                  themeClasses.transition
                )}>About us</a></li>
                <li><a href="#" className={combineClasses(
                  themeClasses.text.secondary(isDarkMode),
                  'hover:text-blue-600 dark:hover:text-blue-400',
                  themeClasses.transition
                )}>Careers</a></li>
                <li><a href="#" className={combineClasses(
                  themeClasses.text.secondary(isDarkMode),
                  'hover:text-blue-600 dark:hover:text-blue-400',
                  themeClasses.transition
                )}>Services</a></li>
                <li><a href="#" className={combineClasses(
                  themeClasses.text.secondary(isDarkMode),
                  'hover:text-blue-600 dark:hover:text-blue-400',
                  themeClasses.transition
                )}>Contact</a></li>
                <li><a href="#" className={combineClasses(
                  themeClasses.text.secondary(isDarkMode),
                  'hover:text-blue-600 dark:hover:text-blue-400',
                  themeClasses.transition
                )}>Resources</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className={combineClasses(
                'font-semibold mb-4',
                themeClasses.text.primary(isDarkMode),
                themeClasses.transition
              )}>Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className={combineClasses(
                  themeClasses.text.secondary(isDarkMode),
                  'hover:text-blue-600 dark:hover:text-blue-400',
                  themeClasses.transition
                )}>Blog</a></li>
                <li><a href="#" className={combineClasses(
                  themeClasses.text.secondary(isDarkMode),
                  'hover:text-blue-600 dark:hover:text-blue-400',
                  themeClasses.transition
                )}>Case studies</a></li>
                <li><a href="#" className={combineClasses(
                  themeClasses.text.secondary(isDarkMode),
                  'hover:text-blue-600 dark:hover:text-blue-400',
                  themeClasses.transition
                )}>White papers</a></li>
                <li><a href="#" className={combineClasses(
                  themeClasses.text.secondary(isDarkMode),
                  'hover:text-blue-600 dark:hover:text-blue-400',
                  themeClasses.transition
                )}>Connect</a></li>
                <li><a href="#" className={combineClasses(
                  themeClasses.text.secondary(isDarkMode),
                  'hover:text-blue-600 dark:hover:text-blue-400',
                  themeClasses.transition
                )}>Facebook</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className={combineClasses(
                'font-semibold mb-4',
                themeClasses.text.primary(isDarkMode),
                themeClasses.transition
              )}>Social</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className={combineClasses(
                    'w-4 h-4 mr-2',
                    themeClasses.text.secondary(isDarkMode)
                  )} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  <a href="#" className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    'hover:text-blue-600 dark:hover:text-blue-400',
                    themeClasses.transition
                  )}>Twitter</a>
                </li>
                <li className="flex items-center">
                  <svg className={combineClasses(
                    'w-4 h-4 mr-2',
                    themeClasses.text.secondary(isDarkMode)
                  )} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <a href="#" className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    'hover:text-blue-600 dark:hover:text-blue-400',
                    themeClasses.transition
                  )}>LinkedIn</a>
                </li>
                <li className="flex items-center">
                  <svg className={combineClasses(
                    'w-4 h-4 mr-2',
                    themeClasses.text.secondary(isDarkMode)
                  )} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <a href="#" className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    'hover:text-blue-600 dark:hover:text-blue-400',
                    themeClasses.transition
                  )}>YouTube</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className={combineClasses(
            'border-t pt-8 flex flex-col md:flex-row justify-between items-center',
            themeClasses.border.primary(isDarkMode)
          )}>
            <p className={combineClasses(
              'text-sm mb-4 md:mb-0',
              themeClasses.text.secondary(isDarkMode),
              themeClasses.transition
            )}>
              © 2024 YusLabi Portfolio. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className={combineClasses(
                themeClasses.text.secondary(isDarkMode),
                'hover:text-blue-600 dark:hover:text-blue-400',
                themeClasses.transition
              )}>Privacy policy</a>
              <a href="#" className={combineClasses(
                themeClasses.text.secondary(isDarkMode),
                'hover:text-blue-600 dark:hover:text-blue-400',
                themeClasses.transition
              )}>Terms of service</a>
              <a href="#" className={combineClasses(
                themeClasses.text.secondary(isDarkMode),
                'hover:text-blue-600 dark:hover:text-blue-400',
                themeClasses.transition
              )}>Cookie settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}