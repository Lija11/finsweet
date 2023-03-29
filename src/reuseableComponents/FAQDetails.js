import React from 'react';

const FAQDetails = (props) => {
    const {count, title, icon, details} = props;
    return (
        <div className="faq_item">
            <span>{count}</span>
            <h5>{title}</h5>
            <p>{details}</p>
            {icon}
         </div>
    );
};

export default FAQDetails;