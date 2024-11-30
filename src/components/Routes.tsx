import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import UserDashboard from './UserDashboard';
import GlobalCounts from './GlobalCounts';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/globalCounts" element={<GlobalCounts />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;