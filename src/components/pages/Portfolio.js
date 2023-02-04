import React from 'react';
import PortfolioItem from '../PortfolioItem';
import "../styles/Portfolio.css";
import { PortfolioList } from '../../helpers/PortfolioList'; 



export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="portfolioList">
        {PortfolioList.map((project) => {
          return <PortfolioItem name={project.name} image={project.image} gitHubLink={project.gitHubLink} projectLink={project.projectLink}/>
        }
        
        )}

      </div>
    </div>
  );
}
