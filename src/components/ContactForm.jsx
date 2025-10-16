import { useState } from 'react';
import { combineClasses, themeClasses } from '../utils/themeClasses.js';

export function ContactForm({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className={combineClasses(
        "py-20 px-6 relative overflow-hidden",
        themeClasses.bg.primary(isDarkMode),
        themeClasses.transition
      )}
      id="contact"
    >
      {/* Contact Background */}
      <div className="absolute inset-0">
        <div className={combineClasses(
          'absolute inset-0 opacity-20',
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-indigo-900/30' 
            : 'bg-gradient-to-br from-gray-50 via-blue-50/20 to-indigo-50/30'
        )}></div>
        
        {/* Contact-themed shapes */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-blue-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-500/5 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-purple-500/5 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className={combineClasses(
            "text-4xl font-bold mb-4 transition-colors duration-300",
            isDarkMode ? "text-white" : "text-gray-900"
          )}>
            Let's Work Together
          </h2>
          <p className={combineClasses(
            "text-lg max-w-2xl mx-auto transition-colors duration-300",
            isDarkMode ? "text-gray-300" : "text-gray-600"
          )}>
            Ready to bring your project to life? Send me a message and let's discuss how I can help you build something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className={combineClasses(
                "text-2xl font-bold mb-6 transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}>
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={combineClasses(
                    "w-12 h-12 rounded-lg flex items-center justify-center",
                    isDarkMode ? "bg-blue-600" : "bg-blue-100"
                  )}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className={combineClasses(
                      "font-medium transition-colors duration-300",
                      isDarkMode ? "text-white" : "text-gray-900"
                    )}>Email</p>
                    <p className={combineClasses(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}>yuslabibalogun2705@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={combineClasses(
                    "w-12 h-12 rounded-lg flex items-center justify-center",
                    isDarkMode ? "bg-blue-600" : "bg-blue-100"
                  )}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className={combineClasses(
                      "font-medium transition-colors duration-300",
                      isDarkMode ? "text-white" : "text-gray-900"
                    )}>LinkedIn</p>
                    <p className={combineClasses(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}>linkedin.com/in/yusuf-balogun</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={combineClasses(
                    "w-12 h-12 rounded-lg flex items-center justify-center",
                    isDarkMode ? "bg-blue-600" : "bg-blue-100"
                  )}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className={combineClasses(
                      "font-medium transition-colors duration-300",
                      isDarkMode ? "text-white" : "text-gray-900"
                    )}>GitHub</p>
                    <p className={combineClasses(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}>github.com/yustech-alt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={combineClasses(
            "p-8 rounded-xl border",
            isDarkMode 
              ? "bg-gray-800/50 border-gray-700" 
              : "bg-white border-gray-200"
          )}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={combineClasses(
                    "block text-sm font-medium mb-2",
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  )}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={combineClasses(
                      "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200",
                      isDarkMode 
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    )}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className={combineClasses(
                    "block text-sm font-medium mb-2",
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  )}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={combineClasses(
                      "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200",
                      isDarkMode 
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    )}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className={combineClasses(
                  "block text-sm font-medium mb-2",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={combineClasses(
                    "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200",
                    isDarkMode 
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  )}
                  placeholder="Project discussion, collaboration, etc."
                />
              </div>
              
              <div>
                <label className={combineClasses(
                  "block text-sm font-medium mb-2",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={combineClasses(
                    "w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none",
                    isDarkMode 
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  )}
                  placeholder="Tell me about your project, timeline, and how I can help..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Sorry, there was an error sending your message. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={combineClasses(
                  "w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                  isSubmitting ? "animate-pulse" : "hover:scale-105"
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
