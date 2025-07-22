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
        loader: () =>
          fetch("https://mango-server-nine.vercel.app/plants-latest"),
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
        loader: () => fetch("https://mango-server-nine.vercel.app/plants"),
        hydrateFallbackElement: <LoaddingSpinner></LoaddingSpinner>,
        Component: AllPlants,
      },
      {
        path: "plant/:id",

        loader: ({ params }) =>
          fetch(`https://mango-server-nine.vercel.app/plants/${params.id}`),
        hydrateFallbackElement: <LoaddingSpinner></LoaddingSpinner>,

        element: (
          <PrivetRoute>
            <PlantDetails></PlantDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/my-plants/:email",
        loader: ({ params }) =>
          fetch(
            `https://mango-server-nine.vercel.app/my-plants?email=${params.email}`
          ),
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
          fetch(`https://mango-server-nine.vercel.app/plants/${params.id}`),
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
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
