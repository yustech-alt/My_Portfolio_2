import { combineClasses, themeClasses } from "../utils/themeClasses.js";

export function SkillsSection({ isDarkMode, isVisible }) {
  return (
    <section
      className={combineClasses(
        "py-20 px-6 relative overflow-hidden",
        themeClasses.bg.primary(isDarkMode),
        themeClasses.transition
      )}
      data-section="skills"
    >
      {/* Skills Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className={combineClasses(
          'absolute inset-0 opacity-25',
          isDarkMode 
            ? 'bg-gradient-to-bl from-gray-900 via-blue-900/20 to-slate-900' 
            : 'bg-gradient-to-bl from-white via-blue-50/20 to-slate-50'
        )}></div>
        
        {/* Tech-inspired shapes */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-green-500/5 rounded-lg animate-pulse transform rotate-12"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-blue-500/5 rounded-lg animate-bounce transform -rotate-6" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-purple-500/5 rounded-lg animate-pulse transform rotate-45" style={{animationDelay: '1s'}}></div>
        
        {/* Circuit-like pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-3">
          <div className="absolute top-1/3 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
          <div className="absolute top-1/3 left-1/4 w-px h-16 bg-gradient-to-b from-transparent via-green-400/30 to-transparent"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-px bg-gradient-to-l from-transparent via-blue-400/30 to-transparent"></div>
          <div className="absolute bottom-1/3 right-1/4 w-px h-12 bg-gradient-to-t from-transparent via-blue-400/30 to-transparent"></div>
        </div>
        
        {/* Floating dots */}
        <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-green-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/5 right-1/5 w-1 h-1 bg-blue-400/20 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`mb-12 transition-all duration-1000 ease-out ${
            isVisible.skills ?
              "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={combineClasses(
              "text-sm font-medium mb-2 transition-colors duration-300",
              isDarkMode ? "text-gray-400" : "text-gray-500"
            )}
          >
            Skills
          </div>
          <h2
            className={combineClasses(
              "text-4xl font-bold mb-4 transition-colors duration-300",
              isDarkMode ? "text-white" : "text-gray-900"
            )}
          >
            Core Technical Competencies
          </h2>
          <p
            className={combineClasses(
              "max-w-2xl transition-colors duration-300",
              isDarkMode ? "text-gray-300" : "text-gray-600"
            )}
          >
            Proven expertise across the full development stack with 1+ years of hands-on experience. 
            Specialized in modern frameworks, cloud infrastructure, and agile development practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`text-center transition-all duration-1000 delay-100 ease-out ${
              isVisible.skills ?
                "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
            }`}
          >
            <div
              className={combineClasses(
                "w-full h-48 rounded-lg mb-6 overflow-hidden hover:shadow-xl transition-all duration-300 group",
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              )}
            >
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Software development"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3
              className={combineClasses(
                "text-xl font-bold mb-3 transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              Frontend Development
            </h3>
            <p
              className={combineClasses(
                "transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              React, Next.js, TypeScript, Tailwind CSS. Building responsive, 
              accessible user interfaces with modern JavaScript frameworks.
            </p>
          </div>

          <div
            className={`text-center transition-all duration-1000 delay-200 ease-out ${
              isVisible.skills ?
                "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
            }`}
          >
            <div
              className={combineClasses(
                "w-full h-48 rounded-lg mb-6 overflow-hidden hover:shadow-xl transition-all duration-300 group",
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              )}
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Product strategy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3
              className={combineClasses(
                "text-xl font-bold mb-3 transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              Backend Development
            </h3>
            <p
              className={combineClasses(
                "transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              Node.js, Python, PostgreSQL, MongoDB. Designing scalable APIs, 
              microservices, and database architectures for enterprise applications.
            </p>
          </div>

          <div
            className={`text-center transition-all duration-1000 delay-300 ease-out ${
              isVisible.skills ?
                "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
            }`}
          >
            <div
              className={combineClasses(
                "w-full h-48 rounded-lg mb-6 overflow-hidden hover:shadow-xl transition-all duration-300 group",
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              )}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                alt="Agile methodologies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3
              className={combineClasses(
                "text-xl font-bold mb-3 transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              Cloud & DevOps
            </h3>
            <p
              className={combineClasses(
                "transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              AWS, Docker, Kubernetes, CI/CD pipelines. Deploying and managing 
              applications at scale with modern DevOps practices and monitoring.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <button
            className={combineClasses(
              "group px-8 py-4 border-2 font-semibold rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4",
              isDarkMode ?
                "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 focus:ring-gray-500/50"
              : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-400/50"
            )}
          >
            <span className="flex items-center space-x-2">
              <span>View All Skills</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <button
            className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-500/50"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Hire Me</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
