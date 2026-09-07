import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import './BusinessWebsite.css';

const BusinessWebsite = () => {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`business-website ${theme}`}>
      <Navbar 
        theme={theme} 
        setTheme={setTheme} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
      />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default BusinessWebsite;