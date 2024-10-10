import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Create this component
import Navbar from './components/navbar';
import Login from './pages/Login'; // Create this component
import Register from './pages/Register'; // Create this component
import DietForm from './pages/DietForm'; // Your diet maker component
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Protected Route for diet form */}
        <Route element={<ProtectedRoute />}>
          <Route path="/diet-form" element={<DietForm />} />
        </Route>

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
