import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '60px 40px', textAlign: 'center', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ fontSize: '3rem', color: '#1a73e8', marginBottom: '10px' }}>
        Welcome to <span style={{ fontWeight: 'bold' }}>EasyRecruit</span>
      </h1>

      <p style={{
        marginTop: '20px',
        fontSize: '18px',
        color: '#555',
        lineHeight: '1.8',
        maxWidth: '800px',
        margin: 'auto'
      }}>
        Smarter Hiring Starts Here. <br />
        <strong>EasyRecruit</strong> is an AI-powered job screening system that streamlines the hiring process
        by analyzing job descriptions and intelligently matching resumes.
        Say goodbye to manual resume screening and hello to faster, smarter hiring decisions.
      </p>

      <div style={{
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <Link to="/jd">
          <button style={buttonStyle}>Start with Job Description</button>
        </Link>
        <Link to="/upload">
          <button style={buttonStyle}> Upload Resumes</button>
        </Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#1a73e8',
  color: 'white',
  fontSize: '16px',
  padding: '12px 24px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  transition: 'background-color 0.3s',
};
