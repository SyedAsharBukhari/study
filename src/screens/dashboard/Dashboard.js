import React, { useState } from 'react';
import './Dashboard.css';
import { exit_session } from '../../config/apiHandle/apiHandle';

const Dashboard = () => {
  const [user] = useState({
    name: 'Ahmed Ali',
    email: 'ahmed@example.com',
    avatar: 'AA'
  });

  const [stats] = useState({
    totalUsers: 1247,
    revenue: 45600,
    orders: 328,
    products: 156
  });

  const [recentActivities] = useState([
    { id: 1, action: 'New user registered', time: '2 minutes ago', type: 'user' },
    { id: 2, action: 'Order #1234 completed', time: '15 minutes ago', type: 'order' },
    { id: 3, action: 'Product updated', time: '1 hour ago', type: 'product' },
    { id: 4, action: 'Payment received', time: '2 hours ago', type: 'payment' },
    { id: 5, action: 'New review posted', time: '3 hours ago', type: 'review' }
  ]);

  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Dashboard</h1>
          <p>Welcome back, {user.name}!</p>
        </div>
        <div className="header-right">
          {/* <div className="user-profile">
            <div className="avatar">{user.avatar}</div>
            <div className="user-info">
              <span className="user-name">{user.name}</span>
              <span className="user-email">{user.email}</span>
            </div>
          </div> */}
          <button onClick={() => exit_session()}>
            Logout
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="dashboard-nav">
        <button
          className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`nav-tab ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          Analytics
        </button>
        <button
          className={`nav-tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
        <button
          className={`nav-tab ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        {activeTab === 'overview' && (
          <>
            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon users-icon">👥</div>
                <div className="stat-content">
                  <h3>{stats.totalUsers.toLocaleString()}</h3>
                  <p>Total Users</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon revenue-icon">💰</div>
                <div className="stat-content">
                  <h3>Rs {stats.revenue.toLocaleString()}</h3>
                  <p>Revenue</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon orders-icon">📦</div>
                <div className="stat-content">
                  <h3>{stats.orders}</h3>
                  <p>Orders</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon products-icon">🛍️</div>
                <div className="stat-content">
                  <h3>{stats.products}</h3>
                  <p>Products</p>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="activities-section">
              <h2>Recent Activities</h2>
              <div className="activities-list">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="activity-item">
                    <div className={`activity-icon ${activity.type}`}>
                      {activity.type === 'user' && '👤'}
                      {activity.type === 'order' && '📋'}
                      {activity.type === 'product' && '📦'}
                      {activity.type === 'payment' && '💳'}
                      {activity.type === 'review' && '⭐'}
                    </div>
                    <div className="activity-content">
                      <p className="activity-action">{activity.action}</p>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'analytics' && (
          <div className="tab-content">
            <h2>Analytics</h2>
            <div className="analytics-placeholder">
              <p>📊 Analytics charts and graphs will be displayed here</p>
              <div className="chart-placeholder">
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <div className="chart-bar" style={{ height: '80%' }}></div>
                <div className="chart-bar" style={{ height: '40%' }}></div>
                <div className="chart-bar" style={{ height: '90%' }}></div>
                <div className="chart-bar" style={{ height: '70%' }}></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="tab-content">
            <h2>Users Management</h2>
            <div className="users-placeholder">
              <p>👥 User management interface will be here</p>
              <div className="user-table-placeholder">
                <div className="table-header">
                  <span>Name</span>
                  <span>Email</span>
                  <span>Status</span>
                  <span>Actions</span>
                </div>
                <div className="table-row">
                  <span>John Doe</span>
                  <span>john@example.com</span>
                  <span className="status active">Active</span>
                  <span>Edit | Delete</span>
                </div>
                <div className="table-row">
                  <span>Jane Smith</span>
                  <span>jane@example.com</span>
                  <span className="status inactive">Inactive</span>
                  <span>Edit | Delete</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="tab-content">
            <h2>Settings</h2>
            <div className="settings-placeholder">
              <p>⚙️ Application settings will be configured here</p>
              <div className="settings-options">
                <div className="setting-item">
                  <label>Enable Notifications</label>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="setting-item">
                  <label>Dark Mode</label>
                  <input type="checkbox" />
                </div>
                <div className="setting-item">
                  <label>Language</label>
                  <select>
                    <option>English</option>
                    <option>Urdu</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;