import React, { useState } from 'react';
import { Github, Linkedin, Mail, Twitter, ArrowUp, MapPin, Phone, Calendar } from 'lucide-react';
import { WavesPattern } from './Patterns';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialLinks = [
    { name: 'github', url: 'https://github.com', icon: <Github className="w-5 h-5" /> },
    { name: 'linkedin', url: 'https://linkedin.com', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'twitter', url: 'https://twitter.com', icon: <Twitter className="w-5 h-5" /> },
    { name: 'mail', url: 'mailto:isaactonyloi@gmail.com', icon: <Mail className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <WavesPattern />
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-gray-700/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Stay in the Loop
            </h3>
            <p className="text-gray-400 mb-8">
              Subscribe to my newsletter for tech insights, project updates, and development tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full 
                           border border-gray-700/50 focus:outline-none focus:ring-2 
                           focus:ring-violet-500 text-gray-200 transition-all duration-300
                           hover:bg-gray-800/70"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full 
                           hover:shadow-lg hover:shadow-violet-600/20 transition-all duration-200 
                           font-medium whitespace-nowrap transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Isaac<span className="text-violet-500">.</span>
            </h3>
            <p className="text-gray-400">
              Backend Developer, Technical Writer & Big Data Expert crafting efficient solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className={`text-gray-400 transition-all duration-300 transform ${
                    hoveredIcon === link.name
                      ? 'text-violet-400 scale-125'
                      : 'hover:text-violet-500 hover:scale-110'
                  }`}
                  onMouseEnter={() => setHoveredIcon(link.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-violet-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-violet-500 transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-violet-500 transition-colors">Projects</a></li>
              <li><a href="#companies" className="text-gray-400 hover:text-violet-500 transition-colors">Companies</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-violet-500 transition-colors">Backend Development</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-violet-500 transition-colors">Technical Writing</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-violet-500 transition-colors">Big Data Solutions</a></li>
              <li><a href="#startup-projects" className="text-gray-400 hover:text-violet-500 transition-colors">Startup Projects</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-violet-500" />
                <span>San Francisco, CA</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-violet-500" />
                <a href="mailto:isaactonyloi@gmail.com" className="hover:text-violet-500 transition-colors">
                  isaactonyloi@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-violet-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Calendar className="w-5 h-5 text-violet-500" />
                <span>Mon - Fri: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Isaac Tonyloi. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <a href="#privacy" className="text-gray-400 hover:text-violet-500 transition-colors text-sm mx-4">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-violet-500 transition-colors text-sm mx-4">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="ml-4 p-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-400 
                         hover:text-violet-400 hover:bg-gray-700/50 transform hover:-translate-y-1 
                         transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}