import React from 'react';
import testimonial from '../images/testimonial.png'

const TestimonialDetails = () => {
    return (
        <>
            <h4>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h4>
            <div className="testimonial_user">
                <img src= {testimonial} alt="testimonial"/>
                <h6>Jenny Wilson</h6>
                <p>Vice President</p>
            </div>
        </>
    );
};

export default TestimonialDetails;