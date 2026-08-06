import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Events.css';
import DayCard from '../components/DayCard';
import { events, formatDate } from '../data/eventsData';
import januaryImage from '../assets/events/january.jpeg';
import februaryImage from '../assets/events/february.jpeg';
import marchImage from '../assets/events/march.jpeg';
import aprilImage from '../assets/events/april.jpeg';
import mayImage from '../assets/events/may.jpeg';
import juneImage from '../assets/events/june.jpeg';
import julyImage from '../assets/events/july.jpeg';
import augustImage from '../assets/events/august.jpeg';
import septemberImage from '../assets/events/september.jpeg';
import octoberImage from '../assets/events/october.jpeg';
import novemberImage from '../assets/events/november.jpeg';
import decemberImage from '../assets/events/december.jpeg';

const Events = () => {
  const eventsData = events;

  // Group events by month
  const groupedEvents = eventsData.reduce((acc, event) => {
    const date = new Date(event.date);
    const monthName = date.toLocaleDateString('en-US', { month: 'long' });
    if (!acc[monthName]) {
      acc[monthName] = [];
    }
    acc[monthName].push(event);
    return acc;
  }, {});

  const monthOrder = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];

  const [selectedEvent, setSelectedEvent] = useState(eventsData[0]);

  const monthImageMap = {
    'January': januaryImage,
    'February': februaryImage,
    'March': marchImage,
    'April': aprilImage,
    'May': mayImage,
    'June': juneImage,
    'July': julyImage,
    'August': augustImage,
    'September': septemberImage,
    'October': octoberImage,
    'November': novemberImage,
    'December': decemberImage
  };

  const getMonthImage = (month) => {
    return monthImageMap[month] || januaryImage;
  };

  const awarenessSectionRef = useRef(null);
  const location = useLocation();

  // Auto-scroll configuration
  const SCROLL_SPEED = 4; // pixels per frame for smooth continuous scroll
  const PAUSE_DURATION = 3000; // milliseconds to wait before resuming after user interaction
  const SCROLL_CONTAINER_ID = 'events-scroll-container';

  useEffect(() => {
    if (location.pathname !== '/events') return;

    const container = document.getElementById(SCROLL_CONTAINER_ID);
    if (!container) return;

    let animationFrameId;
    let pauseTimeoutId;
    let isPaused = false;
    let cancelled = false;
    let scrollDirection = 1; // 1 = scrolling down, -1 = scrolling up

    // Wait for all images inside the container to load before starting auto-scroll
    const waitForImages = () => {
      const images = container.querySelectorAll('img');
      const imagePromises = Array.from(images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', resolve, { once: true });
        });
      });
      return Promise.all(imagePromises);
    };

    const scrollStep = () => {
      if (!isPaused && container) {
        const maxScroll = container.scrollHeight - container.clientHeight;

        if (maxScroll <= 0) {
          animationFrameId = requestAnimationFrame(scrollStep);
          return;
        }

        // Scroll in current direction
        container.scrollTop += SCROLL_SPEED * scrollDirection;

        // Check boundaries and reverse direction
        if (scrollDirection === 1 && container.scrollTop >= maxScroll) {
          // Reached bottom, reverse to scroll up
          container.scrollTop = maxScroll;
          scrollDirection = -1;
        } else if (scrollDirection === -1 && container.scrollTop <= 0) {
          // Reached top, reverse to scroll down
          container.scrollTop = 0;
          scrollDirection = 1;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    // Detect user interaction
    const handleUserInteraction = () => {
      isPaused = true;

      // Clear any existing pause timeout
      if (pauseTimeoutId) {
        clearTimeout(pauseTimeoutId);
      }

      // Resume after inactivity
      pauseTimeoutId = setTimeout(() => {
        isPaused = false;
      }, PAUSE_DURATION);
    };

    // Listen for scroll events from user
    container.addEventListener('wheel', handleUserInteraction, { passive: true });
    container.addEventListener('touchmove', handleUserInteraction, { passive: true });
    container.addEventListener('touchstart', handleUserInteraction, { passive: true });
    container.addEventListener('mousedown', handleUserInteraction);

    // Start auto-scroll after images have loaded so scrollHeight is accurate
    waitForImages().then(() => {
      if (cancelled) return;
      animationFrameId = requestAnimationFrame(scrollStep);
    });

    // Cleanup
    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrameId);
      if (pauseTimeoutId) {
        clearTimeout(pauseTimeoutId);
      }
      container.removeEventListener('wheel', handleUserInteraction);
      container.removeEventListener('touchmove', handleUserInteraction);
      container.removeEventListener('touchstart', handleUserInteraction);
      container.removeEventListener('mousedown', handleUserInteraction);
    };
  }, [location.pathname]);

  return (
    <div className="calendar">
      {/* Hero Section */}
      <section className="calendar-hero">
        <div className="calendar-hero-overlay"></div>
        <div className="calendar-hero-content">
          <h1>Awareness Days Calendar</h1>
          <p>Stay informed about national and international awareness days</p>
        </div>
      </section>

      {/* Events List Section */}
      <section className="events-list-section" ref={awarenessSectionRef}>
        <div className="section-container">
          <h2>National & International Awareness Days</h2>

          <div id={SCROLL_CONTAINER_ID} className="events-scroll-container">
            {monthOrder.map((month) => {
              const monthEvents = groupedEvents[month];
              if (!monthEvents || monthEvents.length === 0) return null;

              return (
                <div key={month} className="month-section">
                  <h3 className="month-title">{month}</h3>
                  <div className="events-with-image">
                    <div className="events-column">
                      {monthEvents.map((event) => (
                        <div
                          key={event.id}
                          className="event-card-wrapper"
                          onClick={() => setSelectedEvent(event)}
                        >
                          <DayCard
                            date={formatDate(event.date)}
                            title={event.title}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="image-column">
                      <div className="image-container">
                        <img
                          src={getMonthImage(month)}
                          alt={`${month} Awareness`}
                          className="awareness-image"
                          key={`${month}-${selectedEvent?.id}`}
                          onError={(e) => {
                            e.target.src = januaryImage;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="calendar-cta">
        <div className="section-container">
          <h2>Want to Learn More About These Days?</h2>
          <p>Contact us for educational resources and partnership opportunities.</p>
          <Link to="/contact" className="btn btn-primary">
            <i className="fas fa-envelope"></i> Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;