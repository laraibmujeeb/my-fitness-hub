import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex flex-col justify-between">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-slate-800 to-slate-600 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Fitness Hub</h1>
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto text-center py-20">
        <h2 className="text-4xl font-extrabold mb-4">
          Achieve Your Fitness Goals with My Fitness Hub
        </h2>
        <p className="text-lg mb-8">
          Track your fitness, plan your diet, and get personalized
          recommendations. Join us today to start your fitness journey.
        </p>
        <Link to="/register">
          <button className="bg-slate-700 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
            Get Started
          </button>
        </Link>
      </header>

      {/* Features Section */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-10">
        <div className="bg-slate-800 p-6 rounded-lg shadow-md hover:bg-slate-900 transition duration-300">
          <h3 className="text-2xl font-bold mb-2">Personalized Diet Plans</h3>
          <p className="text-sm">
            Get a diet plan that is customized to your fitness goals and dietary
            preferences.
          </p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg shadow-md hover:bg-slate-900 transition duration-300">
          <h3 className="text-2xl font-bold mb-2">Track Your Progress</h3>
          <p className="text-sm">
            Monitor your fitness journey with easy-to-use tracking tools and
            visual progress reports.
          </p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg shadow-md hover:bg-slate-900 transition duration-300">
          <h3 className="text-2xl font-bold mb-2">Community Support</h3>
          <p className="text-sm">
            Connect with a community of like-minded individuals who share their
            tips and successes.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 My Fitness Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
