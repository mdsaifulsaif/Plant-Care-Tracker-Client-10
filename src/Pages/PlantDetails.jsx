import React from "react";
import { Helmet } from "react-helmet-async";

import {
  FaTint,
  FaCalendarDay,
  FaUser,
  FaHeartbeat,
  FaSeedling,
  FaLeaf,
} from "react-icons/fa";
import { useLoaderData } from "react-router";

function PlantDetails() {
  const data = useLoaderData();
  const {
    _id,
    image,
    plantName,
    category,
    careLevel,
    description,
    userName,
    userEmail,
    healthStatus,
    nextWateringDate,
    lastWateredDate,
    wateringFrequency,
  } = data;

  return (
    <div className="min-h-[70vh] md:w-6xl mt-22  mx-auto flex items-center justify-center">
      <Helmet>
        <title>Ninja | Plant Details</title>
      </Helmet>
      <div className="  mb-10 bg-white dark:bg-gray-800  mx-auto p-6  rounded-2xl shadow-lg mt-8">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={image}
            alt={plantName}
            className="w-full md:w-1/3 h-60 object-cover rounded-xl shadow"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-green-700 mb-2 flex items-center gap-2">
              <FaLeaf /> {plantName}
            </h2>
            <p className="text-sm text-gray-500 mb-4 italic">
              Category: {category}
            </p>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              {description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <FaTint className="text-green-500" />
                <span>Watering: {wateringFrequency}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarDay className="text-green-500" />
                <span>Last Watered: {lastWateredDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarDay className="text-green-500" />
                <span>Next Watering: {nextWateringDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHeartbeat className="text-green-500" />
                <span>Health: {healthStatus}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaSeedling className="text-green-500" />
                <span>Care Level: {careLevel}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUser className="text-green-500" />
                <span>
                  Owner: {userName} ({userEmail})
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantDetails;
