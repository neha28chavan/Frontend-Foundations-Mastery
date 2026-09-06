import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';       
import Portfolio from './components/Portfolio';   
import Footer from './components/Footer';
import './BusinessWebsite.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className={`business-website ${theme}`}>
        <Navbar 
          theme={theme} 
          setTheme={setTheme} 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
        />
        <Routes>
          <Route path="/" element={<><Hero /><Features /><Footer /></>} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;