import React from 'react';
import { Link } from "react-router-dom";

const BlogDetails = (props) => {
    return (
        <div className="blog_item">
            <img src={props.img} alt="blog"/>
            <span>19 Jan 2022</span>
            <Link to ="/readBlog" className='blogLink'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</Link>
            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
            <div className="blog_btn">
                <Link to="/readBlog" className="commonBtn"> Read More <i className="fa-solid fa-arrow-right-long"/></Link>
            </div>
        </div>
    );
};

export default BlogDetails;