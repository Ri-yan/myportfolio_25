import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User, Tag } from 'lucide-react';
import { BlogPost } from '../../types/blog.types';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  index?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false, index = 0 }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.article
      className={`bg-white dark:bg-navy-light rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/blog/${post.slug}`} className="block group">
        <div className="relative h-48 md:h-64 overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {featured && (
            <span className="absolute top-4 right-4 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-black px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
              Featured
            </span>
          )}
        </div>
      </Link>

      <div className="p-5 md:p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((category) => (
            <Link
              key={category}
              to={`/blog/categories/${category.toLowerCase()}`}
              className="text-xs font-semibold bg-navy-light dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>

        <Link to={`/blog/${post.slug}`} className="block group">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00F5A0] group-hover:to-[#00D9F5] group-hover:bg-clip-text">
            {post.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        </Link>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            <span>{post.author.name}</span>
          </div>

          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{post.readingTime} min read</span>
          </div>

          {post.tags.length > 0 && (
            <div className="hidden md:flex items-center">
              <Tag size={16} className="mr-1" />
              <span>{post.tags[0]}</span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
