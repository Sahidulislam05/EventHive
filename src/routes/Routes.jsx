import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // Check if Login/Register pages exist, otherwise placeholders
      // { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
