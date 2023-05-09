import { Link, LoaderFunction, LoaderFunctionArgs, useParams } from "react-router-dom"

/**
 * Back to previous page with relative path
 * relative = path : back to previous path
 * relative = route : back to previous route that is definition on routes by createBrowserRouter()
 */

const ProductDetail: React.FC = () =>  {
  const param = useParams();
  return <>
    <p>{param.productId}</p>
    <Link to={".."} relative="path">Back</Link>
  </>
}

export default ProductDetail

export const loader : LoaderFunction = ({ request, params }) => {
  console.log(request);
  console.log(params);
  return new Response("Success", {
    status: 200,
  });
}
