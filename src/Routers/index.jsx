import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/shared/Layout";
import Home from "../Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
          {
            path: "",
            element: <Home />,
          },
        ],
    }, 
  ]);

  export default router;
  