import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
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
import Swal from "sweetalert2";
import LoaddingSpinner from "../Components/LoaddingSpinner";

const MyPlant = () => {
  const initialPlants = useLoaderData();
  const [remaingplants, setRemainigPlants] = useState(initialPlants);
  const { pathname } = useLocation();
  // const [plants, setPlants] = useState([]);

  const handledelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      iconColor: "#008000",
      confirmButtonColor: "#008000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://mango-server-nine.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const deletedPlant = remaingplants.filter((p) => p._id !== id);
              setRemainigPlants(deletedPlant);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="p-4 mt-5  w-11/12  mx-auto bg-green-50 rounded-lg shadow-md">
      <Suspense fallback={<LoaddingSpinner></LoaddingSpinner>}></Suspense>
      <Helmet>
        <title>Ninja | My Plant</title>
      </Helmet>
      <div className="flex items-center gap-2 mb-6">
        <FaLeaf className="text-green-600 text-2xl" />
        <h2 className="text-2xl font-bold text-green-800">My Plants</h2>
      </div>

      <div className="space-y-6">
        <div>
          {remaingplants.length === 0 ? (
            <div className="min-h-[50vh] w-11/12  mx-auto flex items-center justify-center">
              <div className="text-center text-gray-500 ">
                <h3 className="text-xl font-semibold">No Plants Found</h3>
                <p className="mt-2">
                  Please add some plants to your collection.
                </p>
              </div>
            </div>
          ) : (
            <h3 className="text-lg font-semibold text-gray-700">
              You have {remaingplants.length} plants
            </h3>
          )}
        </div>
        {remaingplants.map((plant) => (
          <div
            key={plant._id}
            className=" bg-white md:w-10/12 mx-auto rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row"
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

                <button
                  onClick={() => handledelete(plant._id)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>

            {/* Left Image */}
            <div className="md:w-1/3 w-full h-60 md:h-auto">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlant;
