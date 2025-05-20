import "./BlogListStyles.css";
import BlogCard from "./BlogCard";
import BlogData from "./BlogData";
import React from 'react';

const BlogList = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-heading">Latest Posts</h1>
      <div className="blog-list">
        {BlogData.map((val, index) => {
          return (
            <BlogCard
              key={index}
              id={val.id}
              title={val.title}
              date={val.date}
              image={val.image}
              tags={val.tags}
              excerpt={val.excerpt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;