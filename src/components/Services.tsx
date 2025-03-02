import React from 'react';
import { Palette, Layout, PenTool, Film, Printer, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette size={40} className="text-indigo-600 mb-4" />,
      title: 'Branding & Identity',
      description: 'Develop a unique and memorable brand identity that resonates with your target audience and sets you apart from competitors.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
      icon: <Layout size={40} className="text-indigo-600 mb-4" />,
      title: 'UI/UX Design',
      description: 'Create intuitive, user-friendly interfaces that enhance user experience and drive engagement across web and mobile platforms.',
      features: ['Website Design', 'Mobile App Design', 'Wireframing', 'Prototyping']
    },
    {
      icon: <PenTool size={40} className="text-indigo-600 mb-4" />,
      title: 'Illustration',
      description: 'Custom illustrations that bring your ideas to life, adding personality and visual interest to your brand or project.',
      features: ['Digital Illustration', 'Character Design', 'Icon Design', 'Editorial Illustration']
    },
    {
      icon: <Film size={40} className="text-indigo-600 mb-4" />,
      title: 'Motion Graphics',
      description: 'Dynamic motion graphics and animations that capture attention and effectively communicate your message.',
      features: ['Logo Animation', 'Explainer Videos', 'Social Media Content', 'UI Animation']
    },
    {
      icon: <Printer size={40} className="text-indigo-600 mb-4" />,
      title: 'Print Design',
      description: 'High-quality print materials that make a lasting impression and effectively communicate your brand message.',
      features: ['Business Cards', 'Brochures', 'Packaging', 'Posters & Flyers']
    },
    {
      icon: <Globe size={40} className="text-indigo-600 mb-4" />,
      title: 'Digital Marketing',
      description: 'Visually compelling digital marketing assets that drive engagement and conversions across various platforms.',
      features: ['Social Media Graphics', 'Email Templates', 'Banner Ads', 'Digital Campaigns']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Services</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I offer a comprehensive range of design services to help businesses and individuals establish a strong visual presence and connect with their audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                {service.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 bg-indigo-600 rounded-xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to bring your vision to life?</h3>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create designs that not only look great but also achieve your business goals and connect with your audience.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-indigo-600 font-medium px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;