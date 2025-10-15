import { useTheme } from '../contexts/ThemeContext.jsx';
import { themeClasses, combineClasses } from '../utils/themeClasses.js';

const SkillsSection = ({ isVisible }) => {
  const { isDarkMode } = useTheme();

  const skills = [
    {
      icon: '⚙️',
      title: 'Software engineering',
      description: 'Crafting digital solutions that solve real-world problems'
    },
    {
      icon: '📊',
      title: 'Product management',
      description: 'Transforming ideas into scalable and impactful products'
    },
    {
      icon: '🎯',
      title: 'Skills',
      description: 'Technical expertise across multiple programming languages'
    },
    {
      icon: '💼',
      title: 'Experience',
      description: 'Proven track record of delivering complex technical projects'
    }
  ];

  return (
    <section className={combineClasses(
      'py-20 px-6',
      themeClasses.bg.secondary(isDarkMode),
      themeClasses.transition
    )} data-section="skills">
      <div className="max-w-7xl mx-auto">
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={combineClasses(
                'p-6 rounded-lg transition-all duration-1000 ease-out',
                `delay-${(index + 1) * 100}`,
                isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
                themeClasses.bg.card(isDarkMode),
                'hover:shadow-lg',
                themeClasses.transition
              )}
            >
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h3 className={combineClasses(
                'text-lg font-semibold mb-3',
                themeClasses.text.primary(isDarkMode),
                themeClasses.transition
              )}>
                {skill.title}
              </h3>
              <p className={combineClasses(
                'text-sm leading-relaxed',
                themeClasses.text.secondary(isDarkMode),
                themeClasses.transition
              )}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className={combineClasses(
            'text-lg mb-8',
            themeClasses.text.primary(isDarkMode),
            themeClasses.transition
          )}>
            Seeking new challenges Let's connect
          </p>
          <div className="flex justify-center space-x-4">
            <button className={combineClasses(
              'px-6 py-3 rounded-md',
              themeClasses.button.primary(isDarkMode),
              themeClasses.transitionAll,
              'transform hover:scale-105'
            )}>
              Get in Touch
            </button>
            <button className={combineClasses(
              'px-6 py-3 border rounded-md',
              themeClasses.button.secondary(isDarkMode),
              themeClasses.transitionAll,
              'transform hover:scale-105'
            )}>
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
