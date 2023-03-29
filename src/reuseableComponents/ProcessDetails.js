import React from 'react';

const ProcessDetails = (props) => {
    return (
        <div className="aboutProcessCard">
            <div className="circle"></div>
            <h5>{props.title}</h5>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
        </div>
    );
};

export default ProcessDetails;