import React from 'react';
import './BecomeVolunteer.css';

const BecomeVolunteer = () => {
  return (
    <div className="become-volunteer">
      {/* Hero Section */}
      <section className="volunteer-hero">
        <div className="volunteer-hero-overlay"></div>
        <div className="volunteer-hero-content">
          <h1>Become a Volunteer</h1>
          <p>Join our team of dedicated volunteers and make a difference in your community.</p>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="why-volunteer-section">
        <div className="section-container">
          <h2>Why Volunteer With Us?</h2>
          <div className="why-grid">
            <div className="why-card">
              <i className="fas fa-hands-helping"></i>
              <h3>Make an Impact</h3>
              <p>Directly contribute to humanitarian efforts and help those in need during emergencies and disasters.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-users"></i>
              <h3>Build Community</h3>
              <p>Connect with like-minded individuals who share your passion for service and making a difference.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-graduation-cap"></i>
              <h3>Learn New Skills</h3>
              <p>Gain valuable experience in first aid, disaster management, communication, and leadership.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-certificate"></i>
              <h3>Get Certified</h3>
              <p>Receive training and certification in various Red Cross programs that enhance your professional profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Roles Section */}
      <section className="roles-section">
        <div className="section-container">
          <h2>Volunteer Opportunities</h2>
          <div className="roles-grid">
            <div className="role-card">
              <i className="fas fa-first-aid"></i>
              <h3>First Aid Volunteer</h3>
              <p>Provide first aid support at events, emergencies, and community programs. Training provided.</p>
              <span className="commitment">Time Commitment: Flexible</span>
            </div>
            <div className="role-card">
              <i className="fas fa-ambulance"></i>
              <h3>Emergency Response</h3>
              <p>Assist during disasters and emergencies. Help with evacuation, relief distribution, and support services.</p>
              <span className="commitment">Time Commitment: On-call</span>
            </div>
            <div className="role-card">
              <i className="fas fa-hand-holding-heart"></i>
              <h3>Community Outreach</h3>
              <p>Conduct awareness programs, health camps, and community education initiatives.</p>
              <span className="commitment">Time Commitment: 4-6 hours/week</span>
            </div>
            <div className="role-card">
              <i className="fas fa-laptop"></i>
              <h3>Digital Volunteer</h3>
              <p>Help with social media management, content creation, website updates, and digital campaigns.</p>
              <span className="commitment">Time Commitment: Remote/Flexible</span>
            </div>
            <div className="role-card">
              <i className="fas fa-tint"></i>
              <h3>Blood Donation Camp</h3>
              <p>Organize and assist at blood donation camps. Help with donor registration and camp management.</p>
              <span className="commitment">Time Commitment: Event-based</span>
            </div>
            <div className="role-card">
              <i className="fas fa-child"></i>
              <h3>Youth Volunteer</h3>
              <p>Join our youth wing and participate in special programs, competitions, and community service projects.</p>
              <span className="commitment">Time Commitment: 2-3 hours/week</span>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="training-section">
        <div className="section-container">
          <h2>Training & Development</h2>
          <div className="training-content">
            <div className="training-card">
              <i className="fas fa-medkit"></i>
              <h3>First Aid Training</h3>
              <p>Comprehensive training in CPR, wound care, and emergency response techniques.</p>
            </div>
            <div className="training-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Disaster Management</h3>
              <p>Learn disaster preparedness, response strategies, and relief operations management.</p>
            </div>
            <div className="training-card">
              <i className="fas fa-comments"></i>
              <h3>Communication Skills</h3>
              <p>Develop effective communication skills for interacting with victims, communities, and teams.</p>
            </div>
            <div className="training-card">
              <i className="fas fa-map-marked-alt"></i>
              <h3>Navigation & Mapping</h3>
              <p>Learn basic navigation, mapping, and GPS skills for field operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements-section">
        <div className="section-container">
          <h2>Volunteer Requirements</h2>
          <div className="requirements-content">
            <div className="requirement-card">
              <h3><i className="fas fa-user-check"></i> Basic Requirements</h3>
              <ul>
                <li>Minimum age: 16 years (with parental consent) or 18+</li>
                <li>Commitment to Red Cross principles and values</li>
                <li>Willingness to learn and participate in training programs</li>
                <li>Good physical and mental health</li>
                <li>Ability to work in a team</li>
              </ul>
            </div>
            <div className="requirement-card">
              <h3><i className="fas fa-clipboard-list"></i> Preferred Qualifications</h3>
              <ul>
                <li>Previous volunteer experience</li>
                <li>Basic computer literacy</li>
                <li>Good communication skills</li>
                <li>Flexible availability</li>
                <li>Willingness to travel if needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="registration-section">
        <div className="section-container">
          <h2>Join Our Volunteer Team</h2>
          <div className="registration-card">
            <p>Fill out the form below to register as a volunteer. Our team will review your application and contact you with next steps, including training schedules.</p>
            <div className="registration-form">
              <form onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your interest in volunteering! We will contact you soon with further details.');
              }}>
                <div className="form-row">
                  <input type="text" placeholder="Full Name" required />
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email Address" required />
                  <input type="number" placeholder="Age" min="16" max="65" required />
                </div>
                <div className="form-row">
                  <input type="text" placeholder="City" required />
                  <select required>
                    <option value="">Select Area of Interest</option>
                    <option value="first-aid">First Aid</option>
                    <option value="emergency">Emergency Response</option>
                    <option value="outreach">Community Outreach</option>
                    <option value="digital">Digital/Social Media</option>
                    <option value="blood-camp">Blood Donation Camp</option>
                    <option value="youth">Youth Programs</option>
                  </select>
                </div>
                <div className="form-row full-width">
                  <textarea placeholder="Tell us why you want to volunteer and any relevant experience" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-hand-holding-heart"></i> Register as Volunteer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2>What Our Volunteers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Volunteering with the Red Cross has been one of the most rewarding experiences of my life. I've learned so much and met amazing people."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="author-info">
                  <h4>Rahul Sharma</h4>
                  <p>Volunteer since 2020</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The training I received as a volunteer has not only helped me serve the community but also enhanced my professional skills."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="author-info">
                  <h4>Priya Patel</h4>
                  <p>Volunteer since 2019</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Being part of the Red Cross family gives me a sense of purpose. Every small contribution counts towards saving lives."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="author-info">
                  <h4>Arun Kumar</h4>
                  <p>Volunteer since 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeVolunteer;