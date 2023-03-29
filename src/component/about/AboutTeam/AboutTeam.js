import React from "react";
import "../AboutTeam/AboutTeam.css";
import team1 from "../../../images/team1.png";
import team2 from "../../../images/team2.png";
import team3 from "../../../images/team3.png";
import team4 from "../../../images/team4.png";
import TeamDetails from "../../../reuseableComponents/TeamDetails";

const AboutTeam = () => {
  return (
    <section className="aboutTeam">
      <div className="container">
        <div className="aboutTeamFlex">
          <TeamDetails img={team1} name="John Smith" pro="CEO" />
          <TeamDetails img={team2} name="Simon Adams" pro="CTO" />
          <TeamDetails img={team3} name="Paul Jones" pro="Design Lead" />
          <TeamDetails img={team4} name="Sara Hardin" pro="Project Manager" />
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
