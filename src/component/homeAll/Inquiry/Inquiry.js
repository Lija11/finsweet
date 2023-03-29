import React from "react";
import { Link } from "react-router-dom";
import "../Inquiry/inquiry.css";
import inquiry from "../../../images/inquiry-bg.png";

const Inquiry = () => {
  return (
    <section className="inquiry padding">
      <div className="container">
        <div className="inquiryFlex">
          <div
            className="inquiryText"
            style={{
              background: `linear-gradient(rgba(28, 30, 83, 0.5), rgba(28, 30, 83, 0.5)), url(${inquiry})`,
            }}
          >
            <h2>Building stellar websites for early startups</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
          <div className="inquiryContain">
            <div className="inquiryFormTitle">
              <h4>Send inquiry</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <form className="inquiryForm" action="#">
              <input className="name" type="text" placeholder="Your Name" />
              <input className="email" type="email" placeholder="Email" />
              <input
                className="figma_url"
                type="text"
                placeholder="Paste your Figma design URL"
              />
              <input className="submit" type="submit" value="Send an Inquiry" />
            </form>
            <div className="inquiryFormBtn ">
              <Link to="/contact" className="commonBtn">
                {" "}
                Get in touch with us{" "}
                <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
