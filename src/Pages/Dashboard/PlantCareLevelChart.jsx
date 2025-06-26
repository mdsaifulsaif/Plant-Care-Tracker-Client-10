import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { AuthContext } from "../../authProvider/authProvider";
import { FaUserCircle, FaEnvelope, FaChartPie } from "react-icons/fa";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

const PlantCareLevelChart = ({ AllPlants }) => {
  const { user } = useContext(AuthContext);

  // Count care levels
  const countByCareLevel = AllPlants.reduce((acc, plant) => {
    const level = plant.careLevel?.toLowerCase() || "unknown";
    acc[level] = (acc[level] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(countByCareLevel).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="grid lg:grid-cols-2 gap-6 p-6">
      {/* 👤 User Profile Section */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center text-center">
        <div className="relative mb-4">
          <img
            src={user?.photoURL || "https://i.ibb.co/YZCv0XJ/default-user.png"}
            alt="User Profile"
            className="w-24 h-24 rounded-full border-4 border-green-600 object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-green-700 flex items-center gap-2">
          <FaUserCircle /> {user?.displayName || "Anonymous User"}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2 mt-1">
          <FaEnvelope /> {user?.email || "No Email"}
        </p>
      </div>

      {/* 🧩 Care Level Pie Chart */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
          <FaChartPie /> Care Level Distribution
        </h2>
        {pieData.length > 0 ? (
          <PieChart width={350} height={300}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              label
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        ) : (
          <p className="text-center text-gray-500">No data available</p>
        )}
      </div>
    </div>
  );
};

export default PlantCareLevelChart;
