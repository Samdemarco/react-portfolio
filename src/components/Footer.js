import GithubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./styles/Footer.css";


const Footer = () => {
    return (
        <div className="footer">
        <div className="socialMedia">

        <a href="https://github.com/Samdemarco" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
        <a href="https://twitter.com/sammy_demarco" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/sam-de-marco-3386b514/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        </div>
        <p> &copy; 2023 Samsonite</p>
      </div>
    )
  }
  
  export default Footer