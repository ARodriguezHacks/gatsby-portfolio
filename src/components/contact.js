import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ title, id }) => {
  return (
    <div id={id}>
      <h2>{title}</h2>
      <div className="contact-container">
        <h4>Developed by Angie Rodriguez</h4>
        <div className="media-container">
          <a href="mailto:angrodri902@gmail.com">
            <FontAwesomeIcon icon="envelope" />
          </a>
          <a href="https://www.linkedin.com/in/angie-rodriguez-web-developer/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a href="https://github.com/ARodriguezHacks">
            <FontAwesomeIcon icon={["fab", "github-square"]} />
          </a>
        </div>
      </div>
    </div>
  );
};
