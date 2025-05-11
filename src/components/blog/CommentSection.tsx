import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, MessageSquare } from 'lucide-react';
import { BlogComment } from '../../types/blog.types';

interface CommentSectionProps {
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<BlogComment[]>([
    {
      id: '1',
      postId: postId,
      author: {
        name: 'John Smith',
        email: 'john@example.com',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      content: 'This is such a great article! I learned a lot from it.',
      createdAt: '2025-04-15T15:30:00Z'
    },
    {
      id: '2',
      postId: postId,
      author: {
        name: 'Jane Doe',
        email: 'jane@example.com',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      content: "I've been looking for a clear explanation on this topic for ages. Thanks for breaking it down so well!",
      createdAt: '2025-04-15T18:15:00Z'
    }
  ]);
  
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    content: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    content: ''
  });
  
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      content: ''
    };
    
    if (!newComment.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!newComment.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(newComment.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    
    if (!newComment.content.trim()) {
      newErrors.content = 'Comment is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const newCommentObj: BlogComment = {
      id: Date.now().toString(),
      postId,
      author: {
        name: newComment.name,
        email: newComment.email,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(newComment.name)}&background=random`
      },
      content: newComment.content,
      createdAt: new Date().toISOString()
    };
    
    setComments([...comments, newCommentObj]);
    
    // Reset form
    setNewComment({
      name: '',
      email: '',
      content: ''
    });
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="mt-12 pt-10 border-t border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
        <MessageSquare size={24} className="mr-2" />
        Comments ({comments.length})
      </h2>
      
      {/* Comment List */}
      <div className="space-y-6 mb-10">
        {comments.map((comment, index) => (
          <motion.div 
            key={comment.id}
            className="bg-gray-50 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={comment.author.avatar} 
                  alt={comment.author.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{comment.author.name}</h4>
                  <span className="text-sm text-gray-500">{formatDate(comment.createdAt)}</span>
                </div>
                
                <p className="text-gray-700">{comment.content}</p>
                
                <button className="mt-3 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                  Reply
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Comment Form */}
      <motion.div 
        className="bg-gray-50 p-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Leave a comment</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name*
              </label>
              <input
                type="text"
                id="name"
                className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                value={newComment.name}
                onChange={(e) => setNewComment({...newComment, name: e.target.value})}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email* (will not be published)
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                value={newComment.email}
                onChange={(e) => setNewComment({...newComment, email: e.target.value})}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Comment*
            </label>
            <textarea
              id="comment"
              rows={4}
              className={`w-full px-4 py-2 border ${errors.content ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
              value={newComment.content}
              onChange={(e) => setNewComment({...newComment, content: e.target.value})}
            ></textarea>
            {errors.content && <p className="mt-1 text-sm text-red-500">{errors.content}</p>}
          </div>
          
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            Post Comment
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default CommentSection;