import { Link, useLocation } from 'react-router-dom';
import "./styles/Navbar.css";
import ReorderIcon from  "@mui/icons-material/Reorder";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';



// Using color coding to indicate active "page"
const NavLink = styled(Link)`
  &.selected {
    color: #FFA500;
  }
`;

function Navbar() {
  //For mobile version of the menu (Hamburger style)
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  const [selected, setSelected] = useState(location.pathname);

  // Setting up location of what page user is on
  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);


  //This ensures that stacked menu is not expanded when visiting new page in "mobile mode"
  useEffect(() => {setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
          <ReorderIcon /> 
        </button>
      </div>
      
      <div className="links">
        <h2>Sam De Marco</h2>
        
        <NavLink to="/" className={selected === '/' ? 'selected' : ''} >ABOUT ME</NavLink>
        <NavLink to="/portfolio" className={selected === '/portfolio' ? 'selected' : ''}>PORTFOLIO</NavLink>
        <NavLink to="/contact" className={selected === '/contact' ? 'selected' : ''}>CONTACT</NavLink>
        <NavLink to="/resume"  className={selected === '/resume' ? 'selected' : ''}>RESUME</NavLink>
               
      </div>
    </div>

  );
}

export default Navbar;