import React from 'react';
import { Search, Lightbulb, PenTool, Layers, CheckCircle, Zap } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Search size={32} className="text-white" />,
      title: 'Discovery',
      description: 'I begin by understanding your business, goals, target audience, and project requirements through in-depth research and consultation.',
      color: 'bg-indigo-600'
    },
    {
      icon: <Lightbulb size={32} className="text-white" />,
      title: 'Ideation',
      description: 'Next, I brainstorm concepts and develop creative strategies that align with your brand and effectively communicate your message.',
      color: 'bg-indigo-500'
    },
    {
      icon: <PenTool size={32} className="text-white" />,
      title: 'Design',
      description: 'I create initial designs and prototypes, focusing on aesthetics, functionality, and user experience to bring the concept to life.',
      color: 'bg-indigo-400'
    },
    {
      icon: <Layers size={32} className="text-white" />,
      title: 'Refinement',
      description: 'Based on your feedback, I refine and iterate on the designs until they perfectly match your vision and project requirements.',
      color: 'bg-indigo-500'
    },
    {
      icon: <CheckCircle size={32} className="text-white" />,
      title: 'Delivery',
      description: 'Once approved, I prepare and deliver the final assets in all required formats, ensuring theyre ready for implementation.',
      color: 'bg-indigo-600'
    },
    {
      icon: <Zap size={32} className="text-white" />,
      title: 'Support',
      description: 'I provide ongoing support and guidance to ensure a smooth implementation and address any questions or concerns.',
      color: 'bg-indigo-700'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Creative Process</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I follow a structured yet flexible approach to ensure each project is completed efficiently while meeting the highest standards of quality and creativity.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className={`${step.color} p-6 flex justify-center`}>
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{index + 1}. {step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Approach */}
        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Approach to Design</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-indigo-600 mb-2">User-Centered Design</h4>
                  <p className="text-gray-600">
                    I place the end user at the center of every design decision, ensuring that the final product not only looks great but also provides an intuitive and enjoyable experience.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-indigo-600 mb-2">Strategic Thinking</h4>
                  <p className="text-gray-600">
                    Every design choice is made with purpose, aligning with your business goals and brand strategy to create meaningful and effective visual communication.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-indigo-600 mb-2">Attention to Detail</h4>
                  <p className="text-gray-600">
                    I believe that excellence lies in the details. From pixel-perfect alignment to thoughtful color choices, every element is carefully considered and refined.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-indigo-600 mb-2">Collaborative Process</h4>
                  <p className="text-gray-600">
                    I value your input and feedback throughout the design process, fostering a collaborative relationship that leads to the best possible outcome for your project.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Design process" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;