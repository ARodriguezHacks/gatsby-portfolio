import React from "react";

export default ({ title, id }) => {
  return (
    <div id={id}>
      <div className="section-content">
        <h1>{title}</h1>
      </div>
    </div>
  );
};
