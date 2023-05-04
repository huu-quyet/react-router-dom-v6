import Loadable from '@app/components/core/Loadable'
import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const HomePage = Loadable(lazy(() => import("@app/pages/Home")))

const homeRoutes: RouteObject = {
  path: '/',
  element: <HomePage/>
}

export default homeRoutes
