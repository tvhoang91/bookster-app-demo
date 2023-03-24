import { createBrowserRouter } from "react-router-dom"
import Home from "./home/Home"
import Layout from "./layout/Layout"
import Settings from "./settings/Settings"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "settings/:tabId",
        element: <Settings />,
      },
    ],
  },
])

export default router