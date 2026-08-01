import React from 'react';
import { Link } from 'react-router-dom';
import dunantImage from '../assets/dunaun.png';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: 'fas fa-heartbeat',
      title: 'Blood Donation',
      description: 'Donate blood and save lives. We organize regular blood donation camps across the region.',
    },
    {
      icon: 'fas fa-first-aid',
      title: 'First Aid Training',
      description: 'Learn life-saving first aid techniques from certified trainers.',
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'Disaster Relief',
      description: 'Providing immediate assistance during natural disasters and emergencies.',
    },
    {
      icon: 'fas fa-ambulance',
      title: 'Emergency Response',
      description: '24/7 emergency response services for medical and disaster situations.',
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-wrapper">
          <img 
            src={dunantImage} 
            alt="Henry Dunant - Founder of the Red Cross" 
            loading="lazy"
          />
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="section-container">
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              The Kakinada Redcross Society is a humanitarian organization dedicated to 
              providing emergency assistance, disaster relief, and education in 
              communities affected by natural and man-made disasters. We work tirelessly 
              to save lives and support those in need.
            </p>
            <Link to="/about" className="btn btn-outline">
              Read More About Us
            </Link>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1593113630166-c5e7dfc0e4d9?w=600&h=400&fit=crop" 
              alt="Red Cross Volunteers" 
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview">
        <div className="section-container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="service-link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2>Become a Volunteer</h2>
            <p>
              Your time and skills can make a huge impact. Join our volunteer network 
              and help us reach more people in need.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Join Us Today
            </Link>
          </div>
        </div>
      </section>
   </div>
    
  );
};

export default Home;