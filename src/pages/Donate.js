import React, { useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const handleAmountChange = (amount) => {
    setDonationAmount(amount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    alert(`Thank you for your ${donationType === 'one-time' ? 'donation' : 'pledge'} of ₹${donationAmount}!`);
  };

  return (
    <div className="donate">
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="donate-hero-overlay"></div>
        <div className="donate-hero-content">
          <h1>Make a Donation</h1>
          <p>Your contribution helps us save lives and support communities in need</p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="donation-section">
        <div className="section-container">
          <div className="donation-content">
            <h2>Choose Your Donation</h2>
            <p>
              Every donation counts and makes a significant impact on our ability to 
              provide humanitarian aid. Your generosity enables us to continue 
              our mission.
            </p>

            <div className="donation-options">
              <div className="donation-type">
                <button
                  className={donationType === 'one-time' ? 'active' : ''}
                  onClick={() => setDonationType('one-time')}
                >
                  One Time
                </button>
                <button
                  className={donationType === 'monthly' ? 'active' : ''}
                  onClick={() => setDonationType('monthly')}
                >
                  Monthly
                </button>
              </div>

              <form onSubmit={handleSubmit} className="donation-form">
                <div className="amount-options">
                  <button type="button" onClick={() => handleAmountChange('500')}>
                    ₹500
                  </button>
                  <button type="button" onClick={() => handleAmountChange('1000')}>
                    ₹1000
                  </button>
                  <button type="button" onClick={() => handleAmountChange('2000')}>
                    ₹2000
                  </button>
                  <button type="button" onClick={() => handleAmountChange('5000')}>
                    ₹5000
                  </button>
                </div>

                <div className="custom-amount">
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    min="100"
                  />
                </div>

                <button type="submit" className="btn btn-primary donate-submit">
                  <i className="fas fa-heart"></i> Donate Now
                </button>
              </form>
            </div>
          </div>

          <div className="donation-image">
            <img 
              src="https://images.unsplash.com/photo-1532996120284-825baf810c74?w=600&h=400&fit=crop" 
              alt="Donate Blood" 
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="section-container">
          <h2>Your Impact</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <h3>₹500</h3>
              <p>Provides first aid kit for 10 families</p>
            </div>
            <div className="impact-card">
              <h3>₹1000</h3>
              <p>Supports emergency response training for 1 volunteer</p>
            </div>
            <div className="impact-card">
              <h3>₹2000</h3>
              <p>Provides blood for 2 emergency cases</p>
            </div>
            <div className="impact-card">
              <h3>₹5000</h3>
              <p>Funds disaster relief shelter for 1 family</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways Section */}
      <section className="other-ways">
        <div className="section-container">
          <h2>Other Ways to Help</h2>
          <div className="ways-grid">
            <div className="way-card">
              <i className="fas fa-tshirt"></i>
              <h3>Donate Clothes</h3>
              <p>Donate unused clothes to help disaster victims.</p>
            </div>
            <div className="way-card">
              <i className="fas fa-apple-alt"></i>
              <h3>Food Donations</h3>
              <p>Contribute food items for emergency relief.</p>
            </div>
            <div className="way-card">
              <i className="fas fa-user-friends"></i>
              <h3>Volunteer</h3>
              <p>Give your time and skills to save lives.</p>
            </div>
            <div className="way-card">
              <i className="fas fa-piggy-bank"></i>
              <h3>Fundraise</h3>
              <p>Organize fundraising events in your community.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;