import React from "react";

export default () => {
  return (
    <figure className="portfolio-item">
      <img
        src="https://picsum.photos/300"
        alt="Random Pic 1"
        className="portfolio-image"
      />
      <figcaption>
        <h4>Project Title</h4>
        <p>Project description</p>
      </figcaption>
    </figure>
  );
};
