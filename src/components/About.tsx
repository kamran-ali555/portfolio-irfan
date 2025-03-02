import React from 'react';
import irfanimg from '../components/images/erfan.png';

const About = () => {
  const skills = [
    { name: 'Branding & Identity', level: 95 },
    { name: 'UI/UX Design', level: 90 },
    { name: 'Illustration', level: 85 },
    { name: 'Motion Graphics', level: 80 },
    { name: 'Print Design', level: 88 },
    { name: 'Photography', level: 75 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img 
              src={irfanimg}
                // src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Designer at work" 
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-indigo-200 rounded-full -z-10"></div>
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Hello, I'm Irfan Ali Shah</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With over 8 years of experience in graphic design, I've had the privilege of working with clients across various industries, from startups to established brands. My passion lies in creating meaningful designs that not only look beautiful but also solve real problems and connect with audiences.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              My design philosophy centers around the belief that great design should be both functional and emotionally resonant. I approach each project with curiosity, empathy, and a commitment to excellence, ensuring that every pixel serves a purpose.
            </p>
            
            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">My Skills</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="text-3xl font-bold text-indigo-600">8+</h5>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="text-3xl font-bold text-indigo-600">120+</h5>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="text-3xl font-bold text-indigo-600">50+</h5>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="text-3xl font-bold text-indigo-600">12</h5>
                <p className="text-gray-600 text-sm">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;