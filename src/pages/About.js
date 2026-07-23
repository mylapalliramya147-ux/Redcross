import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'President',
      image: 'https://images.unsplash.com/photo-1567468255534-9d441a1b6e3b?w=300&h=300&fit=crop',
    },
    {
      name: 'Sneha Reddy',
      position: 'Vice President',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c2f2f5c83?w=300&h=300&fit=crop',
    },
    {
      name: 'Amit Sharma',
      position: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1557862433-33c1b0c7e6d3?w=300&h=300&fit=crop',
    },
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About AP Red Cross</h1>
          <p>Dedicated to humanity since 1920</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              The AP Red Cross Society is committed to protecting life and health, 
              ensuring respect for all people, and reducing the vulnerability of 
              the population. We provide assistance to those affected by disasters, 
              armed conflicts, health emergencies, and other crises.
            </p>
          </div>
          <div className="mission-values">
            <div className="value-card">
              <i className="fas fa-heart value-icon"></i>
              <h3>Humanity</h3>
              <p>We serve without discrimination to protect human dignity.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-handshake value-icon"></i>
              <h3>Impartiality</h3>
              <p>We provide aid based on need alone, regardless of race or religion.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-bolt value-icon"></i>
              <h3>Neutrality</h3>
              <p>We remain neutral in conflicts and political matters.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-shield-alt value-icon"></i>
              <h3>Independence</h3>
              <p>We maintain independence and autonomy in our operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="section-container">
          <h2>Our History</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1920</div>
              <div className="timeline-content">
                <h3>Foundation</h3>
                <p>AP Red Cross Society was established to serve the people of Andhra Pradesh.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1950</div>
              <div className="timeline-content">
                <h3>Expansion</h3>
                <p>Expanded services to cover all districts of the state.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1980</div>
              <div className="timeline-content">
                <h3>Blood Bank Initiative</h3>
                <p>Started organized blood donation camps across the state.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2000</div>
              <div className="timeline-content">
                <h3>Modern Era</h3>
                <p>Adopted modern technology and training methodologies.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Digital Transformation</h3>
                <p>Launched digital platforms for better community engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="join-cta">
        <div className="section-container">
          <h2>Join Our Cause</h2>
          <p>
            Become part of our mission to save lives and support communities in need.
          </p>
          <Link to="/contact" className="btn btn-primary">
            <i className="fas fa-user-plus"></i> Volunteer With Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;