import { NavLink } from 'react-router-dom'

const ErrorPage: React.FC = () => {
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
        <h1>An error occured !</h1>
        <p>Can not get this page</p>
      </main>
    </>
  )
}

export default ErrorPage
