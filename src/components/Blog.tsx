import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'The Importance of Brand Consistency Across Platforms',
      excerpt: 'Discover why maintaining a consistent brand identity across all touchpoints is crucial for building recognition and trust with your audience.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'June 15, 2025',
      category: 'Branding',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Color Psychology in UI Design: How Colors Influence User Behavior',
      excerpt: 'An exploration of how different colors can affect user emotions and behaviors, and how to leverage this knowledge in your UI design.',
      image: 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'May 28, 2025',
      category: 'UI/UX Design',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'From Concept to Creation: The Evolution of a Logo Design',
      excerpt: 'A behind-the-scenes look at my creative process for developing a memorable and effective logo, from initial sketches to final delivery.',
      image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      date: 'April 10, 2025',
      category: 'Case Study',
      readTime: '10 min read'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Design Insights</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore articles, case studies, and design tips where I share my knowledge and insights from years of experience in the design industry.
          </p>
        </div>
        
        {/* Featured Article */}
        <div className="mb-16 bg-gray-50 rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" 
                alt="Featured article" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">Featured</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-500 text-sm">May 5, 2025</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-500 text-sm">12 min read</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Future of Design: Trends to Watch in 2025 and Beyond</h3>
              
              <p className="text-gray-600 mb-6">
                As technology evolves and user expectations shift, the design landscape continues to transform. In this comprehensive article, I explore emerging design trends that are shaping the future of visual communication, from immersive experiences to sustainable design practices.
              </p>
              
              <a 
                href="#" 
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
              >
                Read Full Article
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Recent Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium px-8 py-3 rounded-full transition-colors duration-300"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;