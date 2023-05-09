import { useRouteLoaderData } from "react-router-dom";

/**
 * @useRouteLoaderData hook : get data from loader by routeID
 */

const EditProduct: React.FC = () => {
  const productDetail = useRouteLoaderData("product-detail");
  console.log(productDetail)
  return <div>Edit product</div>
} 

export default EditProduct;
