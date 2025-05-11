import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogHeader from "../components/blog/BlogHeader";
import BlogCard from "../components/blog/BlogCard";
import { getPostCategory, getPostsByCategory } from "../store/slices/blogsMethods";
import { Category } from "../types/blog.types";

const BlogCategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [category, setCategory] = useState<Category | undefined>();
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    if (slug) {
      const foundCategory = getPostCategory().find((cat) => cat.slug === slug);
      if (foundCategory) {
        setCategory(foundCategory);
        setPosts(getPostsByCategory(foundCategory.name));
      } else {
        navigate("/blog");
      }
    }
  }, [slug, navigate]);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/blog?search=${encodeURIComponent(query)}`);
    }
  };

  if (!category) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#1e293b] transition-colors duration-300">
      <BlogHeader onSearch={handleSearch} />

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block group">
            <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text text-transparent">
              {category.name}
            </span>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            {category.description}
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
              No posts found
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              There are no posts in this category yet.
            </p>
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

export default BlogCategoryPage;
