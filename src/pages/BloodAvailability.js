import React, { useState } from 'react';
import './BloodAvailability.css';

// Placeholder data - will be replaced with API call later
const bloodGroupsData = [
  { group: 'A+', status: 'Available', lastUpdated: new Date('2026-08-07T10:45:00') },
  { group: 'A-', status: 'Low Stock', lastUpdated: new Date('2026-08-07T10:30:00') },
  { group: 'B+', status: 'Available', lastUpdated: new Date('2026-08-07T10:45:00') },
  { group: 'B-', status: 'Critical', lastUpdated: new Date('2026-08-07T10:15:00') },
  { group: 'AB+', status: 'Available', lastUpdated: new Date('2026-08-07T10:45:00') },
  { group: 'AB-', status: 'Out of Stock', lastUpdated: new Date('2026-08-07T09:00:00') },
  { group: 'O+', status: 'Available', lastUpdated: new Date('2026-08-07T10:45:00') },
  { group: 'O-', status: 'Low Stock', lastUpdated: new Date('2026-08-07T10:30:00') },
];

const getStatusConfig = (status) => {
  switch (status) {
    case 'Available':
      return {
        color: '#16A34A',
        bgColor: '#DCFCE7',
        icon: '🟢',
        label: 'Available',
      };
    case 'Low Stock':
      return {
        color: '#CA8A04',
        bgColor: '#FEF3C7',
        icon: '🟡',
        label: 'Low Stock',
      };
    case 'Critical':
      return {
        color: '#EA580C',
        bgColor: '#FFEDD5',
        icon: '🟠',
        label: 'Critical',
      };
    case 'Out of Stock':
      return {
        color: '#DC2626',
        bgColor: '#FEE2E2',
        icon: '🔴',
        label: 'Out of Stock',
      };
    default:
      return {
        color: '#6B7280',
        bgColor: '#F3F4F6',
        icon: '⚪',
        label: 'Unknown',
      };
  }
};

const formatDateTime = (date) => {
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  return date.toLocaleDateString('en-IN', options);
};

