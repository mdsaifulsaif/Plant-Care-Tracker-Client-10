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
import NotFound from "./Components/NotFound";
import LoaddingSpinner from "./Components/LoaddingSpinner";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("http://localhost:3000/plants-latest"),
        hydrateFallbackElement: <LoaddingSpinner>r</LoaddingSpinner>,
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
        hydrateFallbackElement: <LoaddingSpinner></LoaddingSpinner>,
        Component: AllPlants,
      },
      {
        path: "plant/:id",

        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),
        hydrateFallbackElement: <LoaddingSpinner></LoaddingSpinner>,
        // Component: PlantDetails,
        element: (
          <PrivetRoute>
            <PlantDetails></PlantDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/my-plants/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/my-plants?email=${params.email}`),
        hydrateFallbackElement: <LoaddingSpinner></LoaddingSpinner>,
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
        hydrateFallbackElement: <LoaddingSpinner></LoaddingSpinner>,
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
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
