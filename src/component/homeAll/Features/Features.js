import React from "react";
import FeaturesDetails from "../../../reuseableComponents/FeaturesDetails";
import "../Features/features.css";

const Features = () => {
  return (
    <section className="features padding">
      <div className="container">
        <div className="featuresTitle">
          <h6>Features</h6>
          <h2>Design that solves problems, one product at a time</h2>
        </div>
        <div className="featuresFlex">
          <FeaturesDetails
            icon={<i className="fa-solid fa-users"></i>}
            title="Uses Client First"
          />
          <FeaturesDetails
            icon={<i className="fa-solid fa-circle-check"></i>}
            title="Two Free Revision Round"
          />
          <FeaturesDetails
            icon={<i className="fa-solid fa-pen-ruler"></i>}
            title="Template Customization"
          />
          <FeaturesDetails
            icon={<i className="fa-solid fa-comments"></i>}
            title="24/7 Support"
          />
          <FeaturesDetails
            icon={<i className="fa-solid fa-stopwatch"></i>}
            title="Quick Delivery"
          />
          <FeaturesDetails
            icon={<i className="fa-solid fa-book"></i>}
            title="Hands-on approach"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
