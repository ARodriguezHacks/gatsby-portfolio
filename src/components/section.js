import React from "react";

export default ({ title, id }) => {
  return (
    <div>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};
