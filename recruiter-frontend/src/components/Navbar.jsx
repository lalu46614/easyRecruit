import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div style={navContainer}>
      <div style={logoStyle}>EasyRecruit</div>
      <div style={tabWrapper}>
        <NavTab to="/" label="Home" />
        <NavTab to="/jd" label="Job Description" />
        <NavTab to="/upload" label="Upload Resumes" />
        <NavTab to="/results" label="Results" />
        <NavTab to="/invite" label="Invite" />
      </div>
    </div>
  );
}

function NavTab({ to, label }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        padding: '10px 16px',
        textDecoration: 'none',
        color: isActive ? '#1a73e8' : '#555',
        borderBottom: isActive ? '3px solid #1a73e8' : '3px solid transparent',
        fontWeight: isActive ? 'bold' : 'normal'
      })}
    >
      {label}
    </NavLink>
  );
}

const navContainer = {
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px solid #ddd',
  background: '#fff',
  boxShadow: '0 1px 5px rgba(0,0,0,0.1)',
};

const logoStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  padding: '12px 30px',
  color: '#1a73e8',
  borderBottom: '1px solid #eee',
};

const tabWrapper = {
  display: 'flex',
  paddingLeft: '30px',
  gap: '10px',
  background: '#fff'
};
