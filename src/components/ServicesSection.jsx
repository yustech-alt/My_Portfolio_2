import { useTheme } from '../contexts/ThemeContext.jsx';
import { themeClasses, combineClasses } from '../utils/themeClasses.js';

const ServicesSection = ({ isVisible }) => {
  const { isDarkMode } = useTheme();

  const services = [
    {
      id: "01",
      category: "Software",
      title: "Custom software solutions for modern businesses",
      description: "Developing robust and scalable applications that solve complex business challenges. Leveraging cutting-edge technologies to create innovative digital products.",
      links: ["View services", "Discuss project"]
    },
    {
      id: "02", 
      category: "Product management",
      title: "Strategic product development and innovation",
      description: "Transforming ideas into market-ready products through comprehensive research, user-centric design, and strategic planning.",
      links: ["Explore approach", "Book consultation"]
    },
    {
      id: "03",
      category: "Technical consulting", 
      title: "Expert guidance for technology transformation",
      description: "Providing strategic insights and technical recommendations to help businesses leverage technology for competitive advantage.",
      links: ["Get started", "Start project"]
    }
  ];

  return (
    <section className={combineClasses(
      'py-20 px-6',
      themeClasses.bg.secondary(isDarkMode),
      themeClasses.transition
    )} data-section="services">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={combineClasses(
                'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out',
                `delay-${(index + 1) * 300}`,
                isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              )}
            >
              <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                <div className="text-sm text-orange-600 font-medium mb-2">
                  {service.id} {service.category}
                </div>
                <h2 className={combineClasses(
                  'text-4xl font-bold mb-4',
                  themeClasses.text.primary(isDarkMode),
                  themeClasses.transition
                )}>
                  {service.title}
                </h2>
                <p className={combineClasses(
                  'mb-6',
                  themeClasses.text.secondary(isDarkMode),
                  themeClasses.transition
                )}>
                  {service.description}
                </p>
                <div className="flex space-x-6">
                  {service.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className={combineClasses(
                        'underline',
                        themeClasses.text.link(isDarkMode),
                        themeClasses.transition
                      )}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              <div className={combineClasses(
                'flex justify-center transition-all duration-1000 delay-200 ease-out',
                index % 2 === 1 ? 'order-1 lg:order-2' : '',
                isVisible.services ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              )}>
                <div className={combineClasses(
                  'w-80 h-64 rounded-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group',
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                )}>
                  <div className={combineClasses(
                    'w-16 h-16 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300',
                    isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                  )}>
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
