import React from "react";
import banner from "../../images/blogBanner.png";
import readImg from "../../images/read-blog-details.png";
import ReadBlogDetails from "../../reuseableComponents/ReadBlogDetails";
import "../BlogAll/blog.css";
import "./readBlog.css";

const ReadBlog = () => {
  return (
    <div className="readBlog">
      <div className="container">
        <section>
          <div className="blogHeading">
            <h2>
              A UX Case Study on Creating a Studious Environment for Students
            </h2>
            <p>Andrew Jonson Posted on 27th January 2021</p>
          </div>
          <div className="blogBannerImg">
            <img src={banner} alt="" />
          </div>
          <div className="readBlogMain">
            <ReadBlogDetails title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <ReadBlogDetails title="Ut enim ad minim veniam, quis nostrud." />
            <ul className="readBlogList">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
            </ul>
            <ReadBlogDetails />
            <img src={readImg} alt="" />
            <ReadBlogDetails title="Ut enim ad minim veniam, quis nostrud." />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReadBlog;
