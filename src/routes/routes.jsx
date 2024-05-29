import { createBrowserRouter } from "react-router-dom";
import DashbaordLayout from "../layouts/DashbaordLayout";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import AddRecipe from "../pages/dashboard/AddRecipe";
import DashboardHome from "../pages/dashboard/DashboardHome";
import EditRecipe from "../pages/dashboard/EditRecipe";
import ManageAllRecipe from "../pages/dashboard/ManageAllRecipe";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashbaordLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "manage-recipes",
        element: <ManageAllRecipe />,
      },
      {
        path: "add-recipe",
        element: <AddRecipe />,
      },
      {
        path: "edit-recipe/:id",
        element: <EditRecipe />,
      },
      {
        path: "delete-recipe/:id",
        element: <EditRecipe />,
      },
    ],
  },
]);
