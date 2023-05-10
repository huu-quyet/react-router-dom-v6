import { Suspense } from 'react'
import { Await, Link, defer, json, useFetcher, useLoaderData, useNavigation, useRouteLoaderData } from 'react-router-dom'

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
 * @useFetcher hook: hook useful when you should use with loader or action but without transitioning.
 * @defer hook: by default route working with loader() function only navigate when loader() resulted.
 * This is bad UI/UX for the user when they must to wait until the loader() resulted.
 * defer() funtion with <Await></Await> component and <Suspense></Suspense> help us solve this problem.
 */

const loaderProducts = async () => {
  // Call api
  // const response = await fetch('http://localhost:8080/events')
  /**
   * Custom responses when Error route happened
   */
  // throw json(
  //   { message : "Could not fetch events" },
  //   { status: 500 }
  // )

    // if (!response.ok) {
    //   // throw new Response(
    //   //   'Could not fetch events',
    //   //   {
    //   //     status: 500
    //   //   }
    //   // )
    //   throw json(
    //     { message : "Could not fetch events" },
    //     { status: 500 }
    //   )
    // } else {
    //   const resData = await response.json()
    //   return resData.events
    // }
  const resposne = [
    { id: 'p1', title: 'product 1' },
    { id: 'p2', title: 'product 2' },
    { id: 'p3', title: 'product 3' }
  ]

  setTimeout(() => {
    console.log("here")


    return resposne
  }, 3000)

}

const Products: React.FC = () => {
  // const products = useLoaderData() as unknown as {id: string, title: string}[];
  // const products = useRouteLoaderData('products') as unknown as { id: string; title: string }[]

  const data: any = useRouteLoaderData("products");
  console.log(data)

  // const fetcher = useFetcher()

  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <Await resolve={data?.products}>
       {(products) => <>
        <h1>The Products page</h1>
        {products?.map((p: any) => (
          <Link key={p.id} to={p.id}>
            {p.title}
          </Link>
        ))}
       </>}
      </Await>
      
      {/* <fetcher.Form method='POST' action='test'></fetcher.Form> */}
    </Suspense>
  )
}

export default Products

export const loader = () => {
  return defer({
    products: loaderProducts()
  })
}
