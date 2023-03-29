import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FAQdata from "../../../data/FAQdata";
import FAQDetails from "../../../reuseableComponents/FAQDetails";
import "../faq/facq.css";

const FAQ = () => {
  const [FAQ, setFAQ] = useState(FAQdata);
  const [toggle, setToggle] = useState(false);

  const handleFAQ = (id) => {
    console.log(id);
    FAQ.map((item, index) => {
      {
        if (id == index) {
          item.status = true;
          setFAQ([...FAQ]);
        } else {
          item.status = false;
          setFAQ([...FAQ]);
        }
      }
    });
  };

  return (
    <section className="faq padding">
      <div className="container">
        <div className="faq_flex">
          <div className="faq_title">
            <h3>Frequently asked questions</h3>
            <Link to="/contact" className="commonBtn">
              Contact us for more info
            </Link>
          </div>
          <div className="faq_main">
            {FAQ.map((item, index) => (
              <div
                className="faq_item"
                onClick={() => handleFAQ(index)}
                key={index}
              >
                <span>{index + 1 > 9 ? index + 1 : `0${index + 1}`}</span>
                <h5>{item.title}</h5>
                {item.status && <p>{item.details}</p>}
                {/* <i className="fa-solid fa-xmark"></i> */}
                {/* <button onClick={() => {setFAQ(!FAQ)}}>
                                {item.status = false ? <i className="fa-solid fa-xmark"/> : '+'}
                                </button> */}
                <button
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  {item.status ? (
                    <i className="fa-solid fa-xmark" />
                  ) : (
                    <i class="fa-solid fa-plus" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
