import { useTheme } from '../contexts/ThemeContext.jsx';
import { themeClasses, combineClasses } from '../utils/themeClasses.js';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={combineClasses(
      'flex items-center justify-between px-6 py-4 border-b',
      themeClasses.bg.primary(isDarkMode),
      themeClasses.border.primary(isDarkMode),
      themeClasses.transition
    )}>
      {/* Logo */}
      <div className={combineClasses(
        'text-2xl font-bold italic',
        themeClasses.text.primary(isDarkMode),
        themeClasses.transition
      )}>
        Logo
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#work" className={combineClasses(
          'relative px-3 py-2 rounded-md',
          themeClasses.text.navLink(isDarkMode),
          themeClasses.transition,
          'hover:bg-gray-100 dark:hover:bg-gray-800'
        )}>
          Work
        </a>
        <a href="#projects" className={combineClasses(
          'relative px-3 py-2 rounded-md',
          themeClasses.text.navLink(isDarkMode),
          themeClasses.transition,
          'hover:bg-gray-100 dark:hover:bg-gray-800'
        )}>
          Projects
        </a>
        <a href="#about" className={combineClasses(
          'relative px-3 py-2 rounded-md border-2 border-green-500',
          themeClasses.text.navLink(isDarkMode),
          themeClasses.transition,
          'hover:bg-green-50 dark:hover:bg-green-900/20'
        )}>
          About
        </a>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <a href="#contact" className={combineClasses(
            'px-3 py-2 rounded-md',
            themeClasses.text.navLink(isDarkMode),
            themeClasses.transition,
            'hover:bg-gray-100 dark:hover:bg-gray-800'
          )}>
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={combineClasses(
            'p-2 rounded-lg',
            themeClasses.button.theme(isDarkMode),
            themeClasses.transitionAll
          )}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>

        {/* Resume Button */}
        <button className={combineClasses(
          'px-4 py-2 rounded-md',
          themeClasses.text.navLink(isDarkMode),
          themeClasses.transition,
          'hover:bg-gray-100 dark:hover:bg-gray-800'
        )}>
          Resume
        </button>

        {/* Hire Button */}
        <button className={combineClasses(
          'px-6 py-2 rounded-md',
          themeClasses.button.primary(isDarkMode),
          themeClasses.transitionAll
        )}>
          Hire
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className={combineClasses(
          'p-2 rounded-md',
          themeClasses.text.primary(isDarkMode),
          themeClasses.transition
        )}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
