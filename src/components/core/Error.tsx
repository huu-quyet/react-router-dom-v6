import { NavLink, useRouteError } from 'react-router-dom'

type Error<T> = {
  data: T;
  status: number;
  statusText: string;
  internal: boolean;
  error?: {
    message: string;
    stack: string;
  }
}

/**
 * @useRouteError hook : return error Route which could be a loader/action error or a render error.
 */

const ErrorPage: React.FC = () => {
  const error = useRouteError() as Error<{
    message: string
  }>;

  let errorMessage: string | undefined = error?.data?.message;

  if(error.status === 404) {
    errorMessage = error?.error?.message
  }

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
        <p>{errorMessage}</p>
      </main>
    </>
  )
}

export default ErrorPage
