import React from 'react';

const Portfolio = () => {
  return (
    <div className="page-container">
      <h2 className="page-title" tabIndex="0">Our Portfolio</h2>
      <p className="page-description">
        Explore our recently completed corporate projects and high-performance applications.
      </p>

      <div className="cards-grid">
        <div className="custom-card card-border-left">
          <h3>E-Commerce Dashboard</h3>
          <p>Admin panel for managing products, analytics, and live orders.</p>
        </div>
        <div className="custom-card card-border-left">
          <h3>Business Landing Page</h3>
          <p>Sleek, conversion-optimized multi-page corporate portal.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;