import axios from 'axios';
import React, { useState } from 'react';
import './JobDescription.css';

const JobDescription = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleManualSubmit = (e) => {
    e.preventDefault();
    console.log({ jobTitle, companyName, jobDescription });
    // TODO: Call backend to process manual input
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleProcessJD = async () => {
    try {
      const res = await axios.post("http://localhost:5000/manual-jd", {
        jd_text: jobDescription
      });
      console.log("Manual JD result:", res.data.jd);
    } catch (err) {
      console.error("Manual JD error:", err);
    }
  };
  

  const handleFileUpload = async () => {
    if (!file) {
      alert("⚠️ Please select a CSV file first.");
      return;
    }
  
    const formData = new FormData();
    formData.append("jd", file);
  
    try {
      const res = await axios.post("http://localhost:5000/upload-jd", formData);
      // Only this alert will show
      alert("✅ Job Description CSV uploaded successfully!\n");
      navigate("/upload");
    } catch (err) {
      console.error("CSV JD error:", err);
      alert("👉 Now you can upload resumes.");
    }
  };

  return (
    <div className="jd-container">
      <h2 className="jd-heading">📄 Process Job Description</h2>
      <p className="jd-subtext">Fill in the job details below or upload a CSV file to extract key information.</p>

      <form className="jd-form" onSubmit={handleManualSubmit}>
        <div className="jd-row">
          <div className="jd-field">
            <label>Job Title</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="e.g., Software Engineer"
            />
          </div>

          <div className="jd-field">
            <label>Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g., Google"
            />
          </div>
        </div>

        <div className="jd-field full-width">
          <label>Job Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Write the job description here..."
            rows={6}
          />
        </div>

        <button type="submit" className="jd-button">📌 Process Job Description</button>
      </form>

      <div className="jd-divider">OR</div>

      <div className="jd-upload">
        <label>Upload Job Description CSV</label>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button onClick={handleFileUpload} className="jd-button secondary">📤 Upload CSV</button>
      </div>
    </div>
  );
};

export default JobDescription;
