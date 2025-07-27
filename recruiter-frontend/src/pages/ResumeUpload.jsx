import React, { useState } from 'react';
import axios from 'axios';

export default function ResumeUpload() {
  const [files, setFiles] = useState([]);

  const handleUpload = async (e) => {
    const selected = e.target.files;
    if (!selected.length) return;

    const formData = new FormData();
    for (const file of selected) {
      formData.append("resumes", file);
    }

    try {
      const res = await axios.post("http://localhost:5000/upload-resumes", formData);
      localStorage.setItem("recruitai-results", JSON.stringify(res.data.results));
      alert("✅ Resumes processed! View results in the Results tab.");
    } catch (err) {
      alert("❌ Error uploading resumes");
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Upload Resumes</h1>
      <input type="file" multiple accept="application/pdf" onChange={handleUpload} />
    </div>
  );
}
