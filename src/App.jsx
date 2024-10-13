import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import DietForm from './pages/DietForm';
import ProtectedRoute from './utils/ProtectedRoute';
import PublicRoute from './utils/PublicRoute'; // Import PublicRoute

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Public Routes: Only accessible if NOT logged in */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

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
