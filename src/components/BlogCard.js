import "./BlogCardStyles.css";
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
        <Link to={`/blog/${props.id}`} className="blog-read-more">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;