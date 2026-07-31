import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Kakinada Redcross Admin Dashboard</h1>
        <div className="user-info">
          <span>Welcome, {user?.username}</span>
          <button onClick={logout} className="btn btn-danger">
            Logout
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Donations</h3>
            <p className="stat-number">1,234</p>
          </div>
          <div className="stat-card">
            <h3>Active Volunteers</h3>
            <p className="stat-number">567</p>
          </div>
          <div className="stat-card">
            <h3>Events This Month</h3>
            <p className="stat-number">12</p>
          </div>
          <div className="stat-card">
            <h3>Blood Donations</h3>
            <p className="stat-number">890</p>
          </div>
        </div>

        <div className="dashboard-sections">
          <div className="section-card">
            <h2>Quick Actions</h2>
            <div className="action-buttons">
              <button className="btn btn-primary">Manage Events</button>
              <button className="btn btn-primary">View Donations</button>
              <button className="btn btn-primary">Manage Volunteers</button>
              <button className="btn btn-primary">Generate Reports</button>
            </div>
          </div>

          <div className="section-card">
            <h2>Recent Activity</h2>
            <ul className="activity-list">
              <li>New donation received - $500 from John Doe</li>
              <li>Volunteer registration - Jane Smith</li>
              <li>Event scheduled - Blood Donation Camp on Aug 15</li>
              <li>Report generated - Monthly donation summary</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;