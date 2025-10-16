import { combineClasses, themeClasses } from "../utils/themeClasses.js";

export function CallToActionSection({ isDarkMode, isVisible }) {
  return (
    <section
      className={combineClasses(
        "py-20 px-6 relative overflow-hidden",
        themeClasses.bg.secondary(isDarkMode),
        themeClasses.transition
      )}
      data-section="cta"
    >
      {/* CTA Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className={combineClasses(
          'absolute inset-0 opacity-25',
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-800 via-slate-800/40 to-indigo-900/20' 
            : 'bg-gradient-to-br from-gray-50 via-slate-100/40 to-indigo-50/20'
        )}></div>
        
        {/* Action-inspired shapes */}
        <div className="absolute top-20 right-16 w-24 h-24 bg-indigo-500/5 rounded-lg animate-pulse transform rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-500/5 rounded-lg animate-bounce transform -rotate-6" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-500/5 rounded-lg animate-pulse transform rotate-45" style={{animationDelay: '2s'}}></div>
        
        {/* Arrow-like elements */}
        <div className="absolute top-1/3 left-1/4 w-8 h-2 bg-indigo-400/10 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-2 bg-purple-400/10 transform -rotate-45 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Radiating lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-indigo-400/20 via-transparent to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-purple-400/20 via-transparent to-transparent transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-blue-400/20 via-transparent to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-indigo-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-purple-400/20 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible.cta ?
                "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
            }`}
          >
            <h2
              className={combineClasses(
                "text-4xl font-bold mb-6 transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              Ready to Build Something Amazing?
            </h2>
            <p
              className={combineClasses(
                "mb-8 transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              I'm available for full-time opportunities, consulting projects, and technical partnerships. 
              Let's discuss how I can help bring your vision to life with scalable, modern solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Get In Touch</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
              <button
                className={combineClasses(
                  "group px-8 py-4 border-2 font-bold rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4",
                  isDarkMode 
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 focus:ring-gray-500/50" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-400/50"
                )}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Download Resume</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div
            className={`flex justify-center transition-all duration-1000 delay-200 ease-out ${
              isVisible.cta ?
                "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-10 scale-95"
            }`}
          >
            <div
              className={combineClasses(
                "w-96 h-64 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group",
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              )}
            >
              <img
                src="/images/cta-collaboration.jpg"
                alt="Digital transformation collaboration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
