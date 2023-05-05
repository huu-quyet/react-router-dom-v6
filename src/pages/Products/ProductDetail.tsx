import { Link, useParams } from "react-router-dom"

/**
 * Back to previous page with relative path
 * relative = path : back to previous path
 * relative = route : back to previous route that is definition on routes by createBrowserRouter()
 */

const ProductDetail: React.FC = () =>  {
  const param = useParams();
  console.log(param)
  return <>
    <p>{param.productId}</p>
    <Link to={".."} relative="path">Back</Link>
  </>
}

export default ProductDetail
