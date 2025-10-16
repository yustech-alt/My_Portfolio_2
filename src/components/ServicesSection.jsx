import { combineClasses } from "../utils/themeClasses.js";

export function ServicesSection({ isDarkMode, isVisible }) {
  return (
    <section
      className={`py-20 px-6 relative overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
      data-section="services"
    >
      {/* Services Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className={combineClasses(
          'absolute inset-0 opacity-20',
          isDarkMode 
            ? 'bg-gradient-to-tl from-gray-900 via-slate-800/30 to-gray-800' 
            : 'bg-gradient-to-tl from-gray-100 via-slate-50/30 to-gray-50'
        )}></div>
        
        {/* Floating circles */}
        <div className="absolute top-16 left-16 w-24 h-24 bg-orange-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-32 h-32 bg-blue-500/5 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-500/5 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent transform rotate-12"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transform -rotate-12"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-16">
          {/* Service 1 - Engineering */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${isVisible.services ?
                "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"}`}
          >
            <div>
              <div className="text-sm text-orange-600 font-medium mb-2">
                01 Software
              </div>
              <h2
                className={`text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Full-Stack Web Development
              </h2>
              <p
                className={`mb-6 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Building scalable web applications from concept to deployment. Specialized in React, Node.js, 
                and cloud architecture. I deliver responsive, performant solutions that handle enterprise-scale traffic 
                and provide exceptional user experiences.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className={`underline transition-colors duration-300 ${isDarkMode ?
                      "text-white hover:text-gray-300"
                      : "text-gray-900 hover:text-gray-700"}`}
                >
                  View services
                </a>
                <a
                  href="#"
                  className={`underline transition-colors duration-300 ${isDarkMode ?
                      "text-white hover:text-gray-300"
                      : "text-gray-900 hover:text-gray-700"}`}
                >
                  Discuss project
                </a>
              </div>
            </div>
            <div
              className={`flex justify-center transition-all duration-1000 delay-200 ease-out ${isVisible.services ?
                  "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"}`}
            >
              <div
                className={combineClasses(
                  "w-80 h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group",
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                )}
              >
                <img
                  src="/images/services/software-development.jpg"
                  alt="Custom software solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Service 2 - Product Management */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ease-out ${isVisible.services ?
                "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"}`}
          >
            <div className="order-2 lg:order-1 flex justify-center">
              <div
                className={combineClasses(
                  "w-80 h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group",
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                )}
              >
                <img
                  src="/images/services/product-management.jpg"
                  alt="Strategic product development"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-sm text-orange-600 font-medium mb-2">
                02 Product management
              </div>
              <h2
                className={combineClasses(
                  "text-4xl font-bold mb-4 transition-colors duration-300",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
              >
                Strategic product development and innovation
              </h2>
              <p
                className={combineClasses(
                  "mb-6 transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )}
              >
                Transforming ideas into market-ready products through
                comprehensive research, user-centric design, and strategic
                planning.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className={combineClasses(
                    "underline transition-colors duration-300",
                    isDarkMode ?
                      "text-white hover:text-gray-300"
                      : "text-gray-900 hover:text-gray-700"
                  )}
                >
                  Explore approach
                </a>
                <a
                  href="#"
                  className={combineClasses(
                    "underline transition-colors duration-300",
                    isDarkMode ?
                      "text-white hover:text-gray-300"
                      : "text-gray-900 hover:text-gray-700"
                  )}
                >
                  Book consultation
                </a>
              </div>
            </div>
          </div>

          {/* Service 3 - Technical Consulting */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-orange-600 font-medium mb-2">
                03 Technical consulting
              </div>
              <h2
                className={combineClasses(
                  "text-4xl font-bold mb-4 transition-colors duration-300",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
              >
                Expert guidance for technology transformation
              </h2>
              <p
                className={combineClasses(
                  "mb-6 transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )}
              >
                Providing strategic insights and technical recommendations to
                help businesses leverage technology for competitive advantage.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className={combineClasses(
                    "underline transition-colors duration-300",
                    isDarkMode ?
                      "text-white hover:text-gray-300"
                      : "text-gray-900 hover:text-gray-700"
                  )}
                >
                  Get started
                </a>
                <a
                  href="#"
                  className={combineClasses(
                    "underline transition-colors duration-300",
                    isDarkMode ?
                      "text-white hover:text-gray-300"
                      : "text-gray-900 hover:text-gray-700"
                  )}
                >
                  Start project
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className={combineClasses(
                  "w-80 h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group",
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                )}
              >
                <img
                  src="/images/services/technical-consulting.jpg"
                  alt="Expert technical guidance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
