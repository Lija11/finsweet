import React from 'react'

const WorkDetails = (props) => {
    const {img, title} = props;
    return (
            <div className="workItem">
                <img src={img} alt="Our work"/>
                <h4>{title}</h4>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
            </div>
    );
};

export default WorkDetails;