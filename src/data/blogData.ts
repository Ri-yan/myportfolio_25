import { BlogPost, Category } from '../types/blog.types';
import one from "../assets/1.png";

export const categories: Category[] = [
  {
    id: '1',
    name: 'Technology',
    slug: 'technology',
    description: 'Latest news and insights about technology trends and innovations.',
  },
  {
    id: '2',
    name: 'Design',
    slug: 'design',
    description: 'Articles about UI/UX design, graphic design, and design thinking.',
  },
  {
    id: '3',
    name: 'Development',
    slug: 'development',
    description: 'Programming tutorials, coding tips, and development best practices.',
  },
  {
    id: '4',
    name: 'Business',
    slug: 'business',
    description: 'Insights on entrepreneurship, startups, and business strategies.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript in 2025',
    slug: 'getting-started-with-react-typescript-2025',
    excerpt: 'Learn how to set up a modern React application with TypeScript, including best practices and the latest features.',
    content: `
# Getting Started with React and TypeScript in 2025

React continues to evolve as one of the most popular frontend libraries, and TypeScript has become the standard for type-safe JavaScript development. In this post, we'll explore how to set up a modern React application with TypeScript in 2025.

## Setting Up Your Development Environment

First, make sure you have the latest version of Node.js installed. Then, create a new React project with TypeScript using Vite:

\`\`\`bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
\`\`\`

## Key Features to Leverage

### React 18 Features

React 18 introduced several powerful features that you should be using in your applications:

- **Concurrent Rendering**: Allows React to prepare multiple versions of the UI at the same time.
- **Automatic Batching**: Improves performance by batching state updates.
- **Transitions**: Distinguish between urgent and non-urgent updates.

### TypeScript 5 Benefits

TypeScript 5 brings several improvements:

- **Decorators**: The new decorator implementation is now standard.
- **const Type Parameters**: Allows you to enforce that type parameters are treated as literal types.
- **Better Performance**: Faster type checking and compilation.

## Best Practices

1. Use functional components with hooks
2. Implement proper type definitions
3. Leverage React context for state management
4. Write unit tests for components

## Conclusion

Starting a new React project with TypeScript in 2025 has never been easier. The ecosystem has matured significantly, providing developers with powerful tools and patterns to build robust applications.
    `,
    coverImage: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      id: '1',
      name: 'Riyan',
      avatar: one,
      bio: 'Senior Frontend Developer specializing in React and TypeScript.',
    },
    categories: ['Technology', 'Development'],
    tags: ['React', 'TypeScript', 'Web Development', 'Frontend'],
    publishedAt: '2025-04-15T14:30:00Z',
    readingTime: 6,
    featured: true,
  },
  {
    id: '2',
    title: 'The Future of UI Design: Trends to Watch in 2025',
    slug: 'future-of-ui-design-trends-2025',
    excerpt: 'Explore the emerging UI design trends that are shaping the digital landscape in 2025.',
    content: `
# The Future of UI Design: Trends to Watch in 2025

As we progress through 2025, several UI design trends are emerging that promise to redefine digital experiences. Let's explore the most significant trends that designers should pay attention to.

## 1. Spatial Interfaces

With the rise of AR and VR technologies, spatial interfaces are becoming increasingly important. These interfaces extend beyond the traditional 2D screen, creating immersive experiences that blend the digital and physical worlds.

## 2. Advanced Micro-interactions

Micro-interactions have evolved from simple feedback mechanisms to sophisticated elements that guide users through complex workflows. They now incorporate more advanced animations and contextual awareness.

## 3. Adaptive Color Systems

Modern UI designs are moving beyond static color schemes to adaptive color systems that respond to:
- User preferences
- Time of day
- Content context
- Accessibility needs

## 4. Voice and Gesture Integration

Voice interfaces and gesture controls are becoming standard components of UI design, requiring designers to think beyond visual elements.

## 5. Ethical and Inclusive Design

Design ethics and inclusivity are no longer optional considerations. Successful UI designs in 2025 prioritize:
- Accessibility for all users
- Reduced cognitive load
- Privacy-first interaction patterns
- Cultural sensitivity

## Conclusion

The UI design landscape continues to evolve rapidly in 2025. Designers who embrace these emerging trends while focusing on user needs will create the most compelling and effective digital experiences.
    `,
    coverImage: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      id: '2',
      name: 'Riyan',
      avatar: one,
      bio: 'UX/UI Designer with over 10 years of experience in product design.',
    },
    categories: ['Design'],
    tags: ['UI Design', 'Design Trends', 'UX', 'Product Design'],
    publishedAt: '2025-04-02T10:15:00Z',
    readingTime: 5,
    featured: true,
  },
  {
    id: '3',
    title: 'Building Performant Web Applications with Modern JavaScript',
    slug: 'building-performant-web-applications-modern-javascript',
    excerpt: 'Learn techniques and best practices for building high-performance web applications using modern JavaScript.',
    content: `
# Building Performant Web Applications with Modern JavaScript

Performance is a critical aspect of web development that directly impacts user experience. In this post, we'll explore strategies for building high-performance web applications using modern JavaScript.

## Code Splitting and Lazy Loading

One of the most effective ways to improve initial load time is by implementing code splitting and lazy loading:

\`\`\`javascript
// React example with lazy loading
import React, { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
\`\`\`

## Optimizing Rendering Performance

Use efficient rendering techniques:

1. **Virtualized Lists**: When rendering long lists, only render items that are visible in the viewport.
2. **Memoization**: Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders.
3. **Web Workers**: Offload heavy computations to background threads.

## Modern JavaScript Features for Performance

Leverage modern JavaScript features that can improve performance:

- **Optional Chaining**: Simplify and speed up property access through potentially undefined objects.
- **Nullish Coalescing**: Provide default values only for null or undefined.
- **Array Methods**: Use built-in methods like map, filter, and reduce for efficient data transformations.

## Measuring and Monitoring Performance

Always measure performance to identify bottlenecks:

1. Use the Performance API to measure critical metrics.
2. Implement Real User Monitoring (RUM) to collect performance data from actual users.
3. Set up automated performance testing in your CI/CD pipeline.

## Conclusion

Building performant web applications requires a combination of best practices, modern techniques, and continuous measurement. By implementing these strategies, you can create fast, responsive applications that provide an excellent user experience.
    `,
    coverImage: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      id: '3',
      name: 'Riyan',
      avatar: one,
      bio: 'Performance engineer and JavaScript expert focused on web optimization.',
    },
    categories: ['Development', 'Technology'],
    tags: ['JavaScript', 'Performance', 'Web Development', 'Optimization'],
    publishedAt: '2025-03-28T09:45:00Z',
    readingTime: 7,
    featured: false,
  },
  {
    id: '4',
    title: 'The Rise of AI in Modern Business Operations',
    slug: 'rise-of-ai-modern-business-operations',
    excerpt: 'Discover how artificial intelligence is transforming business operations across industries.',
    content: `
# The Rise of AI in Modern Business Operations

Artificial intelligence has moved beyond the realm of science fiction to become an integral part of modern business operations. In this post, we'll examine how AI is transforming various aspects of business and what it means for the future of work.

## Automating Routine Tasks

One of the most significant impacts of AI is the automation of routine, repetitive tasks:

- **Document Processing**: AI-powered OCR and NLP systems can extract and categorize information from documents.
- **Customer Support**: Chatbots and virtual assistants handle common customer inquiries.
- **Data Entry**: Automated systems can populate databases and CRMs without human intervention.

## Enhancing Decision Making

AI is revolutionizing how businesses make decisions:

1. **Predictive Analytics**: AI models can forecast trends, customer behavior, and market changes.
2. **Risk Assessment**: Machine learning algorithms can identify potential risks and recommend mitigation strategies.
3. **Resource Allocation**: AI can optimize how businesses allocate resources based on predicted demand.

## Transforming Customer Experiences

AI is creating more personalized and responsive customer experiences:

- **Personalized Recommendations**: AI analyzes customer behavior to provide tailored recommendations.
- **Dynamic Pricing**: Algorithms adjust prices based on demand, competition, and customer value.
- **Sentiment Analysis**: AI monitors customer sentiment across channels to identify issues and opportunities.

## Challenges and Considerations

While AI offers tremendous benefits, businesses must address several challenges:

1. **Ethical Implications**: Ensuring AI systems are fair, transparent, and used responsibly.
2. **Workforce Transition**: Helping employees adapt to changing roles and develop new skills.
3. **Implementation Costs**: Balancing the significant investment required with expected returns.

## Conclusion

AI is fundamentally changing how businesses operate, creating opportunities for increased efficiency, better decision-making, and enhanced customer experiences. Organizations that successfully integrate AI into their operations while addressing the associated challenges will be well-positioned for success in the evolving business landscape.
    `,
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      id: '4',
      name: 'Riyan',
      avatar: one,
      bio: 'Business strategy consultant specializing in AI transformation.',
    },
    categories: ['Business', 'Technology'],
    tags: ['AI', 'Business Strategy', 'Automation', 'Future of Work'],
    publishedAt: '2025-03-21T13:20:00Z',
    readingTime: 8,
    featured: false,
  },
  {
    id: '5',
    title: 'Mastering CSS Grid for Complex Layouts',
    slug: 'mastering-css-grid-complex-layouts',
    excerpt: 'Learn how to use CSS Grid to create sophisticated, responsive layouts with less code.',
    content: `
# Mastering CSS Grid for Complex Layouts

CSS Grid has revolutionized web layout design, making it possible to create complex, responsive layouts with relatively simple code. This post will help you master CSS Grid for your projects.

## Grid Fundamentals

Let's start with the basics:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 200px auto;
  gap: 20px;
}
\`\`\`

This creates a 3-column grid with rows of varying heights and 20px gaps between all cells.

## Creating Complex Layouts

CSS Grid truly shines when creating complex layouts:

\`\`\`css
.complex-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header header header header"
    "sidebar main main main"
    "sidebar footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

This creates a layout with a full-width header, a sidebar spanning the left column, main content taking up three columns, and a footer spanning the bottom three columns.

## Advanced Grid Techniques

### Auto-Fit and Auto-Fill

These powerful features allow you to create responsive layouts without media queries:

\`\`\`css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
\`\`\`

This will automatically fit as many columns as possible that are at least 250px wide.

### Grid Alignment

Control the alignment of items within their grid cells:

\`\`\`css
.align-example {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center; /* Horizontal alignment */
  align-items: center; /* Vertical alignment */
}

.specific-item {
  justify-self: end; /* Override for a specific item */
  align-self: start;
}
\`\`\`

## Practical Examples

### Magazine Layout

\`\`\`css
.magazine {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 16px;
}

.feature-article {
  grid-column: 1 / span 4;
  grid-row: 1 / span 2;
}

.sidebar {
  grid-column: 5 / span 2;
  grid-row: 1 / span 3;
}
\`\`\`

## Conclusion

CSS Grid provides a powerful and intuitive way to create sophisticated layouts. By mastering these techniques, you can create more complex designs with less code, resulting in cleaner, more maintainable stylesheets.
    `,
    coverImage: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      id: '5',
      name: 'Riyan',
      avatar:one,
      bio: 'Frontend developer and CSS specialist with a passion for clean, accessible code.',
    },
    categories: ['Development', 'Design'],
    tags: ['CSS', 'Web Development', 'Frontend', 'Responsive Design'],
    publishedAt: '2025-03-15T11:10:00Z',
    readingTime: 9,
    featured: false,
  },
];

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.categories.includes(category));
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) || 
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    post.categories.some(category => category.toLowerCase().includes(lowercaseQuery))
  );
};

export const getRelatedPosts = (postId: string, limit: number = 3): BlogPost[] => {
  const post = blogPosts.find(p => p.id === postId);
  if (!post) return [];
  
  // Find posts with similar categories or tags
  const relatedPosts = blogPosts
    .filter(p => p.id !== postId) // Exclude current post
    .map(p => {
      const categoryOverlap = p.categories.filter(category => 
        post.categories.includes(category)
      ).length;
      
      const tagOverlap = p.tags.filter(tag => 
        post.tags.includes(tag)
      ).length;
      
      return {
        post: p,
        relevanceScore: categoryOverlap * 2 + tagOverlap // Categories weighted higher
      };
    })
    .filter(item => item.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);
  
  return relatedPosts.map(item => item.post);
};