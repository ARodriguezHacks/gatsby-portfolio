import React from "react";

export default ({ title, id }) => {
  return (
    <div id={id}>
      <div className="blog-content">
        <h1>{title}</h1>
        <p>Read my latest articles</p>
      </div>
    </div>
  );
};
