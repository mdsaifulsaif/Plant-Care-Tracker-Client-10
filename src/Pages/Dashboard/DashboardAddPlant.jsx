import { useContext, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Swal from "sweetalert2";

import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../authProvider/authProvider";

const DashboardAddPlant = () => {
  const { user } = useContext(AuthContext);
  const [emailName, setEmailName] = useState(user);
  const { email, displayName } = emailName;

  const handlePlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries());

    fetch("https://mango-server-nine.vercel.app/plant", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          Swal.fire({
            title: "Plant Added Successfully!",
            icon: "success",
            iconColor: "#008000",
            confirmButtonColor: "#008000",
            draggable: true,
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Ninja | Add Plant</title>
      </Helmet>
      <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-3xl shadow-lg border border-green-100">
        <div className="flex items-center gap-3 mb-8">
          <FaPlusCircle className="text-green-600 text-3xl" />
          <h2 className="text-3xl font-semibold text-green-700">
            Add New Plant
          </h2>
        </div>

        <form onSubmit={handlePlant} className="space-y-6">
          {/* Image URL */}
          <div>
            <label
              htmlFor="image"
              className="block mb-2 font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              id="image"
              required
              name="image"
              type="text"
              //   defaultValue="https://i.ibb.co/4fYx2gK/plant.png"
              placeholder="Image URL"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-300 transition"
            />
          </div>

          {/* Plant Name */}
          <div>
            <label
              htmlFor="plantName"
              className="block mb-2 font-medium text-gray-700"
            >
              Plant Name <span className="text-red-500">*</span>
            </label>
            <input
              id="plantName"
              name="plantName"
              type="text"
              required
              placeholder="Plant Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-300 transition"
            />
          </div>

          {/* Category & Care Level */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="category"
                className="block mb-2 font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-300 transition"
              >
                <option value="">Select Category</option>
                <option value="succulent">Succulent</option>
                <option value="fern">Fern</option>
                <option value="flowering">Flowering</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="careLevel"
                className="block mb-2 font-medium text-gray-700"
              >
                Care Level
              </label>
              <select
                id="careLevel"
                name="careLevel"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-300 transition"
              >
                <option value="">Select Care Level</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block mb-2 font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              maxLength={400}
              rows="4"
              placeholder="Description"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-300 transition resize-none"
            ></textarea>
          </div>

          {/* Watering Frequency */}
          <div>
            <label
              htmlFor="wateringFrequency"
              className="block mb-2 font-medium text-gray-700"
            >
              Watering Frequency <span className="text-red-500">*</span>
            </label>
            <input
              id="wateringFrequency"
              name="wateringFrequency"
              type="text"
              required
              placeholder="Watering Frequency"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-300 transition"
            />
          </div>

          {/* Dates: Last Watered & Next Watering */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="lastWateredDate"
                className="block mb-2 font-medium text-gray-700"
              >
                Last Watered Date
              </label>
              <input
                id="lastWateredDate"
                name="lastWateredDate"
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-300 transition"
              />
            </div>
            <div>
              <label
                htmlFor="nextWateringDate"
                className="block mb-2 font-medium text-gray-700"
              >
                Next Watering Date
              </label>
              <input
                id="nextWateringDate"
                name="nextWateringDate"
                type="date"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-300 transition"
              />
            </div>
          </div>

          {/* Health Status */}
          <div>
            <label
              htmlFor="healthStatus"
              className="block mb-2 font-medium text-gray-700"
            >
              Health Status <span className="text-red-500">*</span>
            </label>
            <input
              id="healthStatus"
              name="healthStatus"
              type="text"
              required
              placeholder="Health Status"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-300 transition"
            />
          </div>

          {/* User Email & Name (readonly) */}
          <div>
            <label
              htmlFor="userEmail"
              className="block mb-2 font-medium text-gray-700"
            >
              User Email
            </label>
            <input
              id="userEmail"
              name="userEmail"
              type="email"
              value={email}
              readOnly
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label
              htmlFor="userName"
              className="block mb-2 font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              id="userName"
              name="userName"
              type="text"
              value={displayName}
              readOnly
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Add Plant
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DashboardAddPlant;
