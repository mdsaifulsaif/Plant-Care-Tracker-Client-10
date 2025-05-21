import React from "react";
import { FaLeaf, FaSun, FaSnowflake, FaTint } from "react-icons/fa";

const SeasonalPlantCareTips = () => {
  const tips = [
    {
      icon: <FaSun className="text-green-700 text-2xl" />,
      season: "Summer",
      tip: "Water plants early in the morning to prevent evaporation and sunburn.",
    },
    {
      icon: <FaSnowflake className="text-green-700 text-2xl" />,
      season: "Winter",
      tip: "Move sensitive plants indoors and reduce watering.",
    },
    {
      icon: <FaLeaf className="text-green-700 text-2xl" />,
      season: "Autumn",
      tip: "Prune dead leaves and prepare plants for dormancy.",
    },
    {
      icon: <FaTint className="text-green-700 text-2xl" />,
      season: "Spring",
      tip: "Start fertilizing and repot if necessary.",
    },
  ];

  return (
    <section className="bg-green-50 p-6 rounded-2xl shadow-md my-8 flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
        <FaLeaf className="text-green-700" />
        Seasonal Plant Care Tips
      </h2>
      <div className="space-y-6 max-w-xl">
        {tips.map((tip, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            {tip.icon}
            <h4 className="font-semibold text-lg">{tip.season}</h4>
            <p className="text-gray-700">{tip.tip}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeasonalPlantCareTips;
