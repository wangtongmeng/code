import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<div>root</div>}>
      <Route path="contact" element={<div>contact</div>} />
      <Route
        path="dashboard"
        element={<div>dashboard</div>}
        // loader={({ request }) =>
        //   fetch("/api/dashboard.json", {
        //     signal: request.signal,
        //   })
        // }
      />
      <Route element={<div>AuthLayout</div>}>
        {/* <Route path="login" element={<div>Login</div>} loader={redirectIfUser} /> */}
        <Route path="login" element={<div>Login</div>} />
        <Route path="logout" />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
