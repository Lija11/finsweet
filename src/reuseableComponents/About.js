import React from 'react';

const About = (props) => {
    const {head, title} = props;
    return (
        <div className="aboutText">
            <h6>{head}</h6>
            <h3>{title}</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                 consequat.
            </p>
        </div>
    );
};

export default About;