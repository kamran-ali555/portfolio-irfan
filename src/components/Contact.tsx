import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you. Fill out the form below or reach out directly through any of the provided contact methods.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="yourgmail@gmail.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-indigo-600 text-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:hello@artfolio.com" className="text-indigo-200 hover:text-white transition-colors">
                      irfanalishah@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+15551234567" className="text-indigo-200 hover:text-white transition-colors">
                      +92 355 4405198
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-indigo-200">
                      Gilgit, pakistan
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Linkedin size={20} />
                  </a>
                  {/* <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                    <Github size={20} />
                  </a> */}
                </div>
              </div>
            </div>
            
            {/* Availability */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Current Availability</h3>
              <p className="text-gray-600 mb-4">
                I'm currently available for freelance projects and accepting new clients for Q3 2025.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-700 font-medium">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map or Additional CTA */}
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Create Something Amazing Together</h3>
              <p className="text-gray-600 mb-6">
                Whether you need a complete brand identity, a website redesign, or custom illustrations, I'm here to help bring your vision to life with creative solutions tailored to your specific needs.
              </p>
              <a 
                href="#" 
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300"
              >
                Download My Resume
              </a>
            </div>
            
            <div className="relative min-h-[300px] bg-gray-200">
              {/* This would typically be a map or image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 text-center px-4">
                  {/* [Map would be displayed here] */}
                  <iframe className=" sm:w-[750px] md:w-[750px] lg:w-[630px] xl:w-[750px] min-h-[300px] lg:min-h-[320px] xl:min-h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182580.25976990483!2d74.20714245054646!3d35.91003874592398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e649e3642543b1%3A0x40fd0ca3ca17282b!2sGilgit!5e1!3m2!1sen!2s!4v1740944277056!5m2!1sen!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;