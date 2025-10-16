import { combineClasses, themeClasses } from "../utils/themeClasses.js";

export function TestimonialsSection({ isDarkMode, isVisible }) {
  return (
    <section
      className={combineClasses(
        "py-20 px-6 relative overflow-hidden",
        themeClasses.bg.primary(isDarkMode),
        themeClasses.transition
      )}
      data-section="testimonials"
    >
      {/* Testimonials Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className={combineClasses(
          'absolute inset-0 opacity-20',
          isDarkMode 
            ? 'bg-gradient-to-tr from-slate-900 via-gray-800/30 to-blue-900/20' 
            : 'bg-gradient-to-tr from-slate-50 via-gray-100/30 to-blue-50/20'
        )}></div>
        
        {/* Quote-inspired shapes */}
        <div className="absolute top-24 left-24 w-16 h-16 bg-yellow-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 right-32 w-20 h-20 bg-green-500/5 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 left-1/2 w-12 h-12 bg-blue-500/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Star pattern */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-yellow-400/15 transform rotate-45 animate-spin" style={{animationDuration: '30s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-400/15 transform rotate-45 animate-spin" style={{animationDuration: '25s', animationDelay: '2s'}}></div>
        
        {/* Curved lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent transform rotate-3"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-green-400/20 to-transparent transform -rotate-3"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`mb-12 transition-all duration-1000 ease-out ${
            isVisible.testimonials ?
              "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className={combineClasses(
              "text-4xl font-bold mb-4 transition-colors duration-300",
              isDarkMode ? "text-white" : "text-gray-900"
            )}
          >
            Client voices
          </h2>
          <p
            className={combineClasses(
              "transition-colors duration-300",
              isDarkMode ? "text-gray-300" : "text-gray-600"
            )}
          >
            Hear what our clients say about our work and collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div
            className={combineClasses(
              "p-6 rounded-lg",
              themeClasses.bg.card(isDarkMode),
              themeClasses.transition
            )}
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={combineClasses(
                    "w-5 h-5",
                    isDarkMode ? "text-yellow-400" : "text-gray-900"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p
              className={combineClasses(
                "mb-6 transition-colors duration-300",
                themeClasses.text.primary(isDarkMode)
              )}
            >
              "Yuslabi delivered our enterprise dashboard 2 weeks ahead of schedule. 
              The scalable architecture he built now handles 10x our original traffic with zero downtime."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                <img
                  src="/images/testimonials/mark-stevens.jpg"
                  alt="Mark Stevens"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div
                  className={combineClasses(
                    "font-medium transition-colors duration-300",
                    themeClasses.text.primary(isDarkMode)
                  )}
                >
                  Mark Stevens
                </div>
                <div
                  className={combineClasses(
                    "text-sm transition-colors duration-300",
                    themeClasses.text.secondary(isDarkMode)
                  )}
                >
                  CTO, DataFlow Systems
                </div>
                <div className="flex items-center mt-1">
                  <svg
                    className={combineClasses(
                      "w-4 h-4 mr-1",
                      themeClasses.text.secondary(isDarkMode)
                    )}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  </svg>
                  <span
                    className={combineClasses(
                      "text-sm transition-colors duration-300",
                      themeClasses.text.secondary(isDarkMode)
                    )}
                  >
                    Webflow
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            className={combineClasses(
              "p-6 rounded-lg",
              themeClasses.bg.card(isDarkMode),
              themeClasses.transition
            )}
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={combineClasses(
                    "w-5 h-5",
                    isDarkMode ? "text-yellow-400" : "text-gray-900"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p
              className={combineClasses(
                "mb-6 transition-colors duration-300",
                themeClasses.text.primary(isDarkMode)
              )}
            >
              "Working with Yuslabi was a game-changer. His microservices architecture reduced our API response time by 70% 
              and his mentorship elevated our entire development team."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                <img
                  src="/images/testimonials/emily-rodriguez.jpg"
                  alt="Emily Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div
                  className={combineClasses(
                    "font-medium transition-colors duration-300",
                    themeClasses.text.primary(isDarkMode)
                  )}
                >
                  Emily Rodriguez
                </div>
                <div
                  className={combineClasses(
                    "text-sm transition-colors duration-300",
                    themeClasses.text.secondary(isDarkMode)
                  )}
                >
                  Lead Developer, FinanceFlow
                </div>
                <div className="flex items-center mt-1">
                  <svg
                    className={combineClasses(
                      "w-4 h-4 mr-1",
                      themeClasses.text.secondary(isDarkMode)
                    )}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  </svg>
                  <span
                    className={combineClasses(
                      "text-sm transition-colors duration-300",
                      themeClasses.text.secondary(isDarkMode)
                    )}
                  >
                    Webflow
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div
            className={combineClasses(
              "p-6 rounded-lg",
              themeClasses.bg.card(isDarkMode),
              themeClasses.transition
            )}
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={combineClasses(
                    "w-5 h-5",
                    isDarkMode ? "text-yellow-400" : "text-gray-900"
                  )}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p
              className={combineClasses(
                "mb-6 transition-colors duration-300",
                themeClasses.text.primary(isDarkMode)
              )}
            >
              "Yuslabi's expertise in React and cloud architecture was instrumental in scaling our platform to 50K+ users. 
              His code quality and documentation standards are exceptional."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                <img
                  src="/images/testimonials/david-chen.jpg"
                  alt="David Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div
                  className={combineClasses(
                    "font-medium transition-colors duration-300",
                    themeClasses.text.primary(isDarkMode)
                  )}
                >
                  David Chen
                </div>
                <div
                  className={combineClasses(
                    "text-sm transition-colors duration-300",
                    themeClasses.text.secondary(isDarkMode)
                  )}
                >
                  Product Manager, CloudScale
                </div>
                <div className="flex items-center mt-1">
                  <svg
                    className={combineClasses(
                      "w-4 h-4 mr-1",
                      themeClasses.text.secondary(isDarkMode)
                    )}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  </svg>
                  <span
                    className={combineClasses(
                      "text-sm transition-colors duration-300",
                      themeClasses.text.secondary(isDarkMode)
                    )}
                  >
                    Webflow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
