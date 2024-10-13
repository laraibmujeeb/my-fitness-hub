import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed: npm install axios

const DietForm = () => {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    age: '',
    gender: 'male', // Default value
    goal: 'maintenance', // Default value
    variation: '', // To store the selected variation
  });

  const [dietPlan, setDietPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dietVariations = {
    weight_loss: ['2kg/month', '4kg/month', '8kg/month'],
    weight_gain: [
      '0.25kg muscle gain/month',
      '0.5kg muscle gain/month',
      '1kg muscle gain/month',
    ],
    maintenance: ['1800 calories'],
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('authToken'); // Get token from local storage
      const response = await axios.post(
        `http://127.0.0.1:8000/api/diet-calculate`, // Updated API endpoint
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure token is sent in the header
            'Content-Type': 'application/json',
          },
        }
      );

      setDietPlan(response.data.diet_plan); // Store the diet plan response
    } catch (err) {
      if (err.response && err.response.data) {
        setError(
          err.response.data.message ||
            'Failed to calculate the diet. Please try again.'
        );
      } else {
        setError('Failed to calculate the diet. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-white flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-screen-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create Your Diet Plan
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Height (cm)</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-slate-700 text-white border border-slate-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-slate-700 text-white border border-slate-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-slate-700 text-white border border-slate-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-slate-700 text-white border border-slate-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Goal</label>
            <select
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-slate-700 text-white border border-slate-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="maintenance">Maintenance</option>
              <option value="weight_loss">Weight Loss</option>
              <option value="weight_gain">Weight Gain</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Variation</label>
            <select
              name="variation"
              value={formData.variation}
              onChange={handleChange}
              className="mt-1 p-2 w-full bg-slate-700 text-white border border-slate-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Variation</option>
              {dietVariations[formData.goal].map((variation) => (
                <option key={variation} value={variation}>
                  {variation}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-slate-900 hover:bg-slate-600 text-white font-bold rounded-lg shadow-lg transition duration-300"
          >
            {loading ? 'Calculating...' : 'Generate Diet Plan'}
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>

        {/* Render the diet plan if available */}
        {dietPlan && (
          <div className="mt-6 bg-slate-700 rounded-lg py-5 flex flex-col justify-center items-center gap-6">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Your Diet Plan
            </h3>

            <div className="bg-slate-800 hover:bg-slate-600 transition duration-300 p-4 rounded-lg shadow-md w-full max-w-md">
              <h4 className="text-xl font-semibold mb-2">Breakfast</h4>
              <p className="text-white text-lg">{dietPlan.breakfast}</p>
            </div>

            <div className="bg-slate-800 hover:bg-slate-600 transition duration-300 p-4 rounded-lg shadow-md w-full max-w-md">
              <h4 className="text-xl font-semibold mb-2">Lunch</h4>
              <p className="text-white text-lg">{dietPlan.lunch}</p>
            </div>

            <div className="bg-slate-800 hover:bg-slate-600 transition duration-300 p-4 rounded-lg shadow-md w-full max-w-md">
              <h4 className="text-xl font-semibold mb-2">Dinner</h4>
              <p className="text-white text-lg">{dietPlan.dinner}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DietForm;
