import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PUBLIC_ROUTE } from "../utils/route";
import HomePage from "../pages/home";
import SearchProduct from "../pages/searchProduct";

// todo:- lazy loading is not working as of now --------
// const HomePage = lazy(() => import("../pages/home"));
// const SearchProduct = lazy(() => import("../pages/searchProduct"));

const router = createBrowserRouter([
  {
    path: PUBLIC_ROUTE.home,
    element: <HomePage />,
  },
  {
    path: PUBLIC_ROUTE.searchPage,
    element: <SearchProduct />,
  },
]);

function Navigation() {
  return <RouterProvider router={router} />;
}

export default Navigation;
