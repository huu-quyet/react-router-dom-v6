import { createBrowserRouter } from "react-router-dom"

import homeRoutes from "./home"
import productRoutes from "./products"

const routes = createBrowserRouter([
  homeRoutes,
  productRoutes
])

export default routes
