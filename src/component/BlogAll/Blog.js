import React from 'react';
import { Link } from 'react-router-dom';
import '../BlogAll/blog.css'
import banner from '../../images/blogBanner.png'
import BlogDetails from '../../reuseableComponents/BlogDetails';
import blog4 from '../../images/blog4.png'
import blog5 from '../../images/blog5.png'
import blog6 from '../../images/blog6.png'
import blog7 from '../../images/blog7.png'
import blog8 from '../../images/blog8.png'
import blog9 from '../../images/blog9.png'
const Blog = () => {
    return (
        <div className='blog'>
           <div className="container">
               <section>
                    <div className="blogHeading">
                        <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
                        <p>Andrew Jonson Posted on 27th January 2021</p>
                    </div>
                    <div className="blogBannerImg">
                            <img src={banner} alt="" />
                    </div>
                    <div className="blogBannerText">
                        <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                        <Link to = "/readBlog" className = 'commonBtn'>Read More</Link>
                    </div>
               </section>
                <section className="ourBlog">
                        <h2>Our Blog</h2>
                        <div className="blog_flex">
                            <BlogDetails img = {blog4}/>
                            <BlogDetails img = {blog5}/>
                            <BlogDetails img = {blog6}/>
                            <BlogDetails img = {blog7}/>
                            <BlogDetails img = {blog8}/>
                            <BlogDetails img = {blog9}/>
                        </div>
                </section>
            </div>  
        </div>
    );
};

export default Blog;