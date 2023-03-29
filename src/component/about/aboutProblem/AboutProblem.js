import React from 'react';
import '../aboutProblem/aboutProblem.css'
import about1 from '../../../images/about1.png'
import About from '../../../reuseableComponents/About';


const AboutProblem = () => {
    return (
        <section className='about'>
            <div className="container">
                <div className="aboutFlex">
                    <About head = 'About Us' title = 'Our designs solve problems'/>
                    <div className="aboutImg">
                        <img src={about1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutProblem;