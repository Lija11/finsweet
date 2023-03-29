import React from 'react';
import footer from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import Nav from '../../../reuseableComponents/Nav';
import './footer.css'
import NavLink from '../../../reuseableComponents/Nav';

const Footer = () => {
    return (
        <footer>
        <div className="footer_main">
            <div className="container">
                <div className="footer_flex">
                    <div className="footer_left">
                        <div className="footer_logo">
                            <a href="#"><img src={footer} alt="Logo"/></a>
                        </div>
                        <p>We are always open to discuss your project and improve your online presence.</p>
                        <div className="contact_via">
                            <div className="via_email">
                                <h6>Email me at</h6>
                                <p>contact@website.com</p>
                            </div>
                            <div className="via_call">
                                <h6>Call us</h6>
                                <p>0927 6277 28525</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer_right">
                        <h2>Lets Talk!</h2>
                        <p>We are always open to discuss your project, improve your online presence and help with your
                            UX/UI
                            design challenges.
                        </p>
                        <div className="social">
                            <ul>
                                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <div className="copyright_flex">
                    <div className="copyright_text">
                        <p>Copyright 2022, Finsweet.com</p>
                    </div>
                    <div className="footer_menu">
                    <ul className= "nav-menu">
                        <NavLink/>
                     </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;