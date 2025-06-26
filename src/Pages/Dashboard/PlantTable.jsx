import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const PlantTable = ({ Plants }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-bold text-green-700 mb-4">Plant Summary</h2>
      <table className="w-full table-auto border border-gray-200">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="p-2 text-left">#</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Care Level</th>
            <th className="p-2 text-left">Next Watering</th>
          </tr>
        </thead>
        <tbody>
          {Plants?.map((plant, index) => (
            <tr
              key={plant._id}
              className="border-b border-gray-100 hover:bg-green-50"
            >
              <td className="p-2">{index + 1}</td>
              <td className="p-2 font-medium">{plant.plantName}</td>
              <td className="p-2 capitalize">{plant.category}</td>
              <td className="p-2 capitalize">{plant.careLevel}</td>
              <td className="p-2 flex items-center gap-2">
                <FaRegCalendarAlt className="text-gray-500" />
                {plant.nextWateringDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlantTable;
