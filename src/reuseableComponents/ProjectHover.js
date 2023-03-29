import React from 'react';
import { Link } from "react-router-dom";

const ProjectHover = (props) => {
    return (
        <div className="projectRightInner">
        <img src={props.img} alt="Project"/>
        <div className="projectRightOverlay">
            <div className="projectRightOverlayText">
                <h5>Unisaas Website Design</h5>
                <div className="projectOverlyBtn">
                    <Link to="/" className = 'commonBtn'>View More<i className="fa-solid fa-arrow-right-long"/></Link>
                </div>
            </div>
        </div>
    </div>
         
                        
    );
};

export default ProjectHover;
