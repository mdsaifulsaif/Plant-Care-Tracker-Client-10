import React from "react";
import { FaLeaf } from "react-icons/fa";
import { useLoaderData } from "react-router";
import Plant from "../Components/Plant";

function AllPlants() {
  const data = useLoaderData();
  return (
    <section className="p-6 bg-green-50 rounded-2xl shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <FaLeaf className="text-green-600 text-2xl" />
        <h2 className="text-2xl font-bold text-green-800">All Plants</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((plant) => (
          <Plant key={plant._id} plant={plant}></Plant>
        ))}
      </div>
    </section>
  );
}

export default AllPlants;
