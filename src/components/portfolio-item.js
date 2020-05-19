import React from "react";
import Image from "gatsby-image";

export default ({ project, openProject }) => {
  return (
    <figure
      key={project.title}
      className="portfolio-item"
      onClick={openProject}
    >
      <Image fluid={project.image.sharp.fluid} alt={project.title} />
      <figcaption>
        <h4>{project.title}</h4>
        <p>
          <span>{project.technologies}</span>
        </p>
        <p>{project.description}</p>
      </figcaption>
    </figure>
  );
};
