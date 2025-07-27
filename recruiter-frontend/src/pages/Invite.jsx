import React, { useEffect, useState } from 'react';

export default function Invite() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("recruitai-results");
    if (stored) {
      setResults(JSON.parse(stored));
    }
  }, []);

  const shortlisted = results.filter((r) => r.shortlisted && r.email_invite);

  return (
    <div>
      <h1>Email Invites</h1>
      {shortlisted.length === 0 ? (
        <p>No candidates were shortlisted.</p>
      ) : (
        shortlisted.map((r, i) => (
          <div key={i} style={{ marginBottom: '20px' }}>
            <h4>📨 {r.name}</h4>
            <pre>{r.email_invite}</pre>
          </div>
        ))
      )}
    </div>
  );
}
