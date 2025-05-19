import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ role }) => {
  const navItems = {
    admin: ['Medicine List', 'Dashboards', 'Tables', 'Update', 'Orders', 'Production', 'Raw Materials', 'Manage Users', 'Contact Details'],
    manager: ['Medicine List', 'Dashboards', 'Tables', 'Orders', 'Production', 'Raw Materials', 'Contact Details'],
    production: ['Medicine List', 'Production', 'Raw Materials', 'Update', 'Contact Details'],
    sales: ['Medicine List', 'Orders', 'Contact Details']
  };

  const links = navItems[role.toLowerCase()] || [];

  return (
    <nav className="bg-light p-3 border-end vh-100 position-sticky top-0" style={{ width: '220px' }}>
      <h6 className="text-uppercase text-muted mb-3">Navigation</h6>
      {links.map(link => (
        <NavLink
          to={`/${link.replace(/\s+/g, '').toLowerCase()}`}
          key={link}
          className={({ isActive }) =>
            `d-block mb-2 px-3 py-2 rounded text-decoration-none ${isActive ? 'bg-primary text-white' : 'text-dark'}`
          }
        >
          {link}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
