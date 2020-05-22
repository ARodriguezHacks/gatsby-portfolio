import React from "react";
import Image from "gatsby-image";

export default ({ project }) => {
  return (
    <figure key={project.title} className="portfolio-item">
      <Image fluid={project.image.sharp.fluid} alt={project.title} />
      <figcaption>
        <h4>{project.title}</h4>
        <p>
          <span>{project.technologies}</span>
        </p>
        <p>{project.description}</p>
        <a href={`${project.github}`} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href={`${project.host}`} target="_blank" rel="noopener noreferrer">
          Live
        </a>
      </figcaption>
    </figure>
  );
};
