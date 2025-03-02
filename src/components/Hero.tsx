import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
            Transforming Ideas Into <span className="text-indigo-400">Visual Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delay">
            Award-winning graphic designer creating meaningful brands and digital experiences that connect with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <a 
              href="#portfolio" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-full font-medium flex items-center justify-center transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;