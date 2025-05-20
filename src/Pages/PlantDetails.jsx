import React from "react";
import React from "react";
import {
  FaTint,
  FaCalendarDay,
  FaUser,
  FaHeartbeat,
  FaSeedling,
  FaLeaf,
} from "react-icons/fa";

function PlantDetails() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full md:w-1/3 h-60 object-cover rounded-xl shadow"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-green-700 mb-2 flex items-center gap-2">
            <FaLeaf /> {plant.plantName}
          </h2>
          <p className="text-sm text-gray-500 mb-4 italic">
            Category: {plant.category}
          </p>
          <p className="text-gray-700 mb-4">{plant.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <FaTint className="text-green-500" />
              <span>Watering: {plant.wateringFrequency}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarDay className="text-green-500" />
              <span>Last Watered: {plant.lastWateredDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarDay className="text-green-500" />
              <span>Next Watering: {plant.nextWateringDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHeartbeat className="text-green-500" />
              <span>Health: {plant.healthStatus}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaSeedling className="text-green-500" />
              <span>Care Level: {plant.careLevel}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUser className="text-green-500" />
              <span>
                Owner: {plant.userName} ({plant.userEmail})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantDetails;
