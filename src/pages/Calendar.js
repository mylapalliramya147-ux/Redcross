import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Calendar.css';

const Calendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: 'Blood Donation Camp',
      date: '2024-02-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Community Center, Vijayawada',
      description: 'Join us for our monthly blood donation camp. Your donation can save up to 3 lives.',
      category: 'donation'
    },
    {
      id: 2,
      title: 'First Aid Training Workshop',
      date: '2024-02-20',
      time: '9:00 AM - 5:00 PM',
      location: 'Red Cross Office, Guntur',
      description: 'Learn essential first aid skills from certified instructors.',
      category: 'training'
    },
    {
      id: 3,
      title: 'Disaster Response Drills',
      date: '2024-02-25',
      time: '8:00 AM - 2:00 PM',
      location: 'Multiple Locations',
      description: 'Practice disaster response procedures and emergency preparedness.',
      category: 'emergency'
    },
    {
      id: 4,
      title: 'Health Awareness Campaign',
      date: '2024-03-05',
      time: '10:00 AM - 3:00 PM',
      location: 'Public Ground, Visakhapatnam',
      description: 'Free health checkups and awareness programs for the community.',
      category: 'health'
    },
    {
      id: 5,
      title: 'Fundraising Gala',
      date: '2024-03-15',
      time: '6:00 PM - 10:00 PM',
      location: 'Grand Hotel, Hyderabad',
      description: 'Annual fundraising event to support our humanitarian activities.',
      category: 'fundraising'
    },
    {
      id: 6,
      title: 'Volunteer Recognition Ceremony',
      date: '2024-03-20',
      time: '5:00 PM - 8:00 PM',
      location: 'Conference Hall, Red Cross HQ',
      description: 'Honoring our dedicated volunteers for their invaluable service.',
      category: 'volunteer'
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'donation': return 'fas fa-tint';
      case 'training': return 'fas fa-chalkboard-teacher';
      case 'emergency': return 'fas fa-first-aid';
      case 'health': return 'fas fa-heartbeat';
      case 'fundraising': return 'fas fa-hand-holding-heart';
      case 'volunteer': return 'fas fa-users';
      default: return 'fas fa-calendar-alt';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'donation': return '#d34a3a';
      case 'training': return '#3a7bd5';
      case 'emergency': return '#f5a623';
      case 'health': return '#7ed321';
      case 'fundraising': return '#bd10e0';
      case 'volunteer': return '#50e3c2';
      default: return '#d34a3a';
    }
  };

  return (
    <div className="calendar">
      {/* Hero Section */}
      <section className="calendar-hero">
        <div className="calendar-hero-overlay"></div>
        <div className="calendar-hero-content">
          <h1>Events Calendar</h1>
          <p>Stay updated with our upcoming activities and events</p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="calendar-section">
        <div className="section-container">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="event-card"
                onClick={() => setSelectedEvent(event)}
              >
                <div 
                  className="event-category" 
                  style={{ backgroundColor: getCategoryColor(event.category) }}
                >
                  <i className={getCategoryIcon(event.category)}></i>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-date">
                    <i className="fas fa-calendar"></i>
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="event-time">
                    <i className="fas fa-clock"></i>
                    <span>{event.time}</span>
                  </div>
                  <div className="event-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{event.location}</span>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <button className="btn-event-details">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Event Details */}
      {selectedEvent && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedEvent(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div 
              className="modal-header" 
              style={{ backgroundColor: getCategoryColor(selectedEvent.category) }}
            >
              <i className={getCategoryIcon(selectedEvent.category)}></i>
              <h2>{selectedEvent.title}</h2>
            </div>
            <div className="modal-body">
              <div className="event-info">
                <div className="info-item">
                  <i className="fas fa-calendar"></i>
                  <span>{new Date(selectedEvent.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-clock"></i>
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{selectedEvent.location}</span>
                </div>
              </div>
              <p className="modal-description">{selectedEvent.description}</p>
              <Link to="/contact" className="btn btn-primary" onClick={() => setSelectedEvent(null)}>
                Register for Event
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="calendar-cta">
        <div className="section-container">
          <h2>Want to Organize an Event?</h2>
          <p>Contact us to collaborate on community initiatives and humanitarian activities.</p>
          <Link to="/contact" className="btn btn-primary">
            <i className="fas fa-envelope"></i> Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Calendar;