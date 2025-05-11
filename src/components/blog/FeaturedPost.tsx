import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, User, Calendar } from "lucide-react";
import { BlogPost } from "../../types/blog.types";

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  const formattedDate = new Date(post?.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.article
      className=" group relative h-[500px] md:h-[600px] rounded-xl overflow-hidden mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((category) => (
            <Link
              key={category}
              to={`/blog/categories/${category.toLowerCase()}`}
              className="text-xs md:text-sm font-medium bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-1 rounded-full transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>

        <Link to={`/blog/${post.slug}`}>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 hover:text-indigo-300 transition-colors"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {post.title}
          </motion.h1>
        </Link>

        <motion.p
          className="text-white/80 text-lg md:text-xl mb-6 md:w-3/4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {post.excerpt}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 md:gap-8 text-white/70 text-sm md:text-base"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center">
            <User size={18} className="mr-2" />
            <span>{post.author.name}</span>
          </div>

          <div className="flex items-center">
            <Calendar size={18} className="mr-2" />
            <span>{formattedDate}</span>
          </div>

          <div className="flex items-center">
            <Clock size={18} className="mr-2" />
            <span>{post.readingTime} min read</span>
          </div>
        </motion.div>

        <motion.div
          className="mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to={`/blog/${post.slug}`}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            Read Article
          </Link>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default FeaturedPost;
