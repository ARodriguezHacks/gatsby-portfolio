import React from "react";
import useProjects from "../hooks/use-projects";
import PortfolioItem from "./portfolio-item";

export default ({ title, id }) => {
  const projects = useProjects();

  return (
    <div id={id}>
      <div className="portfolio-wrapper">
        <h1 className="portfolio-title">{title}</h1>
        <div className="portfolio-content">
          {projects.map(project => (
            <PortfolioItem key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
