import "./BlogCardStyles.css";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BlogCard = (props) => {
  const navigate = useNavigate();
  
  // Format the date nicely
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Custom navigation handler to scroll to top before navigating
  const handleReadMore = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(`/blog/${props.id}`);
  };

  return (
    <div className="blog-card">
      <div className="blog-header">
        <h2 className="blog-title">{props.title}</h2>
        <p className="blog-date">{formatDate(props.date)}</p>
        {props.tags && (
          <div className="blog-tags">
            {props.tags.map((tag, index) => (
              <span key={index} className="blog-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
      
      {props.image && (
        <div className="blog-image-container">
          <img src={props.image} alt={props.title} className="blog-img"/>
        </div>
      )}
      
      <div className="blog-excerpt">
        <p>{props.excerpt}</p>
      </div>
      
      <div className="blog-footer">
        <a 
          href={`/blog/${props.id}`}
          className="blog-read-more"
          onClick={handleReadMore}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;