import React from 'react';
import { Link } from 'react-router-dom';


const Nav = ({to, page}) => {
    return (
        <> 
            <li className="nav-item">
              <Link to= {to} className="nav-links"> {page} </Link>
            </li>
        </>
    );
};

const NavLink = () => {
    return (
        <>
            <Nav to = '/' page = 'Home'/>
            <Nav to = '/about' page = 'About'/>
            <Nav to = '/feature' page = 'Features'/>
            <Nav to = '/price' page = 'Pricing'/>
            <Nav to = '/faq' page = 'FAQ'/>
            <Nav to = '/blog' page = 'Blog'/>
        </>
    );
};

export default NavLink;