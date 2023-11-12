import Home from "../pages/Home/components/Home";
import LogIn from "../pages/LogIn/components/LogIn";

export { commonRoutes };

const commonRoutes = [
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];
