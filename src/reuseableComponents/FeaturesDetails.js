import React from 'react';

const FeaturesDetails = (props) => {
    const {icon, title} = props;
    return (
        <div className="featuresItem">
            {icon}
            <h5>{title}</h5>
            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida
                mi. Pellentesque etvelit aliquam sed mi.
            </p>
        </div>
    );
};

export default FeaturesDetails;