import React, { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'Working with Alex was a game-changer for our brand. The new identity perfectly captures our companys vision and has received overwhelmingly positive feedback from our clients and partners. The attention to detail and strategic thinking behind each design decision was impressive.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Marketing Director, Elevate Brands',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'The UI/UX design for our app exceeded our expectations. Alex has a unique ability to balance aesthetics with functionality, creating interfaces that are not only beautiful but also intuitive and user-friendly. Our user engagement metrics have improved significantly since the redesign.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder, Bloom Cosmetics',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      quote: 'The packaging design Alex created for our product line has been instrumental in our retail success. The designs stand out on shelves and perfectly communicate our brands values of sustainability and luxury. The collaborative process was smooth, and Alex was receptive to feedback while providing expert guidance.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Wilson',
      position: 'Creative Director, Pulse Media',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      quote: 'As someone who works in the creative field, I have high standards for design work. Alex not only met but exceeded those standards. The illustrations created for our campaign were original, on-brand, and effectively communicated our message. I appreciate the professionalism and creative vision throughout the project.',
      rating: 4
    },
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>
        
        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          {/* Current Testimonial */}
          <div className="bg-gray-50 rounded-xl p-8 mx-5 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              
              <div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
        
        {/* Clients Logos */}
        <div className="mt-20">
          <h3 className="text-center text-lg font-semibold text-gray-700 mb-8">Trusted by companies worldwide</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            {/* These would typically be actual client logos */}
            <div className="text-2xl font-bold text-gray-400">ACME Inc.</div>
            <div className="text-2xl font-bold text-gray-400">TechCorp</div>
            <div className="text-2xl font-bold text-gray-400">Elevate</div>
            <div className="text-2xl font-bold text-gray-400">Pulse</div>
            <div className="text-2xl font-bold text-gray-400">Bloom</div>
            <div className="text-2xl font-bold text-gray-400">Vertex</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;