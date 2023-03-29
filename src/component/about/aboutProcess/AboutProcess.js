import React from "react";
import ProcessDetails from "../../../reuseableComponents/ProcessDetails";
import "../aboutProcess/aboutProcess.css";

const AboutProcess = () => {
  return (
    <section className="aboutProcess padding">
      <div className="container">
        <h3 className="title">The process we follow</h3>
        <div className="aboutProcessFlex">
          <ProcessDetails title="Planning" />
          <ProcessDetails title="Conception" />
          <ProcessDetails title="Design" />
          <ProcessDetails title="Development" />
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
