import React from "react";
import useProfile from "../hooks/image-fragment-01";

export default ({ title, id }) => {
  const imageElem = useProfile();
  return (
    <div id={id}>
      <div className="about-heading">
        <h2 className="about-title">{title}</h2>
      </div>
      <div className="about-content">
        <div className="about-container ">
          <div className="about-img">{imageElem}</div>
          <div className="about-text">
            <h3>I'm a front-end developer based in the Portland, OR area.</h3>
            <p>
              I'm passionate about writing clean code — whether it's front-end
              or back-end—and collaborating with fellow developers and
              designers. While I'm currently focused on React and Ruby on Rails,
              I devote as much time as possible to learn new technologies and
              stay up-to-date with web development best practices and
              innovations.
            </p>
            <h3>Technology Toolbox</h3>
            <ul>
              <li>HTML / HTML5</li>
              <li>CSS / CSS3</li>
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>React</li>
              <li>Node</li>
              <li>Ruby on Rails</li>
              <li>Sass</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
              <li>npm</li>
              <li>Webpack</li>
              <li>Git</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
