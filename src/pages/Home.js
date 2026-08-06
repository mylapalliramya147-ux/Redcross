import React from 'react';
import { Link } from 'react-router-dom';
import henryImage from '../assets/events/henrii.png';
import volunteerImage from '../assets/events/volunteer.jpeg';
import medicalCampImage from '../assets/events/medical camp.jpg';
import disasterImage from '../assets/events/disaster.webp';
import healthCareImage from '../assets/events/health care.webp';
import communityOutreachImage from '../assets/events/community outreach.jpeg';
import shanMohanImage from '../assets/events/ShanMohan.webp';
import ramaraoImage from '../assets/events/ramarao.jpeg';
import Gallery from '../components/Gallery';
import { getUpcomingEvents, formatDate } from '../data/eventsData';
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

  const teamMembers = [
    {
      name: 'Sri. M.N Harendra Prasad, IAS',
      position: 'President',
      location: 'Kakinada',
      image: shanMohanImage,
      color: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    },
    {
      name: 'Sri. Y. D. Rama Rao',
      position: 'Chairman',
      location: 'Kakinada',
      image: ramaraoImage,
      color: 'linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%)',
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
      image: 'https://images.unsplash.com/photo-1557862433-33c1b0c7e6d3?w=300&h=300&fit=crop',
      color: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
    },
  ];

  const galleryImages = [
    { src: volunteerImage, title: 'Volunteer Team', alt: 'Red Cross volunteer team' },
    { src: medicalCampImage, title: 'Medical Camp', alt: 'Medical camp for community' },
    { src: disasterImage, title: 'Disaster Relief', alt: 'Disaster relief efforts' },
    { src: healthCareImage, title: 'Healthcare Services', alt: 'Healthcare services' },
    { src: communityOutreachImage, title: 'Community Outreach', alt: 'Community outreach program' },
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Blood Donation Camp Successfully Conducted',
      description: 'More than 250 voluntary blood donors participated in the district-level blood donation drive.',
      date: 'June 15, 2025',
      image: volunteerImage,
    },
    {
      id: 2,
      title: 'Free Medical Health Camp',
      description: 'Medical specialists provided free health check-ups and medicines to rural communities.',
      date: 'May 28, 2025',
      image: medicalCampImage,
    },
    {
      id: 3,
      title: 'Youth Red Cross Volunteer Training',
      description: 'Students participated in first aid and disaster preparedness training programmes.',
      date: 'April 10, 2025',
      image: communityOutreachImage,
    },
  ];

  const upcomingEvents = getUpcomingEvents(3);

  const limitedGalleryImages = galleryImages.slice(0, 5);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src={henryImage} alt="Sir Jean-Henri Dunant - Founder of the Red Cross" />
          <div className="hero-bg-overlay"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Together We Can Make a Difference</h1>
            <p className="hero-subtitle">
              Join hands with Kakinada Red Cross to provide humanitarian aid and save lives.
            </p>
            <blockquote className="hero-quote">
              "Humanity is our greatest strength."
              <cite>— Henry Dunant</cite>
            </blockquote>
            <div className="hero-buttons">
              <Link to="/donate" className="btn btn-primary">
                <i className="fas fa-heart"></i> Donate Now
              </Link>
              <Link to="/services" className="btn btn-outline-light">
                <i className="fas fa-info-circle"></i> Learn More
              </Link>
            </div>
          </div>
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

      {/* Upcoming Events Section */}
      <section className="upcoming-events-section">
        <div className="section-container">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="upcoming-events-subtitle">
            Join us in our upcoming awareness days and community events.
          </p>
          <div className="upcoming-events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="upcoming-event-card">
                <div className="upcoming-event-date">
                  <span className="upcoming-event-day">{formatDate(event.date)}</span>
                </div>
                <div className="upcoming-event-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <span className="upcoming-event-location">
                    <i className="fas fa-map-marker-alt"></i> {event.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="upcoming-events-cta">
            <Link to="/events" className="btn btn-primary">
              View All Events <i className="fas fa-calendar-alt"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="leadership-section">
        <div className="section-container">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="leadership-subtitle">
            Meet the dedicated individuals who guide our mission and lead our humanitarian efforts.
          </p>
          <div className="leadership-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="leadership-card">
                <div className="leadership-image">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={member.name === 'Sri. Y. D. Rama Rao' ? { objectPosition: 'center 35%', transform: 'scale(1.1)' } : {}}
                  />
                </div>
                <div className="leadership-info" style={{ background: member.color }}>
                  <h3>{member.name}</h3>
                  <p className="leadership-position">{member.position}</p>
                  <p className="leadership-location">{member.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery images={limitedGalleryImages} />

      {/* News & Updates Section */}
      <section className="news-updates-section">
        <div className="section-container">
          <h2 className="section-title">News & Updates</h2>
          <p className="news-updates-subtitle">
            Stay informed with the latest activities, humanitarian initiatives, achievements, and important announcements from the Kakinada District Red Cross.
          </p>
          <div className="news-grid">
            {newsItems.map((news) => (
              <article key={news.id} className="news-card">
                <div className="news-image">
                  <img src={news.image} alt={news.title} loading="lazy" />
                </div>
                <div className="news-content">
                  <span className="news-date">{news.date}</span>
                  <h3>{news.title}</h3>
                  <p>{news.description}</p>
                </div>
              </article>
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