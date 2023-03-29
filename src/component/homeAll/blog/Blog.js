import React from "react";
import "../blog/Blog.css";
import blog1 from "../../../images/blog1.png";
import blog2 from "../../../images/blog2.png";
import blog3 from "../../../images/blog3.png";
import BlogDetails from "../../../reuseableComponents/BlogDetails";

const Blog = () => {
  return (
    <section className="blog padding">
      <div className="container">
        <div className="blog_title">
          <h2>Our blog</h2>
        </div>
        <div className="blog_flex">
          <BlogDetails img={blog1} />
          <BlogDetails img={blog2} />
          <BlogDetails img={blog3} />
        </div>
      </div>
    </section>
  );
};

export default Blog;
