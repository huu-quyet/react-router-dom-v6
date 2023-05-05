/**
 * @navigate
 * With a tag, when use click to a tag, a new HTTP request will send to the server and the brower reload all the page => React application also reloaded. That is not nesessary.
 * Approaching is only change URL and navigate to the page that is definition by the URL
 */

import { Link, useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const navigateHandler = () => {
    navigate('/products')
  }
  return (
    <div>
      <h1>Home page</h1>
      {/* <a href="/products">Go to the products page</a> */}
      <Link to='products'>Go to the products page</Link>
      <button onClick={navigateHandler}>Navigate</button>
    </div>
  )
}

export default Home
