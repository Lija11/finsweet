import React from "react";
import { Link } from "react-router-dom";
import work1 from "../../../images/our-work1.png";
import work2 from "../../../images/our-work2.png";
import work3 from "../../../images/our-work3.png";
import work4 from "../../../images/our-work4.png";
import WorkDetails from "../../../reuseableComponents/WorkDetails";
import "../work/Work.css";

const Work = () => {
  return (
    <div className="work padding">
      <div className="container">
        <div className="workFlex">
          <div className="workText">
            <h2>How we work</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <Link to="/work" className="commonBtn">
              {" "}
              Get in touch with us{" "}
              <i className="fa-solid fa-arrow-right-long" />
            </Link>
          </div>
          <div className="workItemMain">
            <div className="workItemMainFlex">
              <WorkDetails title="Strategy" img={work1} />
              <WorkDetails title="Strategy" img={work2} />
              <WorkDetails title="Strategy" img={work3} />
              <WorkDetails title="Strategy" img={work4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
