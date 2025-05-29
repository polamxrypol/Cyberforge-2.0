import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ModelsPage from './pages/ModelsPage';

function App() {
  // In a real application, this would be determined by your auth system
  const isAuthenticated = false;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Protected routes */}
        <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="models" element={<ModelsPage />} />
          <Route path="channels" element={<div>Channels Page (Coming Soon)</div>} />
          <Route path="bots" element={<div>Bots Page (Coming Soon)</div>} />
          <Route path="cyber-tools" element={<div>Cyber Tools Page (Coming Soon)</div>} />
          <Route path="learn" element={<div>Learning Resources Page (Coming Soon)</div>} />
          <Route path="settings" element={<div>Settings Page (Coming Soon)</div>} />
        </Route>
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;