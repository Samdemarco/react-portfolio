import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/pages/Portfolio';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import About from './components/pages/About';


function App() {
  return (
 
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
