import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/authProvider";
import LoaddingSpinner from "../../Components/LoaddingSpinner";
import PlantTable from "./PlantTable";

function UserPlants() {
  const { user } = useContext(AuthContext);
  const currentUser = user.email;
  const [Plants, setPlants] = useState(null);
  const [loadding, setLoadding] = useState(true);

  //   call api
  useEffect(() => {
    fetch(`https://mango-server-nine.vercel.app/my-plants?email=${currentUser}`)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoadding(false);
      })
      .catch((error) => console.error("Error fetching user plants:", error));
  }, []);
  //    fetch(
  //             `https://mango-server-nine.vercel.app/my-plants?email=${params.email}`
  //           ),
  if (loadding) {
    return <LoaddingSpinner></LoaddingSpinner>;
  }
  if (!Plants || Plants.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-2xl font-bold text-green-600">No Plants Found</h2>
      </div>
    );
  }
  return (
    <div>
      <PlantTable Plants={Plants}></PlantTable>
    </div>
  );
}

export default UserPlants;
