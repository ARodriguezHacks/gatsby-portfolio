import React from "react";
import pdf from "../pdf/ANGIE_RODRIGUEZ_RESUME_DEVELOPER_2021.pdf";
import useProjects from "../hooks/use-projects";
import PortfolioItem from "./portfolio-item";

export default ({ title, id }) => {
  const projects = useProjects();

  return (
    <div id={id}>
      <div className="portfolio-wrapper">
        <h2 className="section-heading">{title}</h2>
        <div className="resume-container">
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            View My Resumé &darr;
          </a>
        </div>
        <div className="portfolio-content">
          {projects.map(project => (
            <PortfolioItem key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
