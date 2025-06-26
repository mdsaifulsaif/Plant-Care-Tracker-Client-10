import React, { useContext, useEffect, useState } from "react";
import { FaLeaf, FaPlus, FaUser } from "react-icons/fa";
import PlantCareLevelChart from "./PlantCareLevelChart";
import AllPlants from "./../AllPlants";
import LoaddingSpinner from "../../Components/LoaddingSpinner";
import { AuthContext } from "../../authProvider/authProvider";

function DashHome() {
  const { user } = useContext(AuthContext);
  const currentUser = user.email;
  const [AllPlants, setAllPlants] = useState([]);
  const [userPlants, setUserPlants] = useState([]);
  // const [AllPlants, setAllPlants] = React.useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  // all plants

  // New state for date and time
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    fetch("https://mango-server-nine.vercel.app/plants")
      .then((response) => response.json())
      .then((data) => {
        // Process the data as needed
        setAllPlants(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
      });
  }, []);

  // user plant
  useEffect(() => {
    fetch(`https://mango-server-nine.vercel.app/my-plants?email=${currentUser}`)
      .then((response) => response.json())
      .then((data) => {
        // Process the data as needed
        setUserPlants(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
      });
  }, []);

  if (loading) {
    return <LoaddingSpinner></LoaddingSpinner>;
  }
  return (
    <div>
      <section className="p-6 bg-green-50 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-green-800 mb-4">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600">
          Here you can manage your plants, view care tips, and more!
        </p>
      </section>
      {/* Additional components like NewPlants, SeasonalPlantCareTips can be added here */}
      <div className="grid grid-cols-1 gap-5 text-white md:grid-cols-3 ">
        <div className="bg-green-400 p-10 text-center rounded-xl mt-5">
          <div>
            {" "}
            <FaPlus /> <h2 className="font-semibold">Total Plant</h2>
          </div>
          <p className="font-bold">{AllPlants?.length}</p>
        </div>
        <div className="bg-yellow-400 p-10 text-center text-white rounded-xl mt-5">
          <div>
            {" "}
            <FaUser /> <h2 className="font-semibold">Your Total Plant</h2>
          </div>
          <p className="font-bold">{userPlants ? userPlants.length : "0"}</p>
        </div>
        <div className="bg-red-400 p-10 text-center text-white rounded-xl mt-5">
          <div>
            {" "}
            <FaLeaf /> <h2 className="font-semibold"> Date</h2>
          </div>
          <p className="font-bold">{currentDateTime.toLocaleDateString()}</p>
        </div>
      </div>
      <PlantCareLevelChart AllPlants={AllPlants}></PlantCareLevelChart>
    </div>
  );
}

export default DashHome;
