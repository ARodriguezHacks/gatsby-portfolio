import React from "react";

export default ({ title, id }) => {
  return (
    <div id={id}>
      <div className="home-content">
        <h1>{title}</h1>
        <h2>Web Developer</h2>
        <p>
          I am a front-end developer with a passion for web design and love to
          create for web and mobile devices.
        </p>
      </div>
    </div>
  );
};
