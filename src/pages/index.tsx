import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorDetail from "./ErrorDetail";
import Home from "./Home";
import Games from "./Games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorDetail />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/games",
        element: <Games />,
      },
    ],
  },
]);
export default router;
