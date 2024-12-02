import React from 'react';
import { Code2, FileText, Database, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { GridPattern, CirclesPattern } from './Patterns';

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Completed', value: '100+' },
  { label: 'Lines of Code', value: '1M+' },
  { label: 'Documentation Pages', value: '5K+' }
];

const technologies = [
  'Python', 'SQL', 'Java', 'Apache Spark', 'Kubernetes', 'Docker',
  'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Kafka', 'Hadoop'
];

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      {/* Background Patterns */}
      <GridPattern />
      <CirclesPattern />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-violet-100 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/isaactony" className="text-gray-600 hover:text-violet-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/isaactonyloi/" className="text-gray-600 hover:text-violet-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://x.com/Isaactonyloi" className="text-gray-600 hover:text-violet-600 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          {/* Main Title */}
          <h1 className="text-[4rem] md:text-[5rem] font-bold leading-tight mb-8 text-center">
            Backend Developer, Technical Writer &{' '}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Big Data Expert
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
            I design and code beautifully simple things, and I love what I do. With expertise in scalable systems,
            technical documentation, and data engineering.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-6 mb-20">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg flex items-center space-x-2"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 border-2 border-violet-600 text-violet-600 rounded-full hover:bg-violet-50 transition-all duration-200 transform hover:-translate-y-1"
            >
              View Projects
            </a>
          </div>

          {/* Profile Image with Floating Icons */}
          <div className="relative w-48 h-48 mx-auto mb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <img
              src="https://www.upwork.com/profile-portraits/c1xcdfGMpXvcKB4XwTIwPcnSmSCg34E5zCPNqHRnie--Xn_8s9IaBCxiiJ2d8Z-SgB"
              alt="Profile"
              className="rounded-full w-full h-full object-cover border-4 border-white shadow-xl relative z-10"
            />
            {/* Floating Icons */}
            <div className="absolute -left-8 -top-8 bg-white p-3 rounded-full shadow-lg animate-float">
              <Code2 className="w-6 h-6 text-violet-600" />
            </div>
            <div className="absolute -right-8 -top-8 bg-white p-3 rounded-full shadow-lg animate-float delay-100">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg animate-float delay-200">
              <Database className="w-6 h-6 text-emerald-600" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-violet-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm text-gray-600 border border-gray-200 hover:border-violet-300 hover:text-violet-600 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}