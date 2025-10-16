import { combineClasses, themeClasses } from "../utils/themeClasses.js";
import profileImage from "../assets/img/profile.png";
// Import your image (uncomment and add your actual image path)
// import profileImage from '../assets/profile.jpg';

export function HeroSection({ isDarkMode, isVisible }) {
  return (
    <section
      className={combineClasses(
        "flex items-center min-h-[90vh] px-6 relative overflow-hidden",
        themeClasses.bg.primary(isDarkMode),
        themeClasses.transition
      )}
      data-section="hero"
    >
      {/* Hero Unique Animated Background */}
      <div className="absolute inset-0">
        {/* Profile image as background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url(${profileImage})`,
            backgroundPosition: 'right center',
            backgroundSize: 'cover'
          }}
        ></div>
        
        {/* Professional gradient overlay */}
        <div className={combineClasses(
          'absolute inset-0',
          isDarkMode 
            ? 'bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40' 
            : 'bg-gradient-to-r from-white/95 via-white/80 to-white/40'
        )}></div>
        
        {/* Large animated orbs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-l from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/6 to-blue-500/6 rounded-full blur-2xl animate-bounce" style={{animationDelay: '1s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-blue-400/20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-6 h-6 bg-purple-400/20 rotate-12 animate-spin" style={{animationDuration: '15s', animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 left-3/4 w-3 h-3 bg-indigo-400/20 rotate-45 animate-spin" style={{animationDuration: '25s', animationDelay: '1s'}}></div>
        
        {/* Hexagonal pattern */}
        <div className={combineClasses(
          'absolute inset-0 opacity-3',
          'bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_2px,_transparent_2px)]',
          'bg-[length:80px_80px]'
        )}></div>
        
        {/* Animated lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400/10 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center relative z-10 h-full">
        {/* Content Section - Takes 3/5 of the width */}
        <div className="lg:col-span-3">
          <div
            className={`transition-all duration-1000 ease-out ${isVisible.hero ?
                "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-4">
              <span className={combineClasses(
                "inline-block px-4 py-2 rounded-full text-sm font-medium mb-4",
                isDarkMode 
                  ? "bg-blue-900/30 text-blue-300 border border-blue-700/50" 
                  : "bg-blue-50 text-blue-700 border border-blue-200"
              )}>
                Available for Projects
              </span>
            </div>
            
            <h1
              className={combineClasses(
                "text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6",
                themeClasses.text.primary(isDarkMode),
                themeClasses.transition
              )}
            >
              Full-Stack Developer & 
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Product Strategist
              </span>
            </h1>
            
            <p
              className={combineClasses(
                "text-lg lg:text-xl mb-8 max-w-xl leading-relaxed transition-all duration-1000 delay-200 ease-out",
                isVisible.hero ?
                  "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10",
                themeClasses.text.secondary(isDarkMode)
              )}
            >
              I build scalable web applications and drive product strategy for startups and enterprises. 
              Specialized in React, Node.js, and cloud architecture with 1+ years delivering results.
            </p>
            
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-1000 delay-400 ease-out ${isVisible.hero ?
                  "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"}`}
            >
              <button
                className={combineClasses(
                  "group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/50",
                  "before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-600 before:to-blue-600 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
                )}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>View My Work</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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
                  <span>Let's Connect</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
            </div>
            
            {/* Professional Stats */}
            <div
              className={`flex flex-wrap gap-6 transition-all duration-1000 delay-600 ease-out ${isVisible.hero ?
                  "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center space-x-2">
                <div className={combineClasses(
                  "w-2 h-2 rounded-full bg-green-500"
                )}></div>
                <span className={combineClasses(
                  "text-sm font-medium",
                  themeClasses.text.secondary(isDarkMode)
                )}>
                  1+ Years Experience
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className={combineClasses(
                  "w-2 h-2 rounded-full bg-blue-500"
                )}></div>
                <span className={combineClasses(
                  "text-sm font-medium",
                  themeClasses.text.secondary(isDarkMode)
                )}>
                  10+ Projects Delivered
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className={combineClasses(
                  "w-2 h-2 rounded-full bg-purple-500"
                )}></div>
                <span className={combineClasses(
                  "text-sm font-medium",
                  themeClasses.text.secondary(isDarkMode)
                )}>
                  Remote & On-site
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Reserved for image space */}
        <div className="lg:col-span-2 hidden lg:block">
          {/* This space is intentionally left for the background image */}
        </div>
      </div>
    </section>
  );
}
