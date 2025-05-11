import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogHeader from '../components/blog/BlogHeader';
import BlogDetail from '../components/blog/BlogDetail';
import { getPostBySlug, getRelatedPosts, searchPosts } from '../store/slices/blogsMethods';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = post ? getRelatedPosts(post.id, 3) : [];
  
  useEffect(() => {
    // Scroll to top when post changes
    window.scrollTo(0, 0);
    
    // If post not found, redirect to blog index
    if (slug && !post) {
      navigate('/blog');
    }
  }, [slug, post, navigate]);
  
  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/blog?search=${encodeURIComponent(query)}`);
    }
  };

  if (!post) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-light text-gray-900 dark:text-light">

      <BlogHeader onSearch={handleSearch} />
      
      <main className="container mx-auto px-4 py-8">
        <BlogDetail post={post} relatedPosts={relatedPosts} />
      </main>
    </div>
  );
};

export default BlogPostPage;