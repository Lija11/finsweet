import React from 'react';
import './readCase.css'

import readCase1 from '../../images/workpage1.png'
import ReadBlogDetails from '../../reuseableComponents/ReadBlogDetails';

export const readCaseItem = () => {
    return (
        <div className="readCaseItem">
            <h6>Client</h6>
            <h5>facebook.com</h5>
        </div>
    );
};

const ReadCase = () => {
    return (
        <div className="readCase">
            <div className="container">
                <div className="readCaseTitle">
                    <h6>Web design and development</h6>
                    <h3>Finsweet Design case studies</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                         reprehenderit in voluptate velit esse.
                    </p>
                </div>
                <div className="readCaseTitleImage">
                    <img src={readCase1} alt="" />
                </div>
               <div className="readCaseMain">
                    <div className="readCaseItem">
                        <h6>Client</h6>
                        <h5>facebook.com</h5>
                    </div>
                    <div className="readCaseItem">
                        <h6>Service</h6>
                        <h5>Product Design</h5>
                    </div>
                    <div className="readCaseItem">
                        <h6>Deliverable</h6>
                        <h5>UI Screens, UX Flow & Prototype</h5>
                    </div>
               </div>
               <section>
                    <ReadBlogDetails title = 'About the project'/>
                    <ul className='readCaseList'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</li>
                        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                        <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
                    </ul>
                    <div className="readCaseTitleImage">
                        <img src={readCase1} alt="" />
                    </div>
                    <ReadBlogDetails title = 'About the project'/>
                    <ul className='readCaseList'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</li>
                        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                        <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
                    </ul>
                </section>
        </div>
        </div>
    );
};

export default ReadCase;