import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  // Upcoming awareness events for preview
  const upcomingEvents = [
    {
      id: 1,
      title: 'World AIDS Day',
      date: 'December 1',
      time: 'All Day',
      location: 'Global',
      description: 'Raising awareness about the AIDS pandemic and supporting those affected.',
      category: 'health',
      icon: 'fas fa-heartbeat'
    },
    {
      id: 2,
      title: 'International Volunteer Day',
      date: 'December 5',
      time: 'All Day',
      location: 'Global',
      description: 'Recognizing volunteers who contribute to making the world better.',
      category: 'volunteer',
      icon: 'fas fa-users'
    },
    {
      id: 3,
      title: 'Human Rights Day',
      date: 'December 10',
      time: 'All Day',
      location: 'Global',
      description: 'Promoting and protecting human rights globally.',
      category: 'awareness',
      icon: 'fas fa-lightbulb'
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'health': return '#7ed321';
      case 'volunteer': return '#50e3c2';
      case 'awareness': return '#9c27b0';
      case 'environment': return '#4caf50';
      default: return '#d34a3a';
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Together We Can Make a Difference
          </h1>
          <p className="hero-subtitle">
            Join hands with AP Red Cross to provide humanitarian aid and save lives
          </p>
          <div className="hero-buttons">
            <Link to="/donate" className="btn btn-primary">
              <i className="fas fa-heart"></i> Donate Now
            </Link>
            <Link to="/services" className="btn btn-secondary">
              <i className="fas fa-info-circle"></i> Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="section-container">
          <div className="about-content">
            <h2>Who We Are</h2>
            <p>
              The AP Red Cross Society is a humanitarian organization dedicated to 
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Awareness Days Preview Section */}
      <section className="calendar-preview">
        <div className="section-container">
          <h2 className="section-title">Important Awareness Days</h2>
          <p className="calendar-subtitle">
            Stay informed about upcoming awareness days and how you can get involved
          </p>
          <div className="events-preview-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-preview-card">
                <div 
                  className="event-preview-icon"
                  style={{ backgroundColor: getCategoryColor(event.category) }}
                >
                  <i className={event.icon}></i>
                </div>
                <div className="event-preview-content">
                  <h3>{event.title}</h3>
                  <div className="event-preview-date">
                    <i className="fas fa-calendar"></i>
                    <span>{event.date} | {event.time}</span>
                  </div>
                  <div className="event-preview-location">
                    <i className="fas fa-globe"></i>
                    <span>{event.location}</span>
                  </div>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/calender" className="btn btn-outline calendar-btn">
            View Full Calendar
          </Link>
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

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>5000+</h3>
              <p>Volunteers</p>
            </div>
            <div className="stat-item">
              <h3>10000+</h3>
              <p>Blood Units Donated</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Disaster Reliefs</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Training Programs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;