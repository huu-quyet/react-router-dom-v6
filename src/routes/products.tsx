import Loadable from "@app/components/core/Loadable";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const ProductPage = Loadable(lazy(() => import("@app/pages/Products")))

const productRoutes: RouteObject = {
  path: "/products",
  element: <ProductPage/>
}

export default productRoutes
