import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPostCategory } from '../../store/slices/blogsMethods';

const CategoryList: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {getPostCategory().map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link
              to={`/blog/categories/${category.slug}`}
              className="block h-full rounded-2xl bg-white dark:bg-navy-light border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00F5A0] group-hover:to-[#00D9F5] group-hover:bg-clip-text transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {category.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
