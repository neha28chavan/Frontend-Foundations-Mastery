// import React, { useState } from 'react';
// import './BusinessWebsite.css';

// const BusinessWebsite = () => {
//   const [activeTab, setActiveTab] = useState('home');

//   const features = [
//     { id: 1, title: 'Responsive Design', desc: 'Works smoothly on all devices.' },
//     { id: 2, title: 'Fast Performance', desc: 'Optimized for high speed.' },
//     { id: 3, title: 'SEO Optimized', desc: 'Rank higher on search engines.' }
//   ];

//   return (
//     <div className="business-container">
//       {/* Navbar */}
//       <nav className="navbar">
//         <h3>Business Website</h3>
//         <div className="nav-links">
//           <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active-btn' : 'nav-btn'}>Home</button>
//           <button onClick={() => setActiveTab('services')} className={activeTab === 'services' ? 'active-btn' : 'nav-btn'}>Services</button>
//           <button onClick={() => setActiveTab('portfolio')} className={activeTab === 'portfolio' ? 'active-btn' : 'nav-btn'}>Portfolio</button>
//           <button onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? 'active-btn' : 'nav-btn'}>Contact</button>
//         </div>
//       </nav>

//       {/* Main Content Area */}
//       <main className="main-content">
//         {activeTab === 'home' && (
//           <div className="hero-section">
//             <h1>Welcome to Our Business</h1>
//             <p>Providing exceptional services with modern web solutions.</p>
//           </div>
//         )}

//         {activeTab === 'services' && (
//           <div className="section-box">
//             <h2>Our Services</h2>
//             <div className="grid">
//               {features.map(item => (
//                 <div key={item.id} className="card">
//                   <h3>{item.title}</h3>
//                   <p>{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'portfolio' && (
//           <div className="section-box">
//             <h2>Our Portfolio</h2>
//             <p>Check out our amazing previous projects and client works.</p>
//           </div>
//         )}

//         {activeTab === 'contact' && (
//           <div className="section-box">
//             <h2>Contact Us</h2>
//             <p>Email: info@business.com | Phone: +91 9876543210</p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default BusinessWebsite;


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
// import Services from './components/Services';
// import Portfolio from './components/ Portfolio';

import './BusinessWebsite.css';

const BusinessWebsite = () => {
  // Theme state define ki hai (default 'light')
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