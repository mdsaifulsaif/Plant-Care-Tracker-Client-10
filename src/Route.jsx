import { createBrowserRouter } from "react-router";
import Mainlayout from "./mainlayout/Mainlayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddPlant from "./Components/AddPlant";
import AllPlants from "./Pages/AllPlants";
import PlantDetails from "./Pages/PlantDetails";
import MyPlant from "./Pages/MyPlant";
import UpdatePlant from "./Pages/UpdatePlant";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("http://localhost:3000/plants"),
        Component: Home,
      },

      {
        path: "/add-plant",
        element: (
          <PrivetRoute>
            <AddPlant></AddPlant>
          </PrivetRoute>
        ),
      },
      {
        path: "/all-plants",
        loader: () => fetch("http://localhost:3000/plants"),
        Component: AllPlants,
      },
      {
        path: "plant/:id",

        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),
        Component: PlantDetails,
      },
      {
        path: "/my-plants/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/my-plants?email=${params.email}`),
        element: (
          <PrivetRoute>
            <MyPlant></MyPlant>
          </PrivetRoute>
        ),
      },
      {
        path: "/update-plant/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),
        Component: UpdatePlant,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
