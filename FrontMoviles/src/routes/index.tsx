import { createBrowserRouter } from "react-router-dom";

import { commonRoutes } from "./common";

export { router };

const router = createBrowserRouter([...commonRoutes]);
