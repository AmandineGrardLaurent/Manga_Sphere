// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import AdminProfilePage from "./pages/adminProfilPage/AdminProfilePage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import SerieDetailsPage from "./pages/serieDetailsPage/SerieDetailsPage";
import SeriesPage from "./pages/seriesPage/SeriesPage";

// Import additional components for new routes
// Try creating these components in the "pages" folder

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/series",
        element: <SeriesPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/admin",
        element: <AdminProfilePage />,
      },
      {
        path: "/series/details/:id",
        element: <SerieDetailsPage />,
      },
    ],
  },
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
