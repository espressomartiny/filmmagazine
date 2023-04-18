import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Movies from "./components/Movies";
import Articles from "./components/Articles";
import Reviews from "./components/Reviews";
import Home from "./components/Home";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div className="container">
      <Menu />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
