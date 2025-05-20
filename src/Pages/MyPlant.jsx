import React, { useEffect, useState } from "react";
import {
  FaLeaf,
  FaListAlt,
  FaAlignLeft,
  FaTint,
  FaCalendarAlt,
  FaHeartbeat,
  FaUser,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { Link, useLoaderData, useLocation } from "react-router";

const MyPlant = () => {
  const plants = useLoaderData();
  const { pathname } = useLocation();
  // const [plants, setPlants] = useState([]);

  const handleDelete = async (id) => {
    // if (confirm('Are you sure you want to delete this plant?')) {
    //   try {
    //     await fetch(`/api/plants/${id}`, { method: 'DELETE' });
    //     setPlants(plants.filter(plant => plant._id !== id));
    //   } catch (error) {
    //     console.error('Delete failed:', error);
    //   }
    // }
  };

  return (
    <div className="p-4  w-11/12  mx-auto bg-green-50 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <FaLeaf className="text-green-600 text-2xl" />
        <h2 className="text-2xl font-bold text-green-800">My Plants</h2>
      </div>

      <div className="space-y-6">
        {plants.map((plant) => (
          <div
            key={plant._id}
            className=" bg-white w-10/12 mx-auto rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row"
          >
            {/* Right Content */}
            <div className="md:w-2/3 w-full p-6 space-y-3">
              <div className="flex items-center gap-3 text-xl font-semibold">
                <FaLeaf className="text-green-600" />
                {plant.plantName}
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <FaListAlt />
                <span className="font-medium">Category:</span>{" "}
                {plant.category || "N/A"}
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <FaAlignLeft />
                <span className="font-medium">Description:</span>{" "}
                {plant.description}
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <FaTint />
                <span className="font-medium">Watering:</span>{" "}
                {plant.wateringFrequency}
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <FaCalendarAlt />
                <span className="font-medium">Last Watered:</span>{" "}
                {plant.lastWateredDate}
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <FaCalendarAlt />
                <span className="font-medium">Next Watering:</span>{" "}
                {plant.nextWateringDate}
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <FaHeartbeat />
                <span className="font-medium">Health:</span>{" "}
                {plant.healthStatus}
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <FaUser />
                <span className="font-medium">User:</span> {plant.userName} (
                {plant.userEmail})
              </div>

              <div className="flex gap-4 mt-4">
                <Link state={pathname} to={`/update-plant/${plant._id}`}>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    <FaEdit /> Update
                  </button>
                </Link>

                <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>

            {/* Left Image */}
            <div className="md:w-1/3 w-full h-60 md:h-auto">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlant;
