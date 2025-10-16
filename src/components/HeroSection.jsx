import { combineClasses, themeClasses } from "../utils/themeClasses.js";

export function HeroSection({ isDarkMode, isVisible }) {
  return (
    <section
      className="flex items-center min-h-[80vh] px-6"
      data-section="hero"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          className={`transition-all duration-1000 ease-out ${isVisible.hero ?
              "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"}`}
        >
          <h1
            className={combineClasses(
              "text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up",
              themeClasses.text.primary(isDarkMode),
              themeClasses.transition
            )}
          >
            Building digital solutions that transform businesses
          </h1>
          <p
            className={combineClasses(
              "text-lg mb-8 max-w-lg transition-all duration-1000 delay-200 ease-out",
              isVisible.hero ?
                "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10",
              themeClasses.text.secondary(isDarkMode)
            )}
          >
            Software engineer and product manager with a passion for creating
            innovative technology. Experienced in developing scalable solutions
            and driving product strategy.
          </p>
          <div
            className={`flex space-x-4 transition-all duration-1000 delay-400 ease-out ${isVisible.hero ?
                "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"}`}
          >
            <button
              className={combineClasses(
                "px-6 py-3 rounded-md transform hover:scale-105",
                themeClasses.button.primary(isDarkMode),
                "transition-all duration-200"
              )}
            >
              Explore
            </button>
            <button
              className={combineClasses(
                "px-6 py-3 border rounded-md transform hover:scale-105",
                themeClasses.button.secondary(isDarkMode),
                "transition-all duration-200"
              )}
            >
              Contact
            </button>
          </div>
        </div>
        <div
          className={`flex justify-center transition-all duration-1000 delay-300 ease-out ${isVisible.hero ?
              "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-10 scale-95"}`}
        >
          <div
            className={combineClasses(
              "w-96 h-96 rounded-lg flex items-center justify-center hover:shadow-2xl transition-all duration-300 group",
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
                  clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
