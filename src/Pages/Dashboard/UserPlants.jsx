import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../authProvider/authProvider";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../authProvider/authProvider";
import LoaddingSpinner from "../../Components/LoaddingSpinner";

const UserPlants = () => {
  const { user } = useContext(AuthContext);
  const currentUser = user?.email;
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) return;

    fetch(`https://mango-server-nine.vercel.app/my-plants?email=${currentUser}`)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching user plants:", error));
  }, [currentUser]);

  if (loading) {
    return <LoaddingSpinner></LoaddingSpinner>;
  }

  return (
    <div className="p-4 md:p-8">
      <Helmet>
        <title>My Plants</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-green-700 mb-6">My Plants</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-green-700">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="p-3 text-left border border-green-700">Image</th>
              <th className="p-3 text-left border border-green-700">Name</th>
              <th className="p-3 text-left border border-green-700">
                Category
              </th>
              <th className="p-3 text-left border border-green-700">
                Care Level
              </th>
              <th className="p-3 text-left border border-green-700">
                Next Watering
              </th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant) => (
              <tr key={plant._id} className="hover:bg-green-100">
                <td className="p-3 border border-green-700">
                  <img
                    src={plant.image}
                    alt={plant.plantName}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3 border border-green-700">
                  {plant.plantName}
                </td>
                <td className="p-3 border border-green-700">
                  {plant.category}
                </td>
                <td className="p-3 border border-green-700">
                  {plant.careLevel || "N/A"}
                </td>
                <td className="p-3 border border-green-700">
                  {plant.nextWateringDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPlants;
