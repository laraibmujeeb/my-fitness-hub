import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleFetch } from '../utils/Api'; // Import the handleFetch function

function Navbar() {
  const navigate = useNavigate(); // Initialize useNavigate to be passed

  const userName = localStorage.getItem('userName');

  const handleLogout = async () => {
    try {
      const response = await handleFetch(
        'http://localhost:8000/api/logout',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
        navigate // Pass navigate here
      );

      // Clear session after successful logout
      localStorage.removeItem('authToken');
      localStorage.removeItem('userName');
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-slate-800 to-slate-600 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold text-white">My Fitness Hub</h1>
        </Link>
        <div className="space-x-6">
          {userName ? (
            <>
              <span className="text-white text-xl font-bold capitalize">
                Welcome, {userName}
              </span>
              <button
                onClick={handleLogout}
                className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
