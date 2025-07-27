import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("recruitai-results");
    if (stored) {
      setResults(JSON.parse(stored));
    }
  }, []);

  if (!results.length) {
    return <p>No results found. Please upload resumes first.</p>;
  }

  return (
    <div>
      <h1>Candidate Results</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Score</th>
            <th>Shortlisted</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <tr key={i}>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>
                <span className={`badge ${r.score >= 50 ? 'success' : 'danger'}`}>
                  {r.score}%
                </span>
              </td>
              <td>{r.shortlisted ? 'yes' : 'no'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        <Link to="/invite">📨 View Email Invites</Link>
      </div>
    </div>
  );
}
