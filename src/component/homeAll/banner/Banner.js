import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../images/banner.png";
import "../banner/banner.css";

const Banner = () => {
  return (
    <div className="banner padding">
      <div className="container">
        <div className="bannerFlex">
          <div className="bannerText">
            <h1>Building stellar websites for early startups</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="bannerBtn">
              <a href="#">View our work</a>
              <Link to="/price">
                {" "}
                View Pricing <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>
          </div>
          <div className="bannerImg">
            <img src={banner} alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
