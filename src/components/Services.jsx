import React from 'react';
const Services = () => {
  return (
    <div className="page-container">
      <h2 className="page-title" tabIndex="0">Our Professional Services</h2>
      <p className="page-description">
        We deliver exceptional web solutions, custom applications, and robust UI/UX architecture to scale your business efficiently.
      </p>
      
      <div className="cards-grid">
        <div className="custom-card">
          <h3>Web Development</h3>
          <p>Custom responsive websites built with React and modern tech stack.</p>
        </div>
        <div className="custom-card">
          <h3>SEO Optimization</h3>
          <p>Boost your ranking on search engines and attract organic traffic.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;