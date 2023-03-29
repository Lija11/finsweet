import React from 'react';
import AboutGoal from '../about/aboutGoal/AboutGoal';
import AboutMission from '../about/aboutMission/AboutMission';
import AboutProblem from '../about/aboutProblem/AboutProblem';
import AboutProcess from '../about/aboutProcess/AboutProcess';
import AboutTeam from '../about/AboutTeam/AboutTeam';
import AboutWorking from '../about/aboutWorking/AboutWorking';

const AboutPage = () => {
    return (
        <div>
            <AboutProblem/>
            <AboutGoal/>
            <AboutProcess/>
            <AboutMission/>
            <AboutWorking/>
            <AboutTeam/>
        </div>
    );
};

export default AboutPage;