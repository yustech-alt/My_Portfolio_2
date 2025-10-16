import { combineClasses, themeClasses } from "../utils/themeClasses.js";

export function ProjectShowcase({ isDarkMode, projects, currentSlide, nextSlide, prevSlide, goToSlide }) {
  return (
    <section
      className={combineClasses(
        "py-20 px-6 relative overflow-hidden",
        themeClasses.bg.primary(isDarkMode),
        themeClasses.transition
      )}
    >
      {/* Project Showcase Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className={combineClasses(
          'absolute inset-0 opacity-25',
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 via-indigo-900/20 to-purple-900/30' 
            : 'bg-gradient-to-br from-gray-50 via-indigo-50/20 to-purple-50/30'
        )}></div>
        
        {/* Portfolio-inspired shapes */}
        <div className="absolute top-16 left-16 w-32 h-20 bg-gradient-to-r from-indigo-500/4 to-purple-500/4 rounded-lg animate-pulse transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-l from-purple-500/4 to-pink-500/4 rounded-lg animate-bounce transform -rotate-6" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-16 bg-gradient-to-r from-blue-500/4 to-indigo-500/4 rounded-lg animate-pulse transform rotate-45" style={{animationDelay: '2.5s'}}></div>
        
        {/* Gallery-like grid pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-3">
          <div className="absolute top-1/4 left-1/5 w-16 h-12 border border-indigo-400/20 rounded transform rotate-12"></div>
          <div className="absolute bottom-1/3 right-1/5 w-12 h-16 border border-purple-400/20 rounded transform -rotate-12"></div>
          <div className="absolute top-2/3 left-2/3 w-14 h-10 border border-blue-400/20 rounded transform rotate-6"></div>
        </div>
        
        {/* Floating project elements */}
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-indigo-400/15 rounded-sm animate-ping transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400/15 rounded-sm animate-ping transform rotate-45" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/15 rounded-sm animate-ping transform rotate-45" style={{animationDelay: '3s'}}></div>
        
        {/* Showcase spotlight effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-indigo-500/2 via-purple-500/1 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Moving showcase lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-400/20 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2
            className={combineClasses(
              "text-4xl font-bold mb-4 transition-colors duration-300",
              isDarkMode ? "text-white" : "text-gray-900"
            )}
          >
            Project showcase
          </h2>
          <p
            className={combineClasses(
              "transition-colors duration-300",
              isDarkMode ? "text-gray-300" : "text-gray-600"
            )}
          >
            A visual journey through innovative digital solutions and
            successful implementations
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
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Project Image */}
                    <div className="order-2 lg:order-1">
                      <div className="relative group">
                        {/* Enhanced project image container */}
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                          <div
                            className={combineClasses(
                              "w-full h-80 rounded-2xl overflow-hidden border-2 transition-all duration-500 group-hover:scale-105",
                              isDarkMode ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700" : "bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300"
                            )}
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          
                          {/* Enhanced overlay with multiple buttons */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl flex items-center justify-center">
                            <div className="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              <button className="px-6 py-3 bg-white/90 text-gray-900 font-semibold rounded-lg backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <span>Preview</span>
                              </button>
                              <button className="px-6 py-3 bg-blue-600/90 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-blue-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span>Live Demo</span>
                              </button>
                            </div>
                          </div>
                          
                          {/* Project metrics badge */}
                          {project.metrics && (
                            <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                              {project.metrics}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="order-1 lg:order-2 space-y-6">
                      <div>
                        <h3
                          className={combineClasses(
                            "text-3xl font-bold mb-4 transition-colors duration-300",
                            isDarkMode ? "text-white" : "text-gray-900"
                          )}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={combineClasses(
                            "text-lg leading-relaxed transition-colors duration-300",
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          )}
                        >
                          {project.description}
                        </p>
                      </div>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={combineClasses(
                              "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-default border",
                              isDarkMode ?
                                "bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 border-blue-700/50 hover:from-blue-800/60 hover:to-purple-800/60"
                              : "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 hover:from-blue-100 hover:to-purple-100"
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Project Actions */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/50">
                          <span className="relative z-10 flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span>Live Demo</span>
                          </span>
                        </button>
                        <button
                          className={combineClasses(
                            "group px-8 py-4 border-2 font-semibold rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4",
                            isDarkMode 
                              ? "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 focus:ring-gray-500/50" 
                              : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-400/50"
                          )}
                        >
                          <span className="flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span>View Code</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={combineClasses(
              "group absolute left-4 top-1/2 transform -translate-y-1/2 shadow-2xl rounded-full p-4 transition-all duration-300 z-10 hover:scale-110 focus:outline-none focus:ring-4",
              isDarkMode 
                ? "bg-gray-800/90 hover:bg-gray-700 border border-gray-600 focus:ring-gray-500/50" 
                : "bg-white/90 hover:bg-white border border-gray-200 focus:ring-blue-500/50"
            )}
            aria-label="Previous project"
          >
            <svg
              className={combineClasses(
                "w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5",
                isDarkMode ? "text-gray-300" : "text-gray-700"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className={combineClasses(
              "group absolute right-4 top-1/2 transform -translate-y-1/2 shadow-2xl rounded-full p-4 transition-all duration-300 z-10 hover:scale-110 focus:outline-none focus:ring-4",
              isDarkMode 
                ? "bg-gray-800/90 hover:bg-gray-700 border border-gray-600 focus:ring-gray-500/50" 
                : "bg-white/90 hover:bg-white border border-gray-200 focus:ring-blue-500/50"
            )}
            aria-label="Next project"
          >
            <svg
              className={combineClasses(
                "w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5",
                isDarkMode ? "text-gray-300" : "text-gray-700"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={combineClasses(
                  "relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-full",
                  index === currentSlide
                    ? "w-8 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    : "w-3 h-3 rounded-full hover:scale-125",
                  index === currentSlide
                    ? ""
                    : isDarkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced View All Projects Button */}
        <div className="flex justify-center mt-12">
          <button className="group relative px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/50">
            <span className="relative z-10 flex items-center space-x-3">
              <span>View All Projects</span>
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
