import React from 'react';
import { Link } from "react-router-dom";

const CommonLinkBtn = (props) => {
    return (
        <Link to="/" className="commonLinkBtn"> Home <i className="fa-solid fa-arrow-right-long"/></Link>
    );
};

export default CommonLinkBtn;