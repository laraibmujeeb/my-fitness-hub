import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex flex-col justify-between">
      {/* Hero Section */}
      <header className="container mx-auto text-center py-20">
        <h2 className="text-5xl font-extrabold mb-6 text-white leading-tight animate-fade-in">
          Achieve Your Fitness Goals <br /> with My Fitness Hub
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-slate-300 animate-fade-in">
          Track your fitness, plan your diet, and get personalized
          recommendations. Join us today to start your fitness journey with a
          community that supports you.
        </p>
        <Link to="/register">
          <button className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-900 hover:to-slate-900 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 animate-bounce">
            Get Started
          </button>
        </Link>
      </header>

      {/* Features Section */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-16">
        <div className="bg-slate-800 p-8 rounded-lg shadow-md hover:bg-slate-900 transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-2xl font-bold mb-4 text-slate-100">
            Personalized Diet Plans
          </h3>
          <p className="text-sm text-slate-300">
            Get a diet plan that is customized to your fitness goals and dietary
            preferences.
          </p>
        </div>
        <div className="bg-slate-800 p-8 rounded-lg shadow-md hover:bg-slate-900 transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-2xl font-bold mb-4 text-slate-100">
            Track Your Progress
          </h3>
          <p className="text-sm text-slate-300">
            Monitor your fitness journey with easy-to-use tracking tools and
            visual progress reports.
          </p>
        </div>
        <div className="bg-slate-800 p-8 rounded-lg shadow-md hover:bg-slate-900 transition duration-300 transform hover:-translate-y-1">
          <h3 className="text-2xl font-bold mb-4 text-slate-100">
            Community Support
          </h3>
          <p className="text-sm text-slate-300">
            Connect with a community of like-minded individuals who share their
            tips and successes to keep you motivated.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm text-slate-400">
            &copy; 2024 My Fitness Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
