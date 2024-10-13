import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsModalOpen(false);

    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Assuming the server returns error messages
        if (errorData.errors) {
          setErrors(errorData.errors); // Assuming errorData.errors is an object with field-wise errors
        } else {
          throw new Error(
            errorData.message || 'Login failed! Please check your credentials.'
          );
        }
        return;
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Store token and user info in localStorage
      localStorage.setItem('authToken', data.access_token); // Assuming the token comes as `data.token`
      localStorage.setItem('userName', data.user.name);

      // Show success message modal
      setIsModalOpen(true);

      // Redirect to DietForm after successful login
      navigate('/diet-form');
    } catch (error) {
      setErrors({ general: error.message });
      setIsModalOpen(true); // Show modal for errors
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-slate-800 shadow-lg rounded-lg p-8 space-y-8">
        <h2 className="text-center text-4xl font-bold">Login</h2>

        {errors.general && (
          <p className="text-red-500 text-center mb-4">{errors.general}</p>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 bg-slate-700 text-white border ${
                errors.email ? 'border-red-500' : 'border-slate-600'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 transition`}
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email[0]}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 bg-slate-700 text-white border ${
                errors.password ? 'border-red-500' : 'border-slate-600'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 transition`}
            />
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password[0]}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-bold rounded-lg hover:from-slate-600 hover:to-slate-500 focus:outline-none focus:ring-4 focus:ring-slate-500 transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>

      {/* Modal for error/success message */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            {errors.general ? (
              <div className="text-red-500 text-lg font-bold">
                {errors.general}
              </div>
            ) : (
              <div className="text-green-500 text-lg font-bold">
                Login successful!
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

export default Login;
