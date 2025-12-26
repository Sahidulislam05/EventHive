import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
