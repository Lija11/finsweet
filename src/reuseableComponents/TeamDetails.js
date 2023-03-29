import React from 'react';

const TeamDetails = ({img, name, pro}) => {
    return (
        <div className="aboutTeamItem">
            <div className="aboutTeamItemImage">
                <img src={img} alt="" />
                <div className="icon">
                    <ul>
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="aboutTeamItemText">
                <h5 className='name'>{name}</h5>
                <h6 className = 'pro'>{pro}</h6>
            </div>
     </div>
    );
};

export default TeamDetails;