import { useContext, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../authProvider/authProvider";
import { Helmet } from "react-helmet-async";

const AddPlant = () => {
  const { user } = useContext(AuthContext);
  const [emailName, setEailName] = useState(user);
  const { email, displayName } = emailName;

  const handlePlant = (e) => {
    e.preventDefault();
    const meee = "hello me";
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
    <form
      onSubmit={handlePlant}
      className="w-11/12 mt-5 mx-auto bg-white grid grid-cols-1 md:grid-cols-2 gap-4 p-6  rounded-2xl shadow-md"
    >
      <Helmet>
        <title>Ninja | Add Plant</title>
      </Helmet>
      <h2 className="text-2xl font-bold col-span-full flex items-center gap-2 text-green-700 mb-4">
        <FaPlusCircle className="text-green-600" />
        Add New Plant
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          defaultValue="https://i.ibb.co/4fYx2gK/plant.png"
          placeholder="Image URL"
          type="text"
          name="image"
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Plant Name
        </label>
        <input
          required
          placeholder="Plant Name"
          type="text"
          name="plantName"
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          name="category"
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">Select Category</option>
          <option value="succulent">Succulent</option>
          <option value="fern">Fern</option>
          <option value="flowering">Flowering</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Care Level
        </label>
        <select
          name="careLevel"
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="">Select Care Level</option>
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="difficult">Difficult</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          maxLength={400}
          placeholder="Description"
          name="description"
          rows="3"
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Watering Frequency
        </label>
        <input
          required
          placeholder="Watering Frequency"
          type="text"
          name="wateringFrequency"
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Last Watered Date
        </label>
        <input
          placeholder="Last Watered Date"
          type="date"
          name="lastWateredDate"
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Next Watering Date
        </label>
        <input
          type="date"
          name="nextWateringDate"
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Health Status
        </label>
        <input
          required
          placeholder="Health Status"
          type="text"
          name="healthStatus"
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          User Email
        </label>
        <input
          defaultValue={email}
          readOnly
          type="email"
          name="userEmail"
          className=" cursor-not-allowed mt-1 w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          User Name
        </label>
        <input
          defaultValue={displayName}
          readOnly
          type="text"
          name="userName"
          className="  cursor-not-allowed mt-1 w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      <div className="col-span-full">
        <button
          type="submit"
          className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddPlant;
