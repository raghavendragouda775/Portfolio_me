import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// If routing is needed later, uncomment the following imports:
// import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";

// Example Router setup (uncomment if needed):
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/contact", element: <Contact /> },
//     ],
//   },
//   { path: "*", element: <Navigate to={"/"} /> },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Use RouterProvider if routing is implemented */}
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>
);
