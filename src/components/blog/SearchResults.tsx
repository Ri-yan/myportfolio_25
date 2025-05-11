import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import BlogCard from './BlogCard';
import { BlogPost } from '../../types/blog.types';

interface SearchResultsProps {
  query: string;
  results: BlogPost[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, results }) => {
  return (
    <section className="mb-12">
      <div className="flex items-center mb-8">
        <Search size={24} className="text-gray-500 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">
          Search Results for "{query}"
        </h2>
      </div>
      
      {results.length === 0 ? (
        <motion.div 
          className="text-center py-16 bg-gray-50 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-3">No results found</h3>
          <p className="text-gray-500">
            We couldn't find any posts matching your search. Try using different keywords.
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchResults;