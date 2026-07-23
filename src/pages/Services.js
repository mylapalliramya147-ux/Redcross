import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-heartbeat',
      title: 'Blood Donation',
      description: 'Regular blood donation camps and 24/7 blood bank services for emergency cases.',
      features: ['Safe blood collection', 'Blood grouping and typing', 'Emergency supply', 'Donor registration'],
    },
    {
      icon: 'fas fa-first-aid',
      title: 'First Aid Training',
      description: 'Comprehensive first aid training programs for individuals and organizations.',
      features: ['Basic first aid', 'CPR certification', 'Disaster response', 'Workplace safety'],
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'Disaster Relief',
      description: 'Immediate assistance and long-term recovery support during disasters.',
      features: ['Emergency shelter', 'Food and water', 'Medical aid', 'Rehabilitation'],
    },
    {
      icon: 'fas fa-ambulance',
      title: 'Emergency Response',
      description: '24/7 emergency response services for medical and disaster situations.',
      features: ['Ambulance service', 'Medical emergency', 'Disaster response', 'Crisis counseling'],
    },
  ];

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive humanitarian services for our community</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="section-container">
          <h2>What We Offer</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card-detailed">
                <div className="service-header">
                  <div className="service-icon-large">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="how-we-work">
        <div className="section-container">
          <h2>How We Work</h2>
          <div className="work-steps">
            <div className="work-step">
              <div className="step-number">1</div>
              <h3>Identify Need</h3>
              <p>We assess community needs and identify areas requiring assistance.</p>
            </div>
            <div className="work-step">
              <div className="step-number">2</div>
              <h3>Plan Response</h3>
              <p>Our team plans the most effective response strategy.</p>
            </div>
            <div className="work-step">
              <div className="step-number">3</div>
              <h3>Deploy Resources</h3>
              <p>We deploy trained volunteers and resources to affected areas.</p>
            </div>
            <div className="work-step">
              <div className="step-number">4</div>
              <h3>Monitor & Evaluate</h3>
              <p>We continuously monitor and evaluate our impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <section className="services-cta">
        <div className="section-container">
          <h2>Need Our Services?</h2>
          <p>
            Contact us today to learn more about how we can help you or your community.
          </p>
          <Link to="/contact" className="btn btn-primary">
            <i className="fas fa-phone"></i> Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;