import React from "react";
import { FaLeaf } from "react-icons/fa";
// import { Button } from "@/components/ui/button";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    description: "Succulent plant species of the genus Aloe.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Snake Plant",
    description: "Also known as mother-in-law’s tongue.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Peace Lily",
    description: "Known for its beautiful white blooms.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Spider Plant",
    description: "Chlorophytum comosum, great for hanging baskets.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Fiddle Leaf Fig",
    description: "Popular for its large, violin-shaped leaves.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "ZZ Plant",
    description: "Zamioculcas zamiifolia, easy-care houseplant.",
    image: "https://via.placeholder.com/150",
  },
];
function NewPlants() {
  return (
    <section className="p-6 bg-green-50 rounded-2xl shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <FaLeaf className="text-green-600 text-2xl" />
        <h2 className="text-2xl font-bold text-green-800">New Plants</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="rounded-xl w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {plant.name}
            </h3>
            <p className="text-gray-600 mb-4">{plant.description}</p>
            <button className="bg-green-600 hover:bg-green-700 text-white">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewPlants;
