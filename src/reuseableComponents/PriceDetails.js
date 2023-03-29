import React from 'react';

const PriceDetails = (props) => {
    
    const {title, price, design, titlePera} = props;
    return (
        <div className="priceItem">
            <div className="priceDesign">
                <h2>{price}</h2>
                <h6><span>{design}</span></h6>
            </div>
            <div className="priceItemTitle">
                <h6>{title} </h6>
                <p>{titlePera} </p>
            </div>
            <ul className='priceLinkItem'>
                <li>All limited links</li>
                <li>Own analytics platform</li>
                <li>Chat support</li>
                <li>Optimize hashtags</li>
                <li>Unlimited users</li>
            </ul>
            <button className='btn'>Get Started</button>
        </div>
    );
};

export default PriceDetails;