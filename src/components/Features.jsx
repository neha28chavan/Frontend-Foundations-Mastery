import React from 'react';

const Features = () => {
  const features = [
    { id: 1, title: 'Responsive Design', icon: '📱' },
    { id: 2, title: 'Fast Performance', icon: '⚡' },
    { id: 3, title: 'SEO Optimized', icon: '🔍' },
    { id: 4, title: 'Accessibility', icon: '♿' }
  ];

  return (
    <section className="features" id="services">
      <h2>Our Features</h2>
      <div className="features-grid">
        {features.map(feature => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>Premium quality {feature.title.toLowerCase()} implementation.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;


