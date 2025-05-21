import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const TopPlantCareMistakes = () => {
  const mistakes = [
    "Overwatering your plant",
    "Using improper soil for the species",
    "Not checking for pests regularly",
    "Giving too much direct sunlight",
    "Forgetting to repot root-bound plants",
  ];

  return (
    <section className="bg-green-50 p-6 rounded-2xl shadow-md my-8">
      <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
        <FaExclamationTriangle className="text-green-700" />
        Top Plant Care Mistakes
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {mistakes.map((item, index) => (
          <li key={index} className="ml-2">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TopPlantCareMistakes;
