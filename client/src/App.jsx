import React from "react";
import {
  Home,
  Error,
  Login,
  Register,
  ProductList,
  Product,
  HomeLayout,
  Cart
} from './pages/index'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import { useSelector } from "react-redux";



const App = () => {
  const user = useSelector(state=>state.user.currentUser)
  const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayout/>,
      errorElement:<Error/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'products/:category',
          element:<ProductList/>
        },
        {
          path:'product/:id',
          element:<Product/>
        },
        {
          path:'cart',
          element:<Cart/>
        },
  
      ]
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login/>,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> :<Register/>,
    },
  ]);
  // console.log(user)
  return (
    <RouterProvider router={router} />
  )
}

export default App
