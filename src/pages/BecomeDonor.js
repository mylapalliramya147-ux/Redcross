import React from 'react';
import './BecomeDonor.css';

const BecomeDonor = () => {
  return (
    <div className="become-donor">
      {/* Hero Section */}
      <section className="donor-hero">
        <div className="donor-hero-overlay"></div>
        <div className="donor-hero-content">
          <h1>Become a Blood Donor</h1>
          <p>Give the gift of life. Your blood donation can save up to three lives.</p>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="why-donate-section">
        <div className="section-container">
          <h2>Why Donate Blood?</h2>
          <div className="why-grid">
            <div className="why-card">
              <i className="fas fa-heart"></i>
              <h3>Save Lives</h3>
              <p>A single blood donation can save up to three lives. Your contribution makes a real difference.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-heartbeat"></i>
              <h3>Improve Health</h3>
              <p>Regular blood donation helps maintain healthy iron levels and reduces the risk of heart disease.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-users"></i>
              <h3>Help Community</h3>
              <p>Blood is needed every day for surgeries, cancer treatment, chronic illnesses, and traumatic injuries.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-clipboard-check"></i>
              <h3>Free Health Checkup</h3>
              <p>Before donating, you'll receive a mini health screening including pulse, blood pressure, and hemoglobin test.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility-section">
        <div className="section-container">
          <h2>Who Can Donate Blood?</h2>
          <div className="eligibility-content">
            <div className="eligibility-card eligible">
              <h3><i className="fas fa-check-circle"></i> You Can Donate If:</h3>
              <ul>
                <li>You are between 18 to 65 years old</li>
                <li>You weigh at least 45 kgs</li>
                <li>Your hemoglobin is at least 12.5 g/dL</li>
                <li>You are in good health on the day of donation</li>
                <li>Your last blood donation was at least 90 days ago</li>
                <li>You have normal blood pressure</li>
              </ul>
            </div>
            <div className="eligibility-card not-eligible">
              <h3><i className="fas fa-times-circle"></i> You Cannot Donate If:</h3>
              <ul>
                <li>You have cold, flu, or any infection</li>
                <li>You have dental work in the last 24 hours</li>
                <li>You have low hemoglobin or blood pressure</li>
                <li>You have undergone major surgery recently</li>
                <li>You are pregnant or breastfeeding</li>
                <li>You have certain medical conditions (HIV, hepatitis, etc.)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section className="preparation-section">
        <div className="section-container">
          <h2>Before Your Donation</h2>
          <div className="preparation-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Get Adequate Sleep</h3>
                <p>Ensure you get 7-8 hours of sleep the night before your donation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Stay Hydrated</h3>
                <p>Drink plenty of water and avoid alcohol for 24 hours before donating.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Eat Healthy</h3>
                <p>Have a nutritious meal rich in iron and vitamin C before donation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Bring ID</h3>
                <p>Carry a valid photo ID and any donor card if you have one.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="registration-section">
        <div className="section-container">
          <h2>Ready to Donate?</h2>
          <div className="registration-card">
            <p>Register yourself as a blood donor and help save lives. Our team will contact you when there's a need for blood donation.</p>
            <div className="registration-form">
              <form onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for registering! Our team will contact you soon.');
              }}>
                <div className="form-row">
                  <input type="text" placeholder="Full Name" required />
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-row">
                  <input type="email" placeholder="Email Address" required />
                  <input type="text" placeholder="Blood Group" required />
                </div>
                <div className="form-row">
                  <input type="text" placeholder="City" required />
                  <input type="number" placeholder="Age" min="18" max="65" required />
                </div>
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-heart"></i> Register as Donor
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Does blood donation hurt?</h3>
              <p>You may feel a brief pinch when the needle is inserted, but the donation itself is generally painless.</p>
            </div>
            <div className="faq-item">
              <h3>How long does donation take?</h3>
              <p>The actual blood draw takes about 8-10 minutes, but the entire process including registration and refreshments takes about 1 hour.</p>
            </div>
            <div className="faq-item">
              <h3>How often can I donate blood?</h3>
              <p>You can donate whole blood every 90 days (approximately 3 months).</p>
            </div>
            <div className="faq-item">
              <h3>Is it safe to donate blood?</h3>
              <p>Yes, blood donation is very safe. Sterile, single-use needles and equipment are used for each donor.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeDonor;