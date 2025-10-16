import { combineClasses, themeClasses } from "../utils/themeClasses.js";

export function ProjectShowcase({ isDarkMode, projects, currentSlide, nextSlide, prevSlide, goToSlide }) {
  return (
    <section
      className={combineClasses(
        "py-20 px-6",
        themeClasses.bg.primary(isDarkMode),
        themeClasses.transition
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={combineClasses(
              "text-4xl font-bold mb-4 transition-colors duration-300",
              isDarkMode ? "text-white" : "text-gray-900"
            )}
          >
            Project showcase
          </h2>
          <p
            className={combineClasses(
              "transition-colors duration-300",
              isDarkMode ? "text-gray-300" : "text-gray-600"
            )}
          >
            A visual journey through innovative digital solutions and
            successful implementations
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Project Image */}
                    <div className="order-2 lg:order-1">
                      <div className="relative group">
                        <div
                          className={combineClasses(
                            "w-full h-80 rounded-lg flex items-center justify-center overflow-hidden",
                            isDarkMode ? "bg-gray-700" : "bg-gray-200"
                          )}
                        >
                          <div
                            className={combineClasses(
                              "w-24 h-24 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
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
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                          <button
                            className={combineClasses(
                              "opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-3 rounded-md font-medium",
                              isDarkMode ?
                                "bg-gray-800 text-white"
                              : "bg-white text-gray-900"
                            )}
                          >
                            View Project
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="order-1 lg:order-2 space-y-6">
                      <div>
                        <h3
                          className={combineClasses(
                            "text-3xl font-bold mb-4 transition-colors duration-300",
                            isDarkMode ? "text-white" : "text-gray-900"
                          )}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={combineClasses(
                            "text-lg leading-relaxed transition-colors duration-300",
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          )}
                        >
                          {project.description}
                        </p>
                      </div>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={combineClasses(
                              "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                              isDarkMode ?
                                "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-700"
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Project Actions */}
                      <div className="flex space-x-4">
                        <button
                          className={combineClasses(
                            "px-6 py-3 rounded-md transition-colors duration-200",
                            themeClasses.button.primary(isDarkMode)
                          )}
                        >
                          View Live Demo
                        </button>
                        <button
                          className={combineClasses(
                            "px-6 py-3 border rounded-md transition-colors duration-200",
                            themeClasses.button.secondary(isDarkMode)
                          )}
                        >
                          View Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={combineClasses(
              "absolute left-4 top-1/2 transform -translate-y-1/2 shadow-lg rounded-full p-3 transition-all duration-200 z-10",
              themeClasses.bg.card(isDarkMode),
              themeClasses.bg.hover(isDarkMode)
            )}
            aria-label="Previous project"
          >
            <svg
              className={combineClasses(
                "w-6 h-6",
                themeClasses.text.secondary(isDarkMode)
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className={combineClasses(
              "absolute right-4 top-1/2 transform -translate-y-1/2 shadow-lg rounded-full p-3 transition-all duration-200 z-10",
              themeClasses.bg.card(isDarkMode),
              themeClasses.bg.hover(isDarkMode)
            )}
            aria-label="Next project"
          >
            <svg
              className={combineClasses(
                "w-6 h-6",
                themeClasses.text.secondary(isDarkMode)
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ?
                    "bg-gray-900 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-12">
          <button
            className={combineClasses(
              "px-8 py-3 rounded-md transition-colors duration-200",
              "bg-blue-600 text-white hover:bg-blue-700"
            )}
          >
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
}
