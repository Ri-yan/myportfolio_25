import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tag } from 'lucide-react';
import BlogHeader from '../components/blog/BlogHeader';
import BlogCard from '../components/blog/BlogCard';
import { getPostsByTag, searchPosts } from '../data/blogData';

const BlogTagPage: React.FC = () => {
  const { tag } = useParams<{ tag: string }>();
  const navigate = useNavigate();
  
  const [posts, setPosts] = useState<any[]>([]);
  
  useEffect(() => {
    if (tag) {
      setPosts(getPostsByTag(tag));
    }
  }, [tag]);
  
  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/blog?search=${encodeURIComponent(query)}`);
    }
  };

  if (!tag) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-light">
      <BlogHeader onSearch={handleSearch} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Tag size={24} className="text-indigo-600 mr-2" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              #{tag}
            </h1>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse all articles tagged with #{tag}
          </p>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No posts found</h2>
            <p className="text-gray-500">There are no posts with this tag yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogTagPage;