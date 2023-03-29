import React from 'react';
import about3 from '../../../images/about-3.png'
import about4 from '../../../images/about-4.png'
import About from '../../../reuseableComponents/About';
import '../aboutMission/aboutMission.js.css'

const AboutMission = () => {
    return (
        <section className='aboutMission'>
            <div className="container">
                <div className="aboutMissionFlex">
                    <About head = 'Our Mission ' title = 'Inspire, Innovate, Share'/>
                    <div className="aboutImg">
                        <img src={about3} alt="" />
                    </div>
                </div>
                <div className="aboutMissionFlex middleGap">
                    <div className="aboutImg">
                        <img src={about4} alt="" />
                    </div>
                    <About head = 'Our Vision ' title = 'Laser focus'/>
                </div>
            </div>
        </section>
    );
};

export default AboutMission;