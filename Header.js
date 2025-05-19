import React from 'react';
import './Header.css'; // optional, for custom styling

const Header = ({ user, onLogout }) => {
  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-3 bg-white shadow-sm sticky-top">
      <div className="d-flex align-items-center">
        <img src="/logo.png" alt="Company Logo" height="45" className="me-3" />
        <h4 className="fw-bold text-primary m-0">PharmaCo</h4>
      </div>
      <div className="d-flex align-items-center">
        <span className="me-3 text-muted">Welcome, <strong>{user.name}</strong> ({user.role})</span>
        <button className="btn btn-outline-danger btn-sm" onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
