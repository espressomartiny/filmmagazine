import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Movies from "./components/Movies";
import Articles from "./components/Articles";
import Reviews from "./components/Reviews";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/reviews',
    element: <Reviews />,
  },
  {
    path: '/articles',
    element: <Articles />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
