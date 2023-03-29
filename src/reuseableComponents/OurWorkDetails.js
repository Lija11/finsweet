import React from 'react';
import { Link } from 'react-router-dom';

const OurWorkDetails = (props) => {
    const {title, img, btn} = props;
    return (
        <div className="ourWorkItem">
            <div className="ourWorkItemImage">
                <img src={img} alt="" />
            </div>
            <div className="ourWorkItemText">
                    <h4>{title}</h4>  
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p> 
                <Link to ="/readCase" className='commonBtn'>{btn} <i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>
        </div>
    );
};

export default OurWorkDetails;