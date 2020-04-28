import React from "react";
import PortfolioItem from "./portfolioItem";

export default ({ title, id }) => {
  return (
    <div id={id}>
      <div className="portfolio-wrapper">
        <h1>{title}</h1>
        <div className="portfolio-content">
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
        </div>
      </div>
    </div>
  );
};
