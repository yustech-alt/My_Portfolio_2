import { combineClasses, themeClasses } from "../utils/themeClasses.js";

export function CallToActionSection({ isDarkMode, isVisible }) {
  return (
    <section
      className={combineClasses(
        "py-20 px-6",
        themeClasses.bg.secondary(isDarkMode),
        themeClasses.transition
      )}
      data-section="cta"
    >
      <div className="max-w-7xl mx-auto">
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
              Ready to start your next digital transformation
            </h2>
            <p
              className={combineClasses(
                "mb-8 transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              Let's discuss how we can turn your innovative ideas into
              powerful technological solutions
            </p>
            <div className="flex space-x-4">
              <button
                className={combineClasses(
                  "px-6 py-3 rounded-md transform hover:scale-105 transition-all duration-200",
                  themeClasses.button.primary(isDarkMode)
                )}
              >
                Start project
              </button>
              <button
                className={combineClasses(
                  "px-6 py-3 border rounded-md transform hover:scale-105 transition-all duration-200",
                  themeClasses.button.secondary(isDarkMode)
                )}
              >
                Schedule call
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
                "w-96 h-64 rounded-lg flex items-center justify-center hover:shadow-2xl transition-all duration-300 group",
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              )}
            >
              <div
                className={combineClasses(
                  "w-24 h-24 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                  isDarkMode ? "bg-gray-600" : "bg-gray-300"
                )}
              >
                <svg
                  className="w-12 h-12 text-gray-400"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
