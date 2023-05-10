import { createBrowserRouter, json } from 'react-router-dom'

import homeRoutes from './home'
import productRoutes from './products'
import Layout from '@app/components/core/Layout'
import Home from '@app/pages/Home'
import Products, { loader } from '@app/pages/Products'
import ErrorPage from '@app/components/core/Error'
import ProductDetail, { loader as productDeailLoader } from '@app/pages/Products/ProductDetail'
import EditProduct from '@app/pages/Products/EditProduct'

/**
 * Another way create routes from Elements like version 5
 */

// import { Route, createRoutesFromElements } from "react-router-dom"

// const route = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/products" element={<Products/>}/>
//   </Route>
// )

// const routes = createBrowserRouter(route)

/**
 * @comment absolute path
 */
// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     errorElement: <ErrorPage/>,
//     children: [
//       {
//         path: "/",
//         element: <Home/>
//       },
//       {
//         path: "/products",
//         element: <Products/>,
//       },
//       {
//         path: "/products/:productId",
//         element: <ProductDetail/>
//       }
//     ]
//   }
// ])

/**
 * @comment relative path
 * @property index : Define a route as default route that should be displayed if the parent route's path is currently active
 * @property loader : In React app, We usually fetch data in the first component rendering by userEffect().
 * However, If complex component or nested components that can be take many time.
 * React route allow us fetching data before first redering the component.
 * Loader() funtion would be called right when we start navigating to the page. So not after the page component has been rendered, but before we actually go there.
 * Data return from loader() would be transitted to the element which defined in the route.
 * But if the loader() funtion delayed by the request take a long time, the page component would be not redered until the loader() to be finished
 */
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products',
        id: "products",
        loader: loader,
        children: [
          {
            index: true,
            element: <Products />
          },
          {
            path: ':productId',
            id: 'product-detail',
            loader: productDeailLoader,
            children: [
              {
                index: true,
                element: <ProductDetail />
              },
              {
                path: 'edit',
                element: <EditProduct />
              }
            ]
          }
        ]
      }
    ]
  }
])

// const routes = createBrowserRouter([
//   homeRoutes,
//   productRoutes
// ])

export default routes
