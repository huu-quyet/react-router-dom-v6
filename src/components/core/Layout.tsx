import { NavLink, Outlet, useNavigation } from 'react-router-dom'

/**
 * @hook useNavigation() : This hook tells you everything you need to know about a page navigation to build pending navigation indicators and optimistic UI on data mutations.
 * Things like:
 * Global loading indicators
 * Disabling forms while a mutation is happening
 * Adding busy indicators to submit buttons
 * Optimistically showing a new record while it's being created on the server
 * Optimistically showing the new state of a record while it's being updated
 */

const Layout: React.FC = () => {
  const navigation = useNavigation()
  console.log(navigation)
  return (
    <>
      <header>
        <NavLink end className={({ isActive }) => (isActive ? 'link_actived' : '')} to='/'>
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link_actived' : '')} to='/products'>
          Products
        </NavLink>
      </header>
      <main>
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  )
}

export default Layout
