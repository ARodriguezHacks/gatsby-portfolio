import React from "react";

export default ({ title, id }) => {
  return (
    <div id={id}>
      <div>
        <div className="about-heading">
          <h3 className="about-title">{title}</h3>
        </div>
        <div className="about-content">
          <div className="about-three-fifths">
            <div className="about-img-container">
              <img
                src="https://picsum.photos/300"
                alt="Random Pic 1"
                className="about-pic-left"
              />
              <img
                src="https://picsum.photos/300"
                alt="Random Pic 2"
                className="about-pic-right"
              />
            </div>
          </div>
          <div className="about-two-fifths">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
