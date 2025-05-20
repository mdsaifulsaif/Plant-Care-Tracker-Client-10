import { FaPlusCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const AddPlant = () => {
  const handlePlant = (e) => {
    e.preventDefault();
    const meee = "hello me";
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/plant", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Plant Added Successfully!",
            icon: "success",
            draggable: true,
          });
        }
        console.log("data show for clint site", data);
      });
  };
  return (
    <form
      onSubmit={handlePlant}
      className="w-11/12 mx-auto bg-white grid grid-cols-1 md:grid-cols-2 gap-4 p-6  rounded-2xl shadow-md"
    >
      <h2 className="text-2xl font-bold col-span-full flex items-center gap-2 text-green-700 mb-4">
        <FaPlusCircle className="text-green-600" />
        Add New Plant
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
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
          type="email"
          name="userEmail"
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          User Name
        </label>
        <input
          type="text"
          name="userName"
          className="mt-1 w-full border border-gray-300 rounded-lg p-2"
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
