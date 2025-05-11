import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogPage from '../pages/BlogPage';
import BlogPostPage from '../pages/BlogPostPage';
import BlogCategoryPage from '../pages/BlogCategoryPage';
import BlogTagPage from '../pages/BlogTagPage';

const BlogRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogPage />} />
      <Route path="/:slug" element={<BlogPostPage />} />
      <Route path="/categories/:slug" element={<BlogCategoryPage />} />
      <Route path="/tags/:tag" element={<BlogTagPage />} />
    </Routes>
  );
};

export default BlogRoutes;