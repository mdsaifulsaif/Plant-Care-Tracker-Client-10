import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router";

function AllPlants() {
  const data = useLoaderData();
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState("all");

  const careRank = {
    low: 1,
    moderate: 2,
    difficult: 3,
  };

  // Sort logic
  const sortedPlants = [...data].sort((a, b) => {
    if (sortBy === "watering") {
      return new Date(a.nextWateringDate) - new Date(b.nextWateringDate);
    }
    if (sortBy === "care") {
      return (
        (careRank[a.careLevel?.toLowerCase()] || 0) -
        (careRank[b.careLevel?.toLowerCase()] || 0)
      );
    }
    return 0;
  });

  return (
    <section className="p-4 w-11/12 mx-auto sm:p-6 bg-green-50 rounded-2xl shadow-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-6">
        <FaLeaf className="text-green-600 text-2xl" />
        <h2 className="text-2xl font-bold text-green-800">All Plants</h2>
      </div>

      {/* shot plant  */}
      {/* Dropdown Menu */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-green-700">
          Sort By:
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-green-500 rounded px-4 py-2 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option className="hover-bg-green-100" value="all">
            {" "}
            All
          </option>
          <option value="watering">Next Watering Date</option>
          <option value="care">Care Level</option>
        </select>
      </div>
      {/* shot plant  */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow text-sm">
          <thead>
            <tr className="bg-green-100 text-left text-green-700">
              <th className="px-4 py-3 whitespace-nowrap">Plant Name</th>
              <th className="px-4 py-3 whitespace-nowrap">Category</th>
              <th className="px-4 py-3 whitespace-nowrap">
                Watering Frequency
              </th>
              <th className="px-4 py-3 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlants.map((plant) => (
              <tr key={plant._id} className="border-t hover:bg-green-50">
                <td className="px-4 py-3 font-medium text-green-900 whitespace-nowrap">
                  {plant.plantName}
                </td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                  {plant.category}
                </td>
                <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                  {plant.wateringFrequency}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <Link to={`/plant/${plant._id}`}>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm">
                      Plant Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AllPlants;
