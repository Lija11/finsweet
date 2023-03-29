import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../testimonial/Testimonial.css";
import TestimonialDetails from "../../../reuseableComponents/TestimonialDetails";

export function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fas fa-angle-right next"></i>
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fas fa-angle-left prev"></i>
    </div>
  );
}

const Testimonial = () => {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial padding">
      <div className="container">
        <div className="testimonialFlex">
          <div className="testimonialTitle">
            <h3>What our clients say about us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
          <div className="testimonialContent">
            <Slider {...settings}>
              <div className="testimonialItem">
                <TestimonialDetails />
              </div>
              <div className="testimonialItem">
                <TestimonialDetails />
              </div>
              <div className="testimonialItem">
                <TestimonialDetails />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
