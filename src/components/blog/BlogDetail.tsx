import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from 'lucide-react';
import { BlogPost } from '../../types/blog.types';
import MarkdownRenderer from './MarkdownRenderer';
import RelatedPosts from './RelatedPosts';
import CommentSection from './CommentSection';

interface BlogDetailProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post, relatedPosts }) => {
  const navigate = useNavigate();
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <motion.article 
      className="bg-white rounded-xl overflow-hidden max-w-4xl mx-auto shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 border-b border-gray-100">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to articles</span>
        </button>
      </div>
      
      {/* Featured Image */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6 md:p-10">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map(category => (
            <Link 
              key={category} 
              to={`/blog/categories/${category.toLowerCase()}`}
              className="text-xs font-medium bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-600 px-3 py-1 rounded-full transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
        
        {/* Title */}
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {post.title}
        </motion.h1>
        
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-500 text-sm border-b border-gray-100 pb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Link 
                to={`/blog/author/${post.author.id}`}
                className="font-medium text-gray-900 hover:text-indigo-600 transition-colors"
              >
                {post.author.name}
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            <span>{formattedDate}</span>
          </div>
          
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        
        {/* Article Actions */}
        <div className="flex justify-end gap-3 mb-8">
          <button 
            onClick={sharePost}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-indigo-500 hover:text-indigo-600 transition-colors"
          >
            <Share2 size={16} />
            <span className="hidden md:inline">Share</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-indigo-500 hover:text-indigo-600 transition-colors">
            <Bookmark size={16} />
            <span className="hidden md:inline">Save</span>
          </button>
        </div>
        
        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <MarkdownRenderer content={post.content} />
        </div>
        
        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Link 
                key={tag} 
                to={`/blog/tags/${tag.toLowerCase()}`}
                className="text-sm bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Author */}
        <div className="mt-10 p-6 bg-gray-50 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Link 
                to={`/blog/author/${post.author.id}`}
                className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors"
              >
                {post.author.name}
              </Link>
              <p className="text-gray-600 mt-1">{post.author.bio}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-12">
          <RelatedPosts posts={relatedPosts} />
        </div>
      )}
      
      {/* Comments Section */}
      <div className="px-6 md:px-10 pb-10">
        <CommentSection postId={post.id} />
      </div>
    </motion.article>
  );
};

export default BlogDetail;