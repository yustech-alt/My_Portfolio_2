import { combineClasses } from "../utils/themeClasses.js";

export function ServicesSection({ isDarkMode, isVisible }) {
  return (
    <section
      className={`py-20 px-6 transition-colors duration-300 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
      data-section="services"
    >
      <div className="max-w-7xl mx-auto">
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
                Custom software solutions for modern businesses
              </h2>
              <p
                className={`mb-6 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Developing robust and scalable applications that solve complex
                business challenges. Leveraging cutting-edge technologies to
                create innovative digital products.
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
                  "w-80 h-64 rounded-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group",
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                )}
              >
                <div
                  className={combineClasses(
                    "w-16 h-16 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                    isDarkMode ? "bg-gray-600" : "bg-gray-300"
                  )}
                >
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd" />
                  </svg>
                </div>
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
                  "w-80 h-64 rounded-lg flex items-center justify-center",
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                )}
              >
                <div
                  className={combineClasses(
                    "w-16 h-16 rounded flex items-center justify-center",
                    isDarkMode ? "bg-gray-600" : "bg-gray-300"
                  )}
                >
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd" />
                  </svg>
                </div>
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
                  "w-80 h-64 rounded-lg flex items-center justify-center",
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                )}
              >
                <div
                  className={combineClasses(
                    "w-16 h-16 rounded flex items-center justify-center",
                    isDarkMode ? "bg-gray-600" : "bg-gray-300"
                  )}
                >
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
