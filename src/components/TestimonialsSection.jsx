import { combineClasses, themeClasses } from "../utils/themeClasses.js";

export function TestimonialsSection({ isDarkMode, isVisible }) {
  return (
    <section
      className={combineClasses(
        "py-20 px-6",
        themeClasses.bg.primary(isDarkMode),
        themeClasses.transition
      )}
      data-section="testimonials"
    >
      <div className="max-w-7xl mx-auto">
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
              John transformed our entire digital strategy with his innovative
              approach and technical expertise.
            </p>
            <div className="flex items-center">
              <div
                className={combineClasses(
                  "w-12 h-12 rounded-full mr-4 flex items-center justify-center",
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                )}
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
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
                  CEO, TechnoCore
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
              The product management skills demonstrated were exceptional and
              directly contributed to our startup's success.
            </p>
            <div className="flex items-center">
              <div
                className={combineClasses(
                  "w-12 h-12 rounded-full mr-4 flex items-center justify-center",
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                )}
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
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
                  Founder, GreenTech
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
              A true professional who understands both technical challenges
              and business objectives.
            </p>
            <div className="flex items-center">
              <div
                className={combineClasses(
                  "w-12 h-12 rounded-full mr-4 flex items-center justify-center",
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                )}
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
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
                  CTO, Digital Pioneer
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
