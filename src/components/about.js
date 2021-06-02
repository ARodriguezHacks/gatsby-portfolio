import React from "react";
import useProfile from "../hooks/image-fragment-01";
import aboutToolbox from "./about-toolbox";

export default ({ title, id }) => {
  const imageElem = useProfile();
  return (
    <div id={id}>
      <div className="about-heading">
        <h2 className="section-heading">{title}</h2>
      </div>
      <div className="about-content">
        <div className="about-container ">
          <div className="about-img">{imageElem}</div>
          <div className="about-text">
            <h3>I'm a front end software engineer based in the Portland, OR area.</h3>
            <p>
              I'm passionate about writing clean code—whether it's front-end or
              back-end—and collaborating with fellow developers and designers.
              While I'm currently focused on React and Ruby on Rails, I devote
              as much time as possible to learn new technologies and stay
              up-to-date with web development best practices and innovations.
            </p>
            <h3>Technology Toolbox</h3>
            <div className="about-toolbox-container">
              {aboutToolbox.map(skill => (
                <span key={skill.id}>{skill.skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
