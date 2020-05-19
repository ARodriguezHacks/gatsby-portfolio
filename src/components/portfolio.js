import React from "react";
import useProjects from "../hooks/use-projects";
import PortfolioItem from "./portfolio-item";

//test for onClick function
function openProject() {
  console.log("hello");
}

export default ({ title, id }) => {
  const projects = useProjects();

  return (
    <div id={id}>
      <div className="portfolio-wrapper">
        <h1>{title}</h1>
        <div className="portfolio-content">
          {projects.map(project => (
            <PortfolioItem
              key={project.title}
              project={project}
              openProject={() => openProject()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
