import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-800 to-slate-600 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold text-white">My Fitness Hub</h1>
        </Link>
        <div className="space-x-6">
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
          <Link to="/diet-form">
            <button className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
              Diet Form
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
