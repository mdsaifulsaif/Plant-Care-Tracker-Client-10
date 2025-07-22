import React from "react";
import { FaLeaf } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router";

// const plants = [
//   {
//     id: 1,
//     name: "Aloe Vera",
//     description: "Succulent plant species of the genus Aloe.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 2,
//     name: "Snake Plant",
//     description: "Also known as mother-in-law’s tongue.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 3,
//     name: "Peace Lily",
//     description: "Known for its beautiful white blooms.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 4,
//     name: "Spider Plant",
//     description: "Chlorophytum comosum, great for hanging baskets.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 5,
//     name: "Fiddle Leaf Fig",
//     description: "Popular for its large, violin-shaped leaves.",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 6,
//     name: "ZZ Plant",
//     description: "Zamioculcas zamiifolia, easy-care houseplant.",
//     image: "https://via.placeholder.com/150",
//   },
// ];
function NewPlants({ data }) {
  return (
    <section className="p-6 bg-green-50 dark:bg-gray-800   rounded-2xl shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <FaLeaf className="text-green-600 text-2xl" />
        <div className="p-4">
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content="New Plants To Day"
          >
            <h2 className="text-2xl font-bold text-green-800">New Plants</h2>
          </a>
          <Tooltip id="my-tooltip" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((plant) => (
          <div
            key={plant._id}
            className="bg-white dark:bg-gray-700  rounded-xl shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={plant.image}
              alt={plant.plantName}
              className="rounded-xl object-center w-full h-40 mb-4"
            />
            <h3 className="text-xl dark:text-gray-200 font-semibold text-green-700 mb-2">
              {plant.plantName}
            </h3>
            <p className="text-gray-600 dark:text-gray-200 mb-4">
              Category: {plant.category}
            </p>
            <Link to={`/plant/${plant._id}`}>
              <button className="bg-green-600 px-3 rounded-sm  py-1 hover:bg-green-700 text-white cursor-pointer ">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewPlants;
