import { createBrowserRouter } from "react-router-dom"
import Home from "./home/home"
import Layout from "./Layout"
import Settings from "./settings/settings"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
])

export default router