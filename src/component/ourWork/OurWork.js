import React from 'react';
import { Link } from 'react-router-dom';
import './ourWork.css'
import OurWorkDetails from '../../reuseableComponents/OurWorkDetails';

import work1 from '../../images/workpage1.png'
import work2 from '../../images/workpage2.png'
import work3 from '../../images/workpage3.png'
import work4 from '../../images/workpage4.png'
import work5 from '../../images/workpage5.png'
import work6 from '../../images/workpage6.png'

const OurWork = () => {
    return (
      <>
            <div className="ourWork" >
                <div className="container">
                    <div className="workContent">
                        <h6>What we created</h6>
                        <h3>Our Work Portfolio</h3>
                        <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                        <div className="socialLink">
                        <ul>
                            <li><Link to="/"><i className="fa-brands fa-facebook"></i></Link></li>
                            <li><Link to="/"><i className="fa-brands fa-twitter"></i></Link></li>
                            <li><Link to="/"><i className="fa-brands fa-instagram"></i></Link></li>
                            <li><Link to="/"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                        </ul>
                        </div>
                    </div>
                </div>  
            </div>

            <div className="workPortfolio">
                <div className="container">
                    <div className="ourWorkFlex">
                        <OurWorkDetails title = 'Template 1' img = {work1} btn = 'View Portfolio'/>
                        <OurWorkDetails title = 'Template 2' img = {work2} btn = 'View Portfolio'/>
                        <OurWorkDetails title = 'Template 3' img = {work3} btn = 'Read case study'/>
                        <OurWorkDetails title = 'Template 4' img = {work4} btn = 'Read case study'/>
                        <OurWorkDetails title = 'Template 5' img = {work5} btn = 'Read case study'/>
                        <OurWorkDetails title = 'Template 6' img = {work6} btn = 'Read case study'/>
                    </div>
                </div>
            </div>
            <section>
                <div className="container">
                    <div className="workContentBottom">
                        <h3>Let's build something great together</h3>
                        <p>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
                        <Link to ="/contact" className='contactBtn'>Contact Us</Link>
                    </div>
                </div>  
            </section>
      </>
    );
};

export default OurWork;