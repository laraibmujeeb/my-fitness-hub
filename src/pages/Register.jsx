// src/components/Register.jsx
import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Assuming the server returns error messages
        throw new Error(errorData.message || 'Registration failed!');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto mt-10 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-slate-800 to-slate-600 shadow-md rounded-lg p-8 w-full max-w-lg"
      >
        <h2 className="text-white text-2xl mb-4">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 rounded"
        />
        <button
          type="submit"
          className="bg-slate-800 text-white py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
