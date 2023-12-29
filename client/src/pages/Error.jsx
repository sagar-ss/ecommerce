import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
  return (
    <div>
      <h1>Something went Wrong...</h1>
      <p>{error}</p>
    </div>
  )
}

export default Error
