import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Inventory from './components/Inventory';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path = "/login/dashboard" element = {<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path = "/login/profile" element = {<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
