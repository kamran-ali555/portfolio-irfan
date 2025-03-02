import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ArrowUp, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github, Send } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'process', label: 'Process' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-indigo-600 flex items-center">
            <span className="text-3xl mr-2">✦</span>
            <span>Irfan Hussain Shah</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors duration-300 hover:text-indigo-600 ${
                  activeSection === link.id ? 'text-indigo-600' : 'text-gray-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2">
              {navLinks.map(link => (
                <a 
                  key={link.id}
                  href={`#${link.id}`}
                  className={`block py-3 text-sm font-medium transition-colors duration-300 hover:text-indigo-600 ${
                    activeSection === link.id ? 'text-indigo-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Process />
        <Blog />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-2">✦</span>
                <span>Irfan Hussain Shah</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Creating meaningful designs that inspire and connect with your audience.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a> */}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <a 
                      href={`#${link.id}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Branding</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Illustration</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Motion Graphics</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Print Design</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">irfanhussainshah@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">+92 355 4405198</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">Gilgit, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} irfanhussainshah. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors mr-6">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      {scrollY > 500 && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;