const BloodAvailability = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    hospitalName: '',
    bloodGroup: '',
    units: '',
    contactNumber: '',
    email: '',
    requiredDate: '',
    purpose: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend validation
    if (!formData.patientName || !formData.hospitalName || !formData.bloodGroup || !formData.units || !formData.contactNumber || !formData.requiredDate) {
      alert('Please fill in all required fields');
      return;
    }
    // Success message - will be replaced with API call later
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({
      patientName: '',
      hospitalName: '',
      bloodGroup: '',
      units: '',
      contactNumber: '',
      email: '',
      requiredDate: '',
      purpose: '',
    });
  };

  const handleReset = () => {
    setFormData({
      patientName: '',
      hospitalName: '',
      bloodGroup: '',
      units: '',
      contactNumber: '',
      email: '',
      requiredDate: '',
      purpose: '',
    });
  };

  return (
    <div className="blood-availability-page">
      {/* Hero Section */}
      <section className="blood-hero">
        <div className="blood-hero-overlay"></div>
        <div className="blood-hero-container">
          <div className="blood-hero-content">
            <h1 className="blood-hero-title">
              🩸 Blood Bank
            </h1>
            <p className="blood-hero-subtitle">
              Indian Red Cross Society, Kakinada District Branch
            </p>
            <p className="blood-hero-note">
              Check blood availability, request blood, and learn about blood donation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Blood Availability */}
      <section className="blood-grid-section" id="availability">
        <div className="section-container">
          <div className="blood-grid">
            {bloodGroupsData.map((bloodGroup, index) => {
              const statusConfig = getStatusConfig(bloodGroup.status);
              return (
                <div key={index} className="blood-card">
                  <div className="blood-card-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={statusConfig.color}/>
                    </svg>
                  </div>
                  <h3 className="blood-group-name">{bloodGroup.group}</h3>
                  <div className="blood-status" style={{ color: statusConfig.color }}>
                    <span className="blood-status-icon">{statusConfig.icon}</span>
                    <span className="blood-status-text">{statusConfig.label}</span>
                  </div>
                  <div className="blood-last-updated">
                    <span className="blood-updated-label">Last Updated</span>
                    <span className="blood-updated-date">{formatDateTime(bloodGroup.lastUpdated)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legend Section */}
      <section className="blood-legend-section">
        <div className="section-container">
          <h2 className="blood-legend-title">Blood Availability Status</h2>
          <div className="blood-legend-grid">
            <div className="blood-legend-item">
              <span className="blood-legend-icon">🟢</span>
              <div className="blood-legend-content">
                <h4>Available</h4>
                <p>Blood units are currently available.</p>
              </div>
            </div>
            <div className="blood-legend-item">
              <span className="blood-legend-icon">🟡</span>
              <div className="blood-legend-content">
                <h4>Low Stock</h4>
                <p>Limited units available. Please contact the Blood Bank.</p>
              </div>
            </div>
            <div className="blood-legend-item">
              <span className="blood-legend-icon">🟠</span>
              <div className="blood-legend-content">
                <h4>Critical</h4>
                <p>Very few units remain.</p>
              </div>
            </div>
            <div className="blood-legend-item">
              <span className="blood-legend-icon">🔴</span>
              <div className="blood-legend-content">
                <h4>Out of Stock</h4>
                <p>Currently unavailable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="blood-notice-section">
        <div className="section-container">
          <div className="blood-notice-box">
            <h3 className="blood-notice-title">Important Notice</h3>
            <div className="blood-notice-content">
              <p>
                Blood availability changes throughout the day depending on donations and hospital requirements.
              </p>
              <p>
                Please contact the Indian Red Cross Society, Kakinada District Blood Bank before visiting to confirm availability.
              </p>
              <p>
                This page provides only the current availability status and does not guarantee reservation of blood units.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Request Blood */}
      <section className="blood-request-section" id="request">
        <div className="section-container">
          <h2 className="section-title">Request Blood</h2>
          <p className="section-subtitle">Need blood urgently? Submit a blood request and our team will contact you after verifying availability.</p>
          
          {showSuccess && (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              <p>Your blood request has been submitted successfully! Our team will contact you shortly.</p>
            </div>
          )}

          <form className="blood-request-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="patientName">Patient Name *</label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  required
                  placeholder="Enter patient name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="hospitalName">Hospital Name *</label>
                <input
                  type="text"
                  id="hospitalName"
                  name="hospitalName"
                  value={formData.hospitalName}
                  onChange={handleChange}
                  required
                  placeholder="Enter hospital name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="bloodGroup">Required Blood Group *</label>
                <select
                  id="bloodGroup"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select blood group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="units">Required Units *</label>
                <input
                  type="number"
                  id="units"
                  name="units"
                  value={formData.units}
                  onChange={handleChange}
                  required
                  min="1"
                  placeholder="Number of units"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number *</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  placeholder="Enter contact number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address (Optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="requiredDate">Required Date *</label>
                <input
                  type="date"
                  id="requiredDate"
                  name="requiredDate"
                  value={formData.requiredDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="purpose">Purpose / Remarks</label>
              <textarea
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                rows="4"
                placeholder="Enter purpose or any additional remarks"
              ></textarea>
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i> Submit Request
              </button>
              <button type="button" className="btn btn-outline" onClick={handleReset}>
                <i className="fas fa-redo"></i> Reset
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Section 5: Blood Donation Process */}
      <section className="blood-process-section" id="process">
        <div className="section-container">
          <h2 className="section-title">Blood Donation Process</h2>
          <p className="section-subtitle">The blood donation process is simple and safe. Here's what to expect:</p>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-icon">
                <i className="fas fa-clipboard-list"></i>
              </div>
              <h4>Step 1</h4>
              <h5>Registration</h5>
              <p>Sign up and provide your basic details and medical history.</p>
            </div>
            <div className="process-arrow">
              <i className="fas fa-arrow-down"></i>
            </div>
            <div className="process-step">
              <div className="process-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h4>Step 2</h4>
              <h5>Health Screening</h5>
              <p>Quick physical check and blood test to ensure you're healthy to donate.</p>
            </div>
            <div className="process-arrow">
              <i className="fas fa-arrow-down"></i>
            </div>
            <div className="process-step">
              <div className="process-icon">
                <i className="fas fa-syringe"></i>
              </div>
              <h4>Step 3</h4>
              <h5>Blood Donation</h5>
              <p>The actual donation takes only 8-10 minutes. You'll donate about 350-450 ml of blood.</p>
            </div>
            <div className="process-arrow">
              <i className="fas fa-arrow-down"></i>
            </div>
            <div className="process-step">
              <div className="process-icon">
                <i className="fas fa-coffee"></i>
              </div>
              <h4>Step 4</h4>
              <h5>Rest & Refreshments</h5>
              <p>Relax for a few minutes and enjoy light refreshments to replenish your energy.</p>
            </div>
            <div className="process-arrow">
              <i className="fas fa-arrow-down"></i>
            </div>
            <div className="process-step">
              <div className="process-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h4>Step 5</h4>
              <h5>Blood Processing & Storage</h5>
              <p>Your blood is tested, processed, and stored for future life-saving transfusions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Blood Bank Contact Information */}
      <section className="blood-contact-section" id="contact">
        <div className="section-container">
          <h2 className="section-title">Contact the Blood Bank</h2>
          <p className="section-subtitle">Reach out to us for any blood-related queries or emergencies.</p>
          
          <div className="blood-contact-card">
            <div className="contact-info-grid">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Blood Bank Phone Number</h4>
                  <p>+91-888-1234567</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-ambulance"></i>
                </div>
                <div className="contact-details">
                  <h4>Emergency Contact</h4>
                  <p>+91-888-7654321</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email Address</h4>
                  <p>bloodbank@kakinadaredcross.org</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Blood Bank Address</h4>
                  <p>Indian Red Cross Society, Kakinada District Branch, Andhra Pradesh</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-details">
                  <h4>Working Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <div className="contact-buttons">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <i className="fas fa-map"></i> Google Maps
              </a>
              <a href="tel:+918881234567" className="btn btn-outline-light">
                <i className="fas fa-phone-alt"></i> Call Now
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                <i className="fas fa-directions"></i> Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="blood-cta-section">
        <div className="section-container">
          <div className="blood-cta-content">
            <h2>Become a Lifesaver Today</h2>
            <p>
              Every blood donation can save multiple lives. Your contribution helps patients during emergencies, surgeries, and medical treatments.
            </p>
            <div className="blood-cta-buttons">
              <a href="#process" className="btn btn-primary">
                <i className="fas fa-heart"></i> Donate Blood
              </a>
              <a href="#contact" className="btn btn-outline-light">
                <i className="fas fa-phone-alt"></i> Contact Blood Bank
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Last Updated Banner */}
      <div className="blood-updated-banner">
        <div className="section-container">
          <div className="blood-updated-content">
            <i className="fas fa-clock"></i>
            <span>Last Updated: {formatDateTime(bloodGroupsData[0].lastUpdated)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodAvailability;