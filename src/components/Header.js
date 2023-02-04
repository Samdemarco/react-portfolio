import Navbar from "./Navbar"
import backgroundImage from '../assets/internet.jpg';

const componentStyles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '50vh', // set the height to take up the full viewport
};


const Header = () => {
  return (
    <header style={componentStyles}>
      <Navbar />
    </header>
  )
}

export default Header