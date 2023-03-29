import React from "react";
import "../aboutWorking/aboutWorking.css";
import FeaturesDetails from "../../../reuseableComponents/FeaturesDetails";
import Brand from "../../../reuseableComponents/Brand";

const AboutWorking = () => {
  return (
    <section className="aboutWorking padding">
      <div className="container">
        <div className="aboutWorkingTitle">
          <h3>The benefits of working with us</h3>
        </div>
        <div className="featuresFlex">
          <FeaturesDetails
            icon={<i className="fa-solid fa-book"></i>}
            title="Hands-on approach"
          />
          <FeaturesDetails
            icon={<i className="fa-solid fa-pen-ruler"></i>}
            title="Template Customization"
          />
          <FeaturesDetails
            icon={<i className="fa-solid fa-users"></i>}
            title="Uses Client First"
          />
        </div>
        <Brand />
      </div>
    </section>
  );
};

export default AboutWorking;
