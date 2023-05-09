import React from 'react'
import { ActionFunction, Form, json, redirect } from 'react-router-dom'

const NewProduct: React.FC = () => {
  return <Form method='POST'></Form>
}

export default NewProduct

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()
  const response = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(formData)
  })

  if (!response.ok) {
    throw json('Could submit form', {
      status: 500
    })
  } else {
    redirect('/products')
  }
}
