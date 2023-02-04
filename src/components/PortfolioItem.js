import GitHubIcon from "@mui/icons-material/GitHub";
import React, { useState } from "react";


function PortfolioItem({image, name, gitHubLink, projectLink}) {
  const [isHovered, setIsHovered] = useState(false);



return (
  <div 
    className="portfolioItem"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
    <a href={gitHubLink}>
    {isHovered && <GitHubIcon />}
    </a>
    {isHovered ? <a href={projectLink} style={{color: 'blue', textDecoration: 'none'}}><h1>View Project</h1></a> : <h1>{name}</h1>}

  </div>
);
}

export default PortfolioItem




