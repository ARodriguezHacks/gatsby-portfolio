import React from "react";
import useProjects from "../hooks/use-projects";
import Image from "gatsby-image";

export default ({ title, id }) => {
  const projects = useProjects();

  return (
    <div id={id}>
      <div className="portfolio-wrapper">
        <h1>{title}</h1>
        <div className="portfolio-content">
          {projects.map(project => (
            <figure key={project.title} className="portfolio-item">
              <Image fluid={project.image.sharp.fluid} alt={project.title} />
              <figcaption>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};
