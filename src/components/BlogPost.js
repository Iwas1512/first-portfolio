import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogData from './BlogData';
import Navbar from './Navbar';
import Footer from './Footer';
import "./BlogPostStyles.css";

const BlogPost = () => {
  const { id } = useParams();
  const post = BlogData.find(post => post.id === id);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-background"></div>
        <Navbar />
        <div className="blog-post-error">
          <h2>Post Not Found</h2>
          <p>Sorry, we couldn't find the blog post you're looking for.</p>
          <Link to="/blog" className="btn">Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Format the date nicely
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Convert markdown-style content to proper HTML
  const createMarkupContent = () => {
    // Replace markdown-style headers and paragraphs with HTML
    let htmlContent = post.content;
    
    // Handle headers (from h1 to h3)
    htmlContent = htmlContent.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
    htmlContent = htmlContent.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    htmlContent = htmlContent.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    
    // Handle lists
    htmlContent = htmlContent.replace(/^- (.*?)$/gm, '<li>$1</li>');
    
    // Handle paragraphs (any line that's not already converted)
    // First, split by line breaks
    const lines = htmlContent.split('\n');
    let inList = false;
    
    // Process each line
    const processedLines = lines.map(line => {
      // Skip lines that are already wrapped in HTML tags
      if (line.match(/^<[a-z1-6]+>.*<\/[a-z1-6]+>$/)) {
        return line;
      }
      
      // Skip empty lines
      if (line.trim() === '') {
        return '';
      }
      
      // Handle list items
      if (line.startsWith('<li>')) {
        if (!inList) {
          inList = true;
          return '<ul>' + line;
        }
        return line;
      } else if (inList) {
        inList = false;
        return '</ul>' + (line.trim() !== '' ? '<p>' + line + '</p>' : '');
      }
      
      // Wrap non-empty content in paragraph tags
      return '<p>' + line + '</p>';
    });
    
    // Close any open list
    if (inList) {
      processedLines.push('</ul>');
    }
    
    return { __html: processedLines.join('\n') };
  };

  return (
    <div className="blog-post-page">
      <div className="blog-post-background"></div>
      <Navbar />
      
      <div className="blog-post-hero">
        <div className="blog-post-hero-content">
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-post-date">{formatDate(post.date)}</span>
            {post.tags && (
              <div className="blog-post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="blog-post-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="blog-post-container">
        {post.image && (
          <div className="blog-post-feature-image">
            <img src={post.image} alt={post.title} />
          </div>
        )}
        
        <article className="blog-post-content-wrapper">
          <div 
            className="blog-post-content"
            dangerouslySetInnerHTML={createMarkupContent()}
          />
          
          <div className="blog-post-footer">
            <Link to="/blog" className="blog-back-btn">
              <span>←</span> Back to All Posts
            </Link>
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;