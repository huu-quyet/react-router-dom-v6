import { Link, useLoaderData, useNavigation } from 'react-router-dom'

// const PRODUCT = [
//   { id: 'p1', title: 'product 1' },
//   { id: 'p2', title: 'product 2' },
//   { id: 'p3', title: 'product 3' }
// ]

/**
 * Navigate dynamic routes by relative route
 * With relative route, when you navigate the dynamic routes Browser will concat currently path with dynamic path
 * Current path : product
 * Dynamic path : products/:id 
 * @hook useLoaderData() : using data from loader() in the route component.
 * Use can use useLoaderData() in the element that's assigned to a route and in all components that might be child components.
 */

const Products: React.FC = () => {
  const products = useLoaderData() as unknown as {id: string, title: string}[];

  return (
    <>
      <h1>The Products page</h1>
      {products?.map((p) => (
        <Link key={p.id} to={p.id}>
          {p.title}
        </Link>
      ))}
    </>
  )
}

export default Products
