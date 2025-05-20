import { createBrowserRouter } from "react-router";
import Mainlayout from "./mainlayout/Mainlayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddPlant from "./Components/AddPlant";
import AllPlants from "./Pages/AllPlants";
import PlantDetails from "./Pages/PlantDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },

      {
        path: "/add-plant",
        Component: AddPlant,
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
