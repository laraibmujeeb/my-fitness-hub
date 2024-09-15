import React, { useState } from "react";

function App() {
  const [goal, setGoal] = useState("");
  const [subGoalOptions, setSubGoalOptions] = useState([]);
  const [subGoal, setSubGoal] = useState("");

  const weightLossPlans = ["Lose 1 kg per week", "Lose 0.5 kg per week", "Lose 0.25 kg per week"];
  const weightGainPlans = ["Gain 1 kg per month", "Gain 0.5 kg per month", "Gain 0.25 kg per month"];

  const handleGoalChange = (e) => {
    const selectedGoal = e.target.value;
    setGoal(selectedGoal);

    // Set sub-goal options based on selected goal
    if (selectedGoal === "weight-loss") {
      setSubGoalOptions(weightLossPlans);
    } else if (selectedGoal === "weight-gain") {
      setSubGoalOptions(weightGainPlans);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-4">
        <div className="container mx-auto flex justify-center">
          <h1 className="text-3xl font-bold">My Fitness Hub</h1>
        </div>
      </nav>

      {/* Form Section */}
      <div className="container mx-auto mt-10 flex justify-center">
        <form className="bg-gradient-to-r from-slate-800 to-slate-600 shadow-md rounded-lg px-8 py-8 w-full max-w-lg">
          {/* Name */}
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          {/* Height */}
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="height">
              Height (cm)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="height"
              type="number"
              placeholder="Enter your height"
            />
          </div>

          {/* Weight */}
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="weight">
              Weight (kg)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              type="number"
              placeholder="Enter your weight"
            />
          </div>

          {/* Goal */}
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="goal">
              Goal
            </label>
            <div className="relative">
              <select
                id="goal"
                value={goal}
                onChange={handleGoalChange}
                className="block appearance-none w-full bg-white border border-white hover:border-white px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled>Select a goal</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="weight-gain">Weight Gain</option>
              </select>

              {/* Sub-goal Dropdown */}
              {goal && (
                <div className="mt-4">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="sub-goal">
                    Select Plan
                  </label>
                  <select
                    id="sub-goal"
                    value={subGoal}
                    onChange={(e) => setSubGoal(e.target.value)}
                    className="block appearance-none w-full bg-white border border-white hover:border-white px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="" disabled>Select a plan</option>
                    {subGoalOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              className="bg-slate-800 hover:bg-slate-900 shadow-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Your Diet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
