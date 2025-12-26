import { createBrowserRouter } from "react-router";

import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllEvents from "../pages/events/AllEvents";
import EventDetails from "../pages/events/EventDetails";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "events",
        element: <AllEvents />,
      },
      {
        path: "event/:id",
        element: <EventDetails />, // পাবলিক ডিটেইলস পেজ
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    // children: [
    //   // -----------------------------------
    //   // COMMON ROUTES (For All Roles)
    //   // -----------------------------------

    //   // -----------------------------------
    //   // USER ROUTES (Role: User)
    //   // -----------------------------------
    //   {
    //     path: "my-bookings",
    //     element: <MyBookings />,
    //   },
    //   {
    //     path: "my-waitlist",
    //     element: <MyWaitlist />,
    //   },

    //   // -----------------------------------
    //   // MANAGER ROUTES (Role: Event Manager)
    //   // -----------------------------------
    //   {
    //     path: "add-event",
    //     element: (
    //       <ManagerRoute>
    //         <AddEvent />
    //       </ManagerRoute>
    //     ),
    //   },
    //   {
    //     path: "my-events",
    //     element: (
    //       <ManagerRoute>
    //         <MyEvents />
    //       </ManagerRoute>
    //     ),
    //   },
    //   {
    //     path: "update-event/:id",
    //     element: (
    //       <ManagerRoute>
    //         <UpdateEvent />
    //       </ManagerRoute>
    //     ),
    //   },

    //   // -----------------------------------
    //   // ADMIN ROUTES (Role: Admin)
    //   // -----------------------------------
    //   {
    //     path: "admin-home",
    //     element: (
    //       <AdminRoute>
    //         <AdminHome />
    //       </AdminRoute>
    //     ),
    //   },
    //   {
    //     path: "manage-users",
    //     element: (
    //       <AdminRoute>
    //         <ManageUsers />
    //       </AdminRoute>
    //     ),
    //   },
    // ],
  },
]);

export default router;
