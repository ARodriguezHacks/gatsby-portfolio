import React from "react";
import useProjects from "../hooks/use-projects";
import PortfolioItem from "./portfolio-item";

export default ({ title, id }) => {
  const projects = useProjects();
  console.log(projects);

  return (
    <div id={id}>
      <div className="portfolio-wrapper">
        <h2 className="portfolio-title">{title}</h2>
        <div className="portfolio-content">
          {projects.map(project => (
            <PortfolioItem key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
