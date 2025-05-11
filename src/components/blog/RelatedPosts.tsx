import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogPost } from '../../types/blog.types';

interface RelatedPostsProps {
  posts: BlogPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  return (
    <section className="py-10 px-6 md:px-10 border-t border-gray-100 mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <motion.article 
            key={post.id}
            className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link to={`/blog/${post.slug}`} className="block" role="link">
              <div className="h-40 overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={`Cover image for ${post.title}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                
                <span className="text-indigo-600 text-sm font-medium">
                  Read article → 
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
