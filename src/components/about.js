import React from "react";
import useProfile from "../hooks/image-fragment-01";
//import Image from "gatsby-image";

//console.log(useProfile);
export default ({ title, id }) => {
  const imageElem = useProfile();
  //console.log(images);
  return (
    <div id={id}>
      <div className="about-heading">
        <h1 className="about-title">{title}</h1>
      </div>
      <div className="about-content">
        <div className="about-container ">
          <div className="about-img">{imageElem}</div>
          <div className="about-text">
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
