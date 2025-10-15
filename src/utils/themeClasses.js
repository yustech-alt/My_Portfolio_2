// Theme utility classes for consistent styling across components

export const themeClasses = {
  // Background colors
  bg: {
    primary: (isDark) => isDark ? 'bg-gray-900' : 'bg-white',
    secondary: (isDark) => isDark ? 'bg-gray-800' : 'bg-gray-50',
    card: (isDark) => isDark ? 'bg-gray-800' : 'bg-white',
    hover: (isDark) => isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50',
  },

  // Text colors
  text: {
    primary: (isDark) => isDark ? 'text-white' : 'text-gray-900',
    secondary: (isDark) => isDark ? 'text-gray-300' : 'text-gray-600',
    muted: (isDark) => isDark ? 'text-gray-400' : 'text-gray-500',
    link: (isDark) => isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700',
    navLink: (isDark) => isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900',
  },

  // Border colors
  border: {
    primary: (isDark) => isDark ? 'border-gray-700' : 'border-gray-200',
    secondary: (isDark) => isDark ? 'border-gray-600' : 'border-gray-300',
  },

  // Button styles
  button: {
    primary: (isDark) => isDark ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-900 text-white hover:bg-gray-800',
    secondary: (isDark) => isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50',
    theme: (isDark) => isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
  },

  // Common transition
  transition: 'transition-colors duration-300',
  transitionAll: 'transition-all duration-300',
};

// Helper function to get theme classes
export const getThemeClass = (category, variant, isDark) => {
  return themeClasses[category]?.[variant]?.(isDark) || '';
};

// Combined class helper
export const combineClasses = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
