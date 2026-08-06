import React from 'react';
import { Link } from 'react-router-dom';
import shanMohanImage from '../assets/events/ShanMohan.webp';
import ramaraoImage from '../assets/events/ramarao.jpeg';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Sri. Shan Mohan Sagili, IAS',
      position: 'President',
      location: 'Kakinada',
      image: shanMohanImage,
      color: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
    },
    {
      name: 'Sri. Y. D. Rama Rao',
      position: 'Chairman',
      location: 'Kakinada',
      image: ramaraoImage,
      color: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
    },
    {
      name: 'Dr. N. Suguna',
      position: 'Vice Chairman',
      location: 'Kakinada',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c2f2f5c83?w=300&h=300&fit=crop',
      color: 'linear-gradient(135deg, #FF6B35 0%, #E85D04 100%)',
    },
    {
      name: 'Sri. N. V. V. R. K. Prasad Babu',
      position: 'Treasurer',
      location: 'Kakinada',
      color: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
    },
  ];

  return (
      <div className="about">
        {/* Hero Section */}
<section className="about-hero">
         <div className="about-hero-overlay"></div>
         <div className="about-hero-content">
            <h1>About Kakinada Redcross</h1>
            <p>Dedicated to humanity since 1920</p>
          </div>
       </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              The Kakinada Redcross Society is committed to protecting life and health, 
              ensuring respect for all people, and reducing the vulnerability of 
              the population. We provide assistance to those affected by disasters, 
              armed conflicts, health emergencies, and other crises.
            </p>
          </div>
        </div>
      </section>

      {/* Seven Fundamental Principles Section */}
      <section className="principles-section">
        <div className="section-container">
          <h2 className="principles-title">Seven Fundamental Principles</h2>
          <div className="principles-grid">
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
          <div className="principles-row">
            <div className="value-card">
              <i className="fas fa-hands-helping value-icon"></i>
              <h3>Voluntary Service</h3>
              <p>Serve selflessly</p>
            </div>
            <div className="value-card">
              <i className="fas fa-users value-icon"></i>
              <h3>Unity</h3>
              <p>One for all</p>
            </div>
            <div className="value-card">
              <i className="fas fa-globe-americas value-icon"></i>
              <h3>Universality</h3>
              <p>Equal for everyone</p>
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
                <p>Kakinada Redcross Society was established to serve the people of Andhra Pradesh.</p>
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
          <p className="leadership-subtitle">
            Meet the dedicated individuals who guide our mission and lead our humanitarian efforts.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                {member.image && (
                  <div className="team-image">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      style={member.name === 'Sri. Y. D. Rama Rao' ? { objectPosition: 'center 35%', transform: 'scale(1.1)' } : {}}
                    />
                  </div>
                )}
                {member.color && (
                  <div className="team-info" style={{ background: member.color }}>
                    <h3>{member.name}</h3>
                    <p className="team-position">{member.position}</p>
                    <p className="team-location">{member.location}</p>
                  </div>
                )}
                {!member.color && (
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p className="team-position">{member.position}</p>
                    <p className="team-location">{member.location}</p>
                  </div>
                )}
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