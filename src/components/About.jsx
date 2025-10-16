import { useTheme } from '../contexts/ThemeContext.jsx';
import { themeClasses, combineClasses } from '../utils/themeClasses.js';

export default function About({ isVisible }) {
  const { isDarkMode } = useTheme();

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Database Design', level: 85 },
    { name: 'Cloud Services (AWS/Azure)', level: 75 }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'Senior Software Engineer',
      description: 'Leading full-stack development projects and mentoring junior developers'
    },
    {
      year: '2023',
      title: 'Product Launch Success',
      description: 'Successfully launched 3 major products serving 10K+ users'
    },
    {
      year: '2022',
      title: 'Technical Innovation Award',
      description: 'Recognized for implementing scalable architecture solutions'
    }
  ];

  return (
    <section className={combineClasses(
      'py-20 px-6',
      themeClasses.bg.secondary(isDarkMode),
      themeClasses.transition
    )} data-section="about" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <div className={combineClasses(
            'text-sm font-medium mb-2 transition-colors duration-300',
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          )}>About Me</div>
          <h2 className={combineClasses(
            'text-4xl font-bold mb-4 transition-colors duration-300',
            isDarkMode ? 'text-white' : 'text-gray-900'
          )}>
            Passionate about creating digital solutions
          </h2>
          <p className={combineClasses(
            'max-w-2xl text-lg transition-colors duration-300',
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          )}>
            Software engineer and product manager with a passion for building innovative technology solutions that make a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story & Photo */}
          <div className={`transition-all duration-1000 delay-200 ease-out ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-10'
          }`}>
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className={combineClasses(
                'w-64 h-64 rounded-2xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 group relative overflow-hidden',
                isDarkMode ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-100 to-gray-200'
              )}>
                {/* Placeholder for actual photo */}
                <div className={combineClasses(
                  'w-32 h-32 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300',
                  isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                )}>
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                {/* Overlay with contact info */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl flex items-end justify-center pb-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="text-white font-medium">Yusuf Labi</p>
                    <p className="text-gray-200 text-sm">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Story */}
            <div className="space-y-6">
              <div>
                <h3 className={combineClasses(
                  'text-2xl font-bold mb-4 transition-colors duration-300',
                  isDarkMode ? 'text-white' : 'text-gray-900'
                )}>My Journey</h3>
                <p className={combineClasses(
                  'mb-4 leading-relaxed transition-colors duration-300',
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                )}>
                  With over 5 years of experience in software development, I've had the privilege of working on diverse projects 
                  ranging from e-commerce platforms to AI-powered applications. My journey began with a curiosity about how 
                  technology can solve real-world problems.
                </p>
                <p className={combineClasses(
                  'mb-4 leading-relaxed transition-colors duration-300',
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                )}>
                  I specialize in full-stack development with a strong focus on React, Node.js, and modern cloud technologies. 
                  Beyond coding, I'm passionate about product strategy and user experience design, believing that great 
                  technology should be both powerful and intuitive.
                </p>
                <p className={combineClasses(
                  'leading-relaxed transition-colors duration-300',
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                )}>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge through technical writing and mentoring.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4">
                <a href="mailto:yuslabibalogun2705@gmail.com" className={combineClasses(
                  'flex items-center px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105',
                  isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email
                </a>
                <a href="https://www.linkedin.com/in/yusuf-balogun-9476b931a" className={combineClasses(
                  'flex items-center px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105',
                  isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/yustech-alt" className={combineClasses(
                  'flex items-center px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105',
                  isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Skills & Achievements */}
          <div className={`space-y-12 transition-all duration-1000 delay-400 ease-out ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-10'
          }`}>
            {/* Skills Section */}
            <div>
              <h3 className={combineClasses(
                'text-2xl font-bold mb-6 transition-colors duration-300',
                isDarkMode ? 'text-white' : 'text-gray-900'
              )}>Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={combineClasses(
                        'font-medium transition-colors duration-300',
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      )}>{skill.name}</span>
                      <span className={combineClasses(
                        'text-sm transition-colors duration-300',
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      )}>{skill.level}%</span>
                    </div>
                    <div className={combineClasses(
                      'w-full h-2 rounded-full',
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                    )}>
                      <div 
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Timeline */}
            <div>
              <h3 className={combineClasses(
                'text-2xl font-bold mb-6 transition-colors duration-300',
                isDarkMode ? 'text-white' : 'text-gray-900'
              )}>Key Achievements</h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={combineClasses(
                      'flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm',
                      isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                    )}>
                      {achievement.year}
                    </div>
                    <div className="flex-1">
                      <h4 className={combineClasses(
                        'font-semibold mb-1 transition-colors duration-300',
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      )}>{achievement.title}</h4>
                      <p className={combineClasses(
                        'text-sm transition-colors duration-300',
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      )}>{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className={combineClasses(
              'p-6 rounded-xl border-2 border-dashed transition-colors duration-300',
              isDarkMode ? 'border-gray-600 bg-gray-800/50' : 'border-gray-300 bg-gray-50'
            )}>
              <h4 className={combineClasses(
                'font-bold mb-2 transition-colors duration-300',
                isDarkMode ? 'text-white' : 'text-gray-900'
              )}>Let's Work Together</h4>
              <p className={combineClasses(
                'text-sm mb-4 transition-colors duration-300',
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              )}>
                I'm always interested in new opportunities and exciting projects. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <div className="flex space-x-3">
                <button className={combineClasses(
                  'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105',
                  themeClasses.button.primary(isDarkMode)
                )}>
                  Get in Touch
                </button>
                <button className={combineClasses(
                  'px-4 py-2 border rounded-md text-sm font-medium transition-all duration-200 hover:scale-105',
                  themeClasses.button.secondary(isDarkMode)
                )}>
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
