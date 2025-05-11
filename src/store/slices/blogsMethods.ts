import { blogPosts, categories } from "../../data/blogData";
import { blogPostsDemo, categoriesDemo } from "../../data/blogData.demo";
import { BlogPost, Category } from "../../types/blog.types";
var dataBlogs: any = import.meta.env.VITE_MODE === 'demo' ? blogPostsDemo : blogPosts;
var dataBlogsCategories: any = import.meta.env.VITE_MODE === 'demo' ?categoriesDemo: categories ;

export const getPostCategory = (): Category[] => {
  return dataBlogsCategories;
};
export const getFeaturedPosts = (): BlogPost[] => {
  return dataBlogs.filter((post:any) => post.featured);
};

export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return [...dataBlogs]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return dataBlogs.find((post:any) => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return dataBlogs.filter((post:any) => post.categories.includes(category));
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return dataBlogs.filter((post:any) => post.tags.includes(tag));
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return dataBlogs.filter((post:any) => 
    post.title.toLowerCase().includes(lowercaseQuery) || 
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some((tag:any) => tag.toLowerCase().includes(lowercaseQuery)) ||
    post.categories.some((category:any) => category.toLowerCase().includes(lowercaseQuery))
  );
};

export const getRelatedPosts = (postId: string, limit: number = 3): BlogPost[] => {
  const post = dataBlogs.find((p:any) => p.id === postId);
  if (!post) return [];
  
  // Find posts with similar categories or tags
  const relatedPosts = dataBlogs
    .filter((p :any)=> p.id !== postId) // Exclude current post
    .map((p:any) => {
      const categoryOverlap = p.categories.filter((category:any) => 
        post.categories.includes(category)
      ).length;
      
      const tagOverlap = p.tags.filter((tag:any) => 
        post.tags.includes(tag)
      ).length;
      
      return {
        post: p,
        relevanceScore: categoryOverlap * 2 + tagOverlap // Categories weighted higher
      };
    })
    .filter((item:any) => item.relevanceScore > 0)
    .sort((a:any, b:any) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);
  
  return relatedPosts.map((item:any) => item.post);
};