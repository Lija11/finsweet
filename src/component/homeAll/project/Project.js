import React from "react";
import { Link } from "react-router-dom";
import project1 from "../../../images/project1.png";
import project2 from "../../../images/project2.png";
import project3 from "../../../images/project3.png";
import ProjectHover from "../../../reuseableComponents/ProjectHover";
import "../project/project.css";

const Project = () => {
  return (
    <section className="project padding">
      <div className="container">
        <div className="projectTitle">
          <h2>View our projects</h2>
          <div className="projectBtn">
            <Link to="/work" className="commonBtn">
              View Project
              <i className="fa-solid fa-arrow-right-long" />
            </Link>
          </div>
        </div>
        <div className="projectFlex">
          <div className="projectLeft">
            <img src={project1} alt="Project" />
            <div className="projectLeftOverlay">
              <div className="projectLeftOverlayText">
                <h5>Workhub office Webflow Webflow Design</h5>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam
                </p>
                <div className="projectOverlyBtn">
                  <Link to="/" className="commonBtn">
                    View Project
                    <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="projectRight">
            <ProjectHover img={project2} />
            <ProjectHover img={project3} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
