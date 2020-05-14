import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// const scrollToTop = () => {
//   scroll.scrollToTop();
// };

export default props => {
  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li className="nav-item">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
