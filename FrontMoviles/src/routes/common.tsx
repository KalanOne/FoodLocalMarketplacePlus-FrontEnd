import Home from "../pages/Home/components/Home";
import LogIn from "../pages/LogIn/components/LogIn";
import Productos from "../pages/Productos/components/Productos";

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
  {
    path: "/productos",
    element: <Productos />,
  },
];
