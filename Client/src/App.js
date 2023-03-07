import React from 'react'
import { useRoutes } from "react-router-dom"

import Home from './pages/Home'
import Product from './component/Product/Product'
import Customer from "./component/Customer/Customer";
import RegisterAgree from "./component/users/RegisterAgree/RegisterAgree";
import Register from './component/users/Register/Register'
import Login from './component/users/Login/Login'





function App() {
  return useRoutes([
    //Main
    {path:'/',element:<Home />},
    {path:'product',element:<Product />},
    {path:'customer',element:<Customer />},
    {path:'joinAgree',element:<RegisterAgree />},
    {path:'register',element:<Register />},
    {path:'login', element:<Login />}
      ]);
}

export default App;
