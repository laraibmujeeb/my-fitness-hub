// src/components/DietForm.jsx
import React, { useState } from 'react';

const DietForm = () => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');
  const [subGoalOptions, setSubGoalOptions] = useState([]);
  const [subGoal, setSubGoal] = useState('');

  const weightLossPlans = [
    'Lose 1 kg per week',
    'Lose 0.5 kg per week',
    'Lose 0.25 kg per week',
  ];
  const weightGainPlans = [
    'Gain 1 kg per month',
    'Gain 0.5 kg per month',
    'Gain 0.25 kg per month',
  ];

  const handleGoalChange = (e) => {
    const selectedGoal = e.target.value;
    setGoal(selectedGoal);

    if (selectedGoal === 'weight-loss') {
      setSubGoalOptions(weightLossPlans);
    } else if (selectedGoal === 'weight-gain') {
      setSubGoalOptions(weightGainPlans);
    } else {
      setSubGoalOptions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle diet plan submission
    console.log({ name, height, weight, goal, subGoal });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-slate-800 to-slate-600 shadow-md rounded-lg px-8 py-8 w-full max-w-lg"
      >
        <h2 className="text-white text-2xl mb-4">Create Your Diet Plan</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full bg-white border border-white rounded p-2"
            required
          />
        </div>

        {/* Height Input */}
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="height"
          >
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="block w-full bg-white border border-white rounded p-2"
            required
          />
        </div>

        {/* Weight Input */}
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="weight"
          >
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="block w-full bg-white border border-white rounded p-2"
            required
          />
        </div>

        {/* Goal Selection */}
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="goal"
          >
            Goal
          </label>
          <select
            id="goal"
            value={goal}
            onChange={handleGoalChange}
            className="block w-full bg-white border border-white rounded p-2"
            required
          >
            <option value="" disabled>
              Select a goal
            </option>
            <option value="weight-loss">Weight Loss</option>
            <option value="weight-gain">Weight Gain</option>
          </select>

          {/* Sub-goal Dropdown */}
          {goal && (
            <div className="mt-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="sub-goal"
              >
                Select Plan
              </label>
              <select
                id="sub-goal"
                value={subGoal}
                onChange={(e) => setSubGoal(e.target.value)}
                className="block w-full bg-white border border-white rounded p-2"
                required
              >
                <option value="" disabled>
                  Select a plan
                </option>
                {subGoalOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-slate-800 text-white py-2 px-4 rounded"
        >
          Your Diet
        </button>
      </form>
    </div>
  );
};

export default DietForm;
