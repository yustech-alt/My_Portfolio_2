import { combineClasses, themeClasses } from "../utils/themeClasses.js";

export function SkillsSection({ isDarkMode, isVisible }) {
  return (
    <section
      className={combineClasses(
        "py-20 px-6",
        themeClasses.bg.primary(isDarkMode),
        themeClasses.transition
      )}
      data-section="skills"
    >
      <div className="max-w-7xl mx-auto">
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
            Technical expertise and professional capabilities
          </h2>
          <p
            className={combineClasses(
              "max-w-2xl transition-colors duration-300",
              isDarkMode ? "text-gray-300" : "text-gray-600"
            )}
          >
            Combining technical skills with strategic product management to
            deliver exceptional digital solutions.
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
                "w-full h-48 rounded-lg mb-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 group",
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
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3
              className={combineClasses(
                "text-xl font-bold mb-3 transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              Software development
            </h3>
            <p
              className={combineClasses(
                "transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              Proficient in multiple programming languages and modern
              development frameworks.
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
                "w-full h-48 rounded-lg mb-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 group",
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
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3
              className={combineClasses(
                "text-xl font-bold mb-3 transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              Product strategy
            </h3>
            <p
              className={combineClasses(
                "transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              Creating roadmaps that align technical capabilities with
              business objectives.
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
                "w-full h-48 rounded-lg mb-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 group",
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
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3
              className={combineClasses(
                "text-xl font-bold mb-3 transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              Agile methodologies
            </h3>
            <p
              className={combineClasses(
                "transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              Implementing efficient workflows to maximize team productivity
              and project success.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <button
            className={combineClasses(
              "px-6 py-3 border rounded-md transition-colors duration-300",
              isDarkMode ?
                "border-gray-600 text-gray-300 hover:bg-gray-800"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
            )}
          >
            Learn more
          </button>
          <button
            className={combineClasses(
              "px-6 py-3 rounded-md transition-colors duration-300",
              isDarkMode ?
                "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-900 text-white hover:bg-gray-800"
            )}
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}
