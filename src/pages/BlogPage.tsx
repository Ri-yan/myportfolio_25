import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogHeader from "../components/blog/BlogHeader";
import FeaturedPost from "../components/blog/FeaturedPost";
import BlogCard from "../components/blog/BlogCard";
import CategoryList from "../components/blog/CategoryList";
import SearchResults from "../components/blog/SearchResults";
import { BlogPost } from "../types/blog.types";
import {
  getFeaturedPosts,
  getRecentPosts,
  searchPosts,
} from "../store/slices/blogsMethods";
import { useTheme } from "../context/ThemeContext";

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
  const { darkMode } = useTheme();
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts(6);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      setSearchResults(searchPosts(query));
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className=" bg-gray-50 dark:bg-navy-light">
      <BlogHeader onSearch={handleSearch} />

      <main className="container mx-auto px-4 pb-16 pt-10">
        {searchQuery ? (
          <SearchResults query={searchQuery} results={searchResults} />
        ) : (
          <>
            {/* Featured Post */}
            {featuredPosts.length > 0 && (
              <FeaturedPost post={featuredPosts[0]} />
            )}

            {/* Categories */}
            <CategoryList />

            {/* Recent Posts */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-primary">
                  Recent Articles
                </h2>

                <motion.a
                  href="#"
                  className="text-primary hover:text-primary/90 font-medium flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  View all articles
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="bg-dark-light rounded-xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                  Stay updated with our newsletter
                </h2>
                <p className="text-light-dark mb-6 text-gray-400">
                  Get the latest articles, resources and updates right in your
                  inbox.
                </p>

                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-dark border border-dark-lighter text-light placeholder-light-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-dark font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default BlogPage;
