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
import DashboardLayout from "./Pages/Dashboard/DashboardLayout";
import DashHome from "./Pages/Dashboard/DashHome";
import UserPlants from "./Pages/Dashboard/UserPlants";
import About from "./Pages/About";
import Support from "./Pages/Support";
import DashboardAllPlants from "./Pages/Dashboard/DashboardAllPlants";
import DashboardAddPlant from "./Pages/Dashboard/DashboardAddPlant";

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
        path: "/about",
        Component: About,
      },
      {
        path: "/support",
        Component: Support,
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
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        index: true,
        path: "/dashboard",
        Component: DashHome,
      },
      {
        path: "/dashboard/yourplants",
        Component: UserPlants,
      },
      {
        path: "/dashboard/all-plants",
        Component: DashboardAllPlants,
      },
      {
        path: "/dashboard/add-plant",
        Component: DashboardAddPlant,
      },
    ],
  },

  {
    path: "*",
    Component: NotFound,
  },
]);
