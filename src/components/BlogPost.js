import "./BlogPostStyles.css";
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogData from './BlogData';
import { marked } from 'marked';

const BlogPost = () => {
  const { id } = useParams();
  const post = BlogData.find(post => post.id === id);
  
  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-error">
          <h2>Post Not Found</h2>
          <p>Sorry, the blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="blog-back-btn">Back to Blog</Link>
        </div>
      </div>
    );
  }
  
  // Format the date nicely
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Convert markdown to HTML
  const createMarkup = () => {
    return { __html: marked(post.content) };
  };

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <div className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-date">{formatDate(post.date)}</p>
          
          {post.tags && (
            <div className="blog-post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="blog-post-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
        
        {post.image && (
          <div className="blog-post-image-container">
            <img src={post.image} alt={post.title} className="blog-post-img"/>
          </div>
        )}
        
        <div className="blog-post-content" dangerouslySetInnerHTML={createMarkup()} />
        
        <div className="blog-post-footer">
          <Link to="/blog" className="blog-back-btn">Back to Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;