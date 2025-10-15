import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext.jsx';
import { themeClasses, combineClasses } from '../utils/themeClasses.js';

const ProjectShowcase = () => {
  const { isDarkMode } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <section className={combineClasses(
      'py-20 px-6',
      themeClasses.bg.primary(isDarkMode),
      themeClasses.transition
    )}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={combineClasses(
            'text-4xl font-bold mb-4',
            themeClasses.text.primary(isDarkMode),
            themeClasses.transition
          )}>
            Project showcase
          </h2>
          <p className={combineClasses(
            themeClasses.text.secondary(isDarkMode),
            themeClasses.transition
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
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-3 bg-white text-gray-900 rounded-md font-medium">
                            View Project
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="order-1 lg:order-2 space-y-6">
                      <div>
                        <h3 className={combineClasses(
                          'text-3xl font-bold mb-4',
                          themeClasses.text.primary(isDarkMode),
                          themeClasses.transition
                        )}>
                          {project.title}
                        </h3>
                        <p className={combineClasses(
                          'text-lg leading-relaxed',
                          themeClasses.text.secondary(isDarkMode),
                          themeClasses.transition
                        )}>
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={combineClasses(
                              'px-4 py-2 rounded-full text-sm font-medium',
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
                          'px-6 py-3 rounded-md',
                          themeClasses.button.primary(isDarkMode),
                          'transition-colors duration-200'
                        )}>
                          View Live Demo
                        </button>
                        <button className={combineClasses(
                          'px-6 py-3 border rounded-md',
                          themeClasses.button.secondary(isDarkMode),
                          'transition-colors duration-200'
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
              'absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg z-10',
              themeClasses.bg.card(isDarkMode),
              themeClasses.bg.hover(isDarkMode),
              'transition-all duration-200'
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
              'absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg z-10',
              themeClasses.bg.card(isDarkMode),
              themeClasses.bg.hover(isDarkMode),
              'transition-all duration-200'
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
                    ? 'bg-gray-900 dark:bg-white scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        {/* <div className="flex justify-center mt-12">
          <button className={combineClasses(
            'px-8 py-3 rounded-md',
            'bg-blue-600 text-white hover:bg-blue-700',
            'transition-colors duration-200'
          )}>
            View all projects
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default ProjectShowcase;
