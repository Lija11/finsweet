import React from 'react';
import About from '../../reuseableComponents/About';
import Brand from '../../reuseableComponents/Brand';
import FeaturesDetails from '../../reuseableComponents/FeaturesDetails';
import '../about/aboutWorking/aboutWorking.css'
import '../about/aboutMission/aboutMission.js.css'
import '../feature/feature.css'
import FAQ from '../homeAll/faq/FAQ'

import feature1 from '../../images/feature1.png' 
import feature2 from '../../images/feature2.png' 
import feature3 from '../../images/feature3.png' 
import feature4 from '../../images/feature4.png' 

const Feature = () => {
    return (
    <div className="features">
        <div className = 'container'>
            <div className="brands">
                <Brand/>
            </div>
        </div>
            <div className ="aboutWorking">
                <div className="container">
                    <div className="aboutWorkingTitle">
                        <h3 >The benefits of working with our team</h3>
                    </div>
                    <div className="featuresFlex">
                        <FeaturesDetails icon = {<i className="fa-solid fa-book"></i>} title = 'Customize with ease'/>
                        <FeaturesDetails icon = {<i className="fa-solid fa-pen-ruler"></i>} title = 'Perfectly Responsive'/>
                        <FeaturesDetails icon = {<i className="fa-solid fa-users"></i>} title = 'Friendly Support'/>
                    </div>
                </div>
            </div>
            <section className='aboutMission'>
                <div className="container">
                    <div className="aboutMissionFlex">
                        <About head = 'Use Client-first ' title = 'Top agencies and freelancers around the world use Client-first'/>
                        <div className="aboutImg">
                            <img src={feature1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section style={{background: '#F4F6FC'}}>
                <div className="container">
                    <div className="aboutMissionFlex middleGap">
                        <div className="aboutImg">
                            <img src={feature2} alt="" />
                        </div>
                        <About head = 'Free Revision Rounds ' title = 'Get free Revisions and one week of free maintenance'/>
                    </div>
                </div>
            </section>
            <section>
               <div className="container">
                <div className="aboutMissionFlex">
                        <About head = '24/7 Support ' title = 'Working with us, you will be getting 24/7 priority support'/>
                        <div className="aboutImg">
                            <img src={feature3} alt="" />
                        </div>
                    </div>
               </div>
            </section>
            <section style={{background: '#F4F6FC'}}>
                <div className="container">
                    <div className="aboutMissionFlex middleGap">
                        <div className="aboutImg">
                            <img src={feature4} alt="" />
                        </div>
                        <About head = 'Quick Delivery' title = 'Guranteed 1 week delivery for standard five pager website'/>
                    </div>
                </div>
            </section>
            <FAQ/>
    </div>
    );
};

export default Feature;