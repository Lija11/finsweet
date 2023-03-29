import { Link } from "react-router-dom";
import "../Navbar/navbar.css";
import logo from "../../../images/logo.png";
import NavLink from "../../../reuseableComponents/Nav";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

function Navbar() {
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="" />
          </Link>

          <ul
            className={Mobile ? "nav-links-mobile" : "nav-menu"}
            onClick={() => setMobile(false)}
          >
            <NavLink />
            <Link to="/contact" className="contactBtn">
              Contact Us
            </Link>
          </ul>
          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!Mobile)}
          >
            {Mobile ? <ImCross /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
