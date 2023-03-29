import React from 'react';
import brand1 from '../images/BrandLogo 1.png'
import brand2 from '../images/BrandLogo 2.png'
import brand3 from '../images/BrandLogo 3.png'
import brand4 from '../images/BrandLogo 4.png'
import brand5 from '../images/BrandLogo 5.png'

const Brand = () => {
    return (
        <div className="brand">
            <div className="brandUser">
                <h3>100.000+</h3>
                <h6>Finsweet Users</h6>
            </div>
            <div className="brandItem">
                <img src= {brand1} alt="brand1" />
                <img src= {brand2} alt="brand1" />
                <img src= {brand3} alt="brand1" />
                <img src= {brand4} alt="brand1" />
                <img src= {brand5} alt="brand1" />
            </div>
        </div>
    );
};

export default Brand;