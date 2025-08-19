import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import CountryDetail from "./components/CountryDetail";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:Country",
        element: <CountryDetail />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={router} />);
