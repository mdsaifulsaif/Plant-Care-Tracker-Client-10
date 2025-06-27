import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import LoaddingSpinner from "../../Components/LoaddingSpinner";

const DashboardAllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://mango-server-nine.vercel.app/plants")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch plants");
        return res.json();
      })
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoaddingSpinner />;
  if (error)
    return (
      <p className="p-4 text-center text-red-600">
        Error loading plants: {error}
      </p>
    );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-green-700 mb-4">All Plants</h2>

      <div className="">
        <table className="w-full table-auto border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-3 text-left whitespace-nowrap">#</th>
              <th className="p-3 text-left whitespace-nowrap">Plant Name</th>
              <th className="p-3 text-left whitespace-nowrap">Category</th>
              <th className="p-3 text-left whitespace-nowrap">Care Level</th>
              <th className="p-3 text-left whitespace-nowrap">Next Watering</th>
              <th className="p-3 text-left whitespace-nowrap">User</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant, index) => (
              <tr
                key={plant._id}
                className="border-b border-gray-200 hover:bg-green-50"
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3 font-medium">{plant.plantName}</td>
                <td className="p-3 capitalize">{plant.category}</td>
                <td className="p-3 capitalize">
                  {plant.careLevel || "unknown"}
                </td>
                <td className="p-3 flex items-center gap-2">
                  <FaRegCalendarAlt className="text-gray-500" />
                  {plant.nextWateringDate}
                </td>
                <td className="p-3">
                  {plant.userName || plant.userEmail || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAllPlants;
