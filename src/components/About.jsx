import { useTheme } from '../contexts/ThemeContext.jsx';
import { themeClasses, combineClasses } from '../utils/themeClasses.js';
import profile from '../assets/img/profile.png';

export default function About({ isVisible }) {
  const { isDarkMode } = useTheme();

  const skills = [
    { name: 'React/Next.js/TypeScript', level: 95 },
    { name: 'Node.js/Express/MongoDB', level: 0},
    { name: 'Python/Django/FastAPI', level: 10 },
    { name: 'AWS/Docker/Kubernetes', level: 0},
    { name: 'PostgreSQL/Redis/GraphQL', level: 0 },
    { name: 'Git/CI-CD/Agile/Scrum', level: 30 }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'Senior Full-Stack Developer',
      description: 'Led development of 5+ enterprise applications, mentored 3 junior developers, improved system performance by 40%'
    },
    {
      year: '2023',
      title: 'Product Launch Success',
      description: 'Delivered 3 major products serving 15K+ active users, achieved 99.9% uptime, reduced load times by 60%'
    },
    {
      year: '2022',
      title: 'Technical Architecture Lead',
      description: 'Designed microservices architecture serving 50K+ requests/day, reduced deployment time by 75%'
    }
  ];

  return (
    <section className={combineClasses(
      'py-20 px-6 relative overflow-hidden',
      themeClasses.bg.secondary(isDarkMode),
      themeClasses.transition
    )} data-section="about" id="about">
      {/* Professional Animated Background */}
      <div className="absolute inset-0">
        {/* Professional workspace background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&crop=entropy&auto=format&q=80)`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        ></div>
        
        {/* Base gradient overlay */}
        <div className={combineClasses(
          'absolute inset-0 opacity-90',
          isDarkMode 
            ? 'bg-gradient-to-tr from-gray-900 via-slate-800/95 to-blue-900/80' 
            : 'bg-gradient-to-tr from-white via-blue-50/95 to-indigo-50/80'
        )}></div>
        
        {/* Animated geometric elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-l from-indigo-500/3 to-cyan-500/3 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-500/3 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating dots */}
        <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-blue-400/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-purple-400/15 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-indigo-400/15 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
        
        {/* Subtle lines pattern */}
        <div className={combineClasses(
          'absolute inset-0 opacity-3',
          'bg-[linear-gradient(90deg,_rgba(59,130,246,0.1)_1px,_transparent_1px),_linear-gradient(rgba(59,130,246,0.1)_1px,_transparent_1px)]',
          'bg-[length:100px_100px]'
        )}></div>
        
        {/* Moving gradient orbs */}
        <div className="absolute top-1/3 left-1/6 w-64 h-64 bg-gradient-to-r from-blue-500/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-gradient-to-l from-purple-500/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '5s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
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
            Transforming Ideas Into Scalable Solutions
          </h2>
          <p className={combineClasses(
            'max-w-2xl text-lg transition-colors duration-300',
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          )}>
            Full-stack developer with 1+ years of experience building enterprise applications and leading product development. 
            I specialize in React, Node.js, and cloud architecture, delivering solutions that scale from startup to enterprise.
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
              <div className="relative">
                {/* Decorative background elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur-md"></div>
                
                <div className={combineClasses(
                  'w-64 h-64 rounded-2xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border-2',
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 border-gray-600/50' 
                    : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 border-gray-200/50'
                )}>
                  <img
                    src={profile}
                    alt="Yusuf Labi - Software Engineer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Enhanced overlay with better styling */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-end justify-center pb-6">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-bold text-lg">YusLabi</p>
                      <p className="text-gray-200 text-sm font-medium">Software Engineer</p>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-2"></div>
                    </div>
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
                  With over 1 year of experience in software development, I've had the privilege of working on diverse projects 
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
            {/* Skills Section - Learning Journey */}
            <div>
              <h3 className={combineClasses(
                'text-2xl font-bold mb-4 transition-colors duration-300',
                isDarkMode ? 'text-white' : 'text-gray-900'
              )}>Technical Skills & Learning Journey</h3>
              <p className={combineClasses(
                'text-sm mb-6 transition-colors duration-300',
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              )}>
                Currently focused on mastering React and expanding into full-stack development
              </p>
              
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const getSkillStatus = (level) => {
                    if (level >= 80) return { status: 'Expert', color: 'from-green-500 to-emerald-600', bgColor: isDarkMode ? 'bg-green-900/30' : 'bg-green-50' };
                    if (level >= 50) return { status: 'Proficient', color: 'from-blue-500 to-indigo-600', bgColor: isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50' };
                    if (level >= 20) return { status: 'Learning', color: 'from-yellow-500 to-orange-600', bgColor: isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-50' };
                    if (level > 0) return { status: 'Beginner', color: 'from-purple-500 to-pink-600', bgColor: isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50' };
                    return { status: 'Planned', color: 'from-gray-400 to-gray-500', bgColor: isDarkMode ? 'bg-gray-800/30' : 'bg-gray-100' };
                  };
                  
                  const skillInfo = getSkillStatus(skill.level);
                  
                  return (
                    <div key={index} className={combineClasses(
                      'p-4 rounded-xl border transition-all duration-300 hover:shadow-lg',
                      skillInfo.bgColor,
                      isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'
                    )}>
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <span className={combineClasses(
                            'font-semibold transition-colors duration-300',
                            isDarkMode ? 'text-gray-200' : 'text-gray-800'
                          )}>{skill.name}</span>
                          <span className={combineClasses(
                            'px-2 py-1 text-xs font-medium rounded-full',
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-600'
                          )}>
                            {skillInfo.status}
                          </span>
                        </div>
                        {skill.level > 0 && (
                          <span className={combineClasses(
                            'text-sm font-medium',
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          )}>{skill.level}%</span>
                        )}
                      </div>
                      
                      {skill.level > 0 ? (
                        <div className={combineClasses(
                          'w-full h-2 rounded-full',
                          isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                        )}>
                          <div 
                            className={`h-2 bg-gradient-to-r ${skillInfo.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${index * 150}ms`
                            }}
                          />
                        </div>
                      ) : (
                        <div className={combineClasses(
                          'flex items-center space-x-2 text-sm',
                          isDarkMode ? 'text-gray-500' : 'text-gray-500'
                        )}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          <span>Next on my learning roadmap</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Learning Goals */}
              <div className={combineClasses(
                'mt-8 p-6 rounded-xl border-2 border-dashed transition-all duration-300',
                isDarkMode ? 'border-blue-700/50 bg-blue-900/10' : 'border-blue-300/50 bg-blue-50/50'
              )}>
                <h4 className={combineClasses(
                  'font-semibold mb-3 flex items-center',
                  isDarkMode ? 'text-blue-300' : 'text-blue-700'
                )}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  2024 Learning Goals
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className={combineClasses(
                    'flex items-center space-x-2 text-sm',
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  )}>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Master Node.js & Express</span>
                  </div>
                  <div className={combineClasses(
                    'flex items-center space-x-2 text-sm',
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  )}>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Learn AWS & Cloud Architecture</span>
                  </div>
                  <div className={combineClasses(
                    'flex items-center space-x-2 text-sm',
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  )}>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Database Design & PostgreSQL</span>
                  </div>
                  <div className={combineClasses(
                    'flex items-center space-x-2 text-sm',
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  )}>
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>DevOps & CI/CD Pipelines</span>
                  </div>
                </div>
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
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-75"></div>
              <div className={combineClasses(
                'relative p-6 rounded-xl border transition-all duration-300 backdrop-blur-sm',
                isDarkMode 
                  ? 'border-gray-600/50 bg-gray-800/80 hover:bg-gray-800/90' 
                  : 'border-gray-200/50 bg-white/80 hover:bg-white/90'
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
                <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-blue-500/50">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Get in Touch</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                </button>
                <button className={combineClasses(
                  'group px-6 py-3 border-2 font-medium rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-3',
                  isDarkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 focus:ring-gray-500/50' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-400/50'
                )}>
                  <span className="flex items-center space-x-2">
                    <span>Download CV</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
