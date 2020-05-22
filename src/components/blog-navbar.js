import React from "react";
import { Link } from "gatsby";

// const scrollToTop = () => {
//   scroll.scrollToTop();
// };

export default () => {
  return (
    <nav className="navbar">
      <ul className="nav-items blog-nav-items">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="active" to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};
