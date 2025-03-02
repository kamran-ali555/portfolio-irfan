import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Eco-Friendly Brand Identity',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Complete brand identity for an eco-conscious startup.'
    },
    {
      id: 2,
      title: 'Mobile App Interface',
      category: 'ui-ux',
      image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'User interface design for a fitness tracking application.'
    },
    {
      id: 3,
      title: 'Character Illustration Series',
      category: 'illustration',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      description: 'Series of character illustrations for a childrens book.'
    },
    {
      id: 4,
      title: 'Corporate Annual Report',
      category: 'print',
      image: 'https://images.unsplash.com/photo-1596638787647-904d822d751e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      description: 'Annual report design for a Fortune 500 company.'
    },
    {
      id: 5,
      title: 'E-commerce Website Redesign',
      category: 'ui-ux',
      image: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
      description: 'Complete redesign of an e-commerce platform.'
    },
    {
      id: 6,
      title: 'Product Packaging Design',
      category: 'print',
      image: 'https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      description: 'Packaging design for a premium skincare line.'
    },
    {
      id: 7,
      title: 'Logo Collection',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      description: 'Collection of logo designs for various clients.'
    },
    {
      id: 8,
      title: 'Digital Marketing Campaign',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Comprehensive digital campaign for a product launch.'
    },
    {
      id: 9,
      title: 'Abstract Art Series',
      category: 'illustration',
      image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Series of abstract digital illustrations.'
    },
  ];
  
  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'branding', label: 'Branding' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'illustration', label: 'Illustration' },
    { id: 'print', label: 'Print Design' },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a selection of my best work across various design disciplines, showcasing my versatility and creative approach.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === filter.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                <a 
                  href="#" 
                  className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm py-2 px-4 rounded-full transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-indigo-600 text-xs font-medium py-1 px-3 rounded-full capitalize">
                {project.category.replace('-', '/')}
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium px-8 py-3 rounded-full transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;