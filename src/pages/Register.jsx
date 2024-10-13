import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsModalOpen(false);

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Assuming the server returns error messages in a structured format
        if (errorData.errors) {
          setErrors(errorData.errors); // Assuming errorData.errors is an object with field-wise errors
        } else {
          throw new Error(errorData.message || 'Registration failed!');
        }
        return;
      }

      const data = await response.json();
      console.log('Registration successful:', data);

      localStorage.setItem('userName', name); // Save the user's name after registration

      // Open modal for success message
      setIsModalOpen(true);

      // Redirect to login page after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 3000); // Adjust the delay as needed
    } catch (error) {
      setErrors({ general: error.message });
      setIsModalOpen(true); // Show modal for errors
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-slate-800 to-slate-600 shadow-md rounded-lg p-8 w-full max-w-lg"
      >
        <h2 className="text-white text-2xl mb-4 text-center">Register</h2>

        {errors.general && (
          <p className="text-red-500 text-center mb-4">{errors.general}</p>
        )}

        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full p-2 rounded bg-slate-700 text-white ${
              errors.name ? 'border-red-500 border' : ''
            }`}
          />
          {errors.name && <p className="text-red-500 mt-1">{errors.name[0]}</p>}
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 rounded bg-slate-700 text-white ${
              errors.email ? 'border-red-500 border' : ''
            }`}
          />
          {errors.email && (
            <p className="text-red-500 mt-1">{errors.email[0]}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-2 rounded bg-slate-700 text-white ${
              errors.password ? 'border-red-500 border' : ''
            }`}
          />
          {errors.password && (
            <p className="text-red-500 mt-1">{errors.password[0]}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-slate-800 hover:bg-slate-900 text-white py-2 px-4 rounded transition duration-300 w-full"
        >
          Register
        </button>
      </form>

      {/* Modal for success/error message */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            {errors.general ? (
              <div className="text-red-500 text-lg font-bold">
                {errors.general}
              </div>
            ) : (
              <div className="text-green-500 text-lg font-bold">
                {name}, you have successfully registered!
              </div>
            )}
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
