import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ExploreAITech from './ExploreAITech'; // Import your other component

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/explore-ai-tech" element={<ExploreAITech />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
