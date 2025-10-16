import { combineClasses, themeClasses } from "../utils/themeClasses.js";

export function Footer({ isDarkMode }) {
  return (
    <footer
      className={combineClasses(
        "py-16 px-6",
        themeClasses.bg.secondary(isDarkMode),
        themeClasses.transition
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <div
              className={combineClasses(
                "text-2xl font-bold italic mb-4",
                themeClasses.text.primary(isDarkMode),
                themeClasses.transition
              )}
            >
              YusLabi
            </div>
            <p
              className={combineClasses(
                "mb-6",
                themeClasses.text.secondary(isDarkMode),
                themeClasses.transition
              )}
            >
              Stay updated with the latest insights and technology trends
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className={combineClasses(
                  "flex-1 px-4 py-3 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                  isDarkMode ?
                    "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                )}
              />
              <button
                className={combineClasses(
                  "px-6 py-3 rounded-r-md",
                  themeClasses.button.primary(isDarkMode),
                  themeClasses.transition
                )}
              >
                Subscribe
              </button>
            </div>
            <p
              className={combineClasses(
                "text-xs mt-2",
                themeClasses.text.muted(isDarkMode),
                themeClasses.transition
              )}
            >
              By subscribing, you agree to our privacy policy and consent to
              receive updates
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3
              className={combineClasses(
                "font-semibold mb-4",
                themeClasses.text.primary(isDarkMode),
                themeClasses.transition
              )}
            >
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    themeClasses.transition
                  )}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    themeClasses.transition
                  )}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    themeClasses.transition
                  )}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    themeClasses.transition
                  )}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    themeClasses.transition
                  )}
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3
              className={combineClasses(
                "font-semibold mb-4",
                themeClasses.text.primary(isDarkMode),
                themeClasses.transition
              )}
            >
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    themeClasses.transition
                  )}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    themeClasses.transition
                  )}
                >
                  Case studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    themeClasses.transition
                  )}
                >
                  White papers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    themeClasses.transition
                  )}
                >
                  Connect
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    themeClasses.transition
                  )}
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3
              className={combineClasses(
                "font-semibold mb-4",
                themeClasses.text.primary(isDarkMode),
                themeClasses.transition
              )}
            >
              Social
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg
                  className={combineClasses(
                    "w-4 h-4 mr-2",
                    themeClasses.text.secondary(isDarkMode)
                  )}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                <a
                  href="#"
                  className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    themeClasses.transition
                  )}
                >
                  Twitter
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className={combineClasses(
                    "w-4 h-4 mr-2",
                    themeClasses.text.secondary(isDarkMode)
                  )}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <a
                  href="#"
                  className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    themeClasses.transition
                  )}
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className={combineClasses(
                    "w-4 h-4 mr-2",
                    themeClasses.text.secondary(isDarkMode)
                  )}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <a
                  href="#"
                  className={combineClasses(
                    themeClasses.text.secondary(isDarkMode),
                    "hover:text-blue-600 dark:hover:text-blue-400",
                    themeClasses.transition
                  )}
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className={combineClasses(
            "border-t pt-8 flex flex-col md:flex-row justify-between items-center",
            themeClasses.border.primary(isDarkMode)
          )}
        >
          <p
            className={combineClasses(
              "text-sm mb-4 md:mb-0",
              themeClasses.text.secondary(isDarkMode),
              themeClasses.transition
            )}
          >
            © 2024 YusLabi Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className={combineClasses(
                themeClasses.text.secondary(isDarkMode),
                "hover:text-blue-600 dark:hover:text-blue-400",
                themeClasses.transition
              )}
            >
              Privacy policy
            </a>
            <a
              href="#"
              className={combineClasses(
                themeClasses.text.secondary(isDarkMode),
                "hover:text-blue-600 dark:hover:text-blue-400",
                themeClasses.transition
              )}
            >
              Terms of service
            </a>
            <a
              href="#"
              className={combineClasses(
                themeClasses.text.secondary(isDarkMode),
                "hover:text-blue-600 dark:hover:text-blue-400",
                themeClasses.transition
              )}
            >
              Cookie settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
