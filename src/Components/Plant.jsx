import React from "react";

function Plant({ plant }) {
  const { _id, image, plantName, category, careLevel, description } = plant;
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <img
        src={image}
        alt={plantName}
        className="rounded-xl w-full h-40 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-green-700 mb-2">{plantName}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-green-600 hover:bg-green-700 text-white">
        View Details
      </button>
    </div>
  );
}

export default Plant;
