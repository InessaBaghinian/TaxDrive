import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import App from "./App";
import Home from "./pages/Home";
import Drivers from "./Service/pages/drivers/Drivers";
import DriversAddOrEdit from "./Service/pages/drivers/DriversAddOrEdit";
import Login from "./pages/login/Login";
import NotFound from "./Service/pages/NotFound";
import RequireGuest from "./components/RequireGuest";
import Registration from "./pages/login/Registration"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <App />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/drivers",
        children: [
          {
            index: true,
            element: <Drivers />,
          },
          {
            path: "add",
            element: <DriversAddOrEdit />,
          },
          {
            path: ":id/edit",
            element: <DriversAddOrEdit />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: (
      <RequireGuest>
        <Login />
      </RequireGuest>
    ),
  },
  {
    path: "registration",
    element: <Registration />
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
