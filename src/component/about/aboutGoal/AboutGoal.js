import React from 'react';
import About from '../../../reuseableComponents/About';
import '../aboutGoal/aboutGoal.css'
import about2 from '../../../images/about2.png'

const AboutGoal = () => {
    return (
        <section className='aboutGoal'>
           <div className="container">
                <div className="aboutGoalMain">
                    <div className="aboutGoalFlex">
                        <About head = 'Who we are' title = 'Goal focussed'/>
                        <div className="topGap" > 
                            <About className = 'mt-30' title = 'Continuous improvement'/>
                        </div>
                    </div>
                </div>
                
                <div className="aboutImg">
                    <img src= {about2} alt="about2" />
                </div>
           </div>
        </section>
    );
};

export default AboutGoal;