import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/home';
import JobDescription from './pages/JobDescription';
import ResumeUpload from './pages/ResumeUpload';
import Results from './pages/Results';
import Invite from './pages/Invite';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jd" element={<JobDescription />} />
        <Route path="/upload" element={<ResumeUpload />} />
        <Route path="/results" element={<Results />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </>
  );
}

export default App;
