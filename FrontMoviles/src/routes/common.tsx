import Home from "../pages/Home/components/Home";
import LogIn from "../pages/LogIn/components/LogIn";
import Productos from "../pages/Productos/components/Productos";
import Perfil from "../pages/Perfil/components/Perfil";
import Pedidos from "../pages/Pedidos/components/Pedidos";

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
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/pedidos",
    element: <Pedidos />,
  },
];